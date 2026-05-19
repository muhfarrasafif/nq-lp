import fs from 'node:fs/promises';
import path from 'node:path';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error('OPENAI_API_KEY is missing.');
  process.exit(1);
}

const outDir = path.resolve('public/products');
await fs.mkdir(outDir, { recursive: true });

const products = [
  {
    file: 'gel-manicure.png',
    prompt:
      'Premium studio product photo for Nailsqueen Gel Manicure kit on soft warm beige background, elegant luxury beauty branding, realistic lighting, clean composition, no text, no watermark, high detail.'
  },
  {
    file: 'builder-gel.png',
    prompt:
      'Professional product photo of Nailsqueen Builder Gel jars and brush tools, warm neutral salon aesthetic, soft shadows, high-end commercial style, no text, no watermark, ultra clean background.'
  },
  {
    file: 'nail-art-custom.png',
    prompt:
      'Creative Nailsqueen nail art product flatlay with gems, fine brushes, and gel palette, premium feminine beauty style, warm beige and rose tones, realistic, no text, no watermark.'
  },
  {
    file: 'spa-care.png',
    prompt:
      'Luxury spa and nail care product arrangement for Nailsqueen, lotion bottles, cuticle oil, towels, stones, calming warm palette, realistic commercial product image, no text, no watermark.'
  },
  {
    file: 'consultation.png',
    prompt:
      'Modern beauty consultation desk scene for Nailsqueen brand, tablet, product catalog, manicure samples, premium salon mood, realistic photo style, no text, no watermark.'
  }
];

for (const item of products) {
  const res = await fetch('https://api.openai.com/v1/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      size: '1536x1024',
      background: 'opaque',
      output_format: 'png',
      prompt: item.prompt
    })
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed for ${item.file}: ${res.status} ${text}`);
  }

  const json = await res.json();
  const b64 = json?.data?.[0]?.b64_json;
  if (!b64) throw new Error(`No image data returned for ${item.file}`);

  const buffer = Buffer.from(b64, 'base64');
  await fs.writeFile(path.join(outDir, item.file), buffer);
  console.log(`Generated ${item.file}`);
}

console.log('Done. Images saved to public/products');
