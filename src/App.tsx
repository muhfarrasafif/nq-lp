import { motion } from 'motion/react';
import { 
  Calendar, 
  MessageCircle, 
  Crown, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Star, 
  Award, 
  Newspaper, 
  Gift, 
  ChevronDown, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  Send,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';

const TRANSLATIONS = {
  ID: {
    topBanner: "Solusi Perawatan & Kecantikan Kuku Profesional Untuk Kesuksesan Anda",
    nav: { home: "Beranda", about: "Tentang Kami", service: "Layanan Kami", why: "Kenapa Kami", awards: "Penghargaan", news: "Berita", contact: "Kontak" },
    btn: { book: "Pesan Sekarang", chat: "Chat Admin", bookApp: "Pesan Jadwal", viewAllService: "Lihat Semua Layanan", viewAllAwards: "Lihat Semua", viewAllNews: "Lihat Semua", viewAllEvents: "Lihat Semua" },
    hero: {
      subtitle: "Solusi Perawatan & Kecantikan Kuku Profesional",
      title: "Berdayakan\nBisnis Kuku Anda\nuntuk Bersinar",
      desc: "Nailsqueen menyediakan layanan dan perawatan kuku terbaik dengan standar profesional untuk hasil yang aman, higienis, dan memuaskan."
    },
    features: [
      { title: "Kualitas Profesional", desc: "Layanan berkualitas tinggi & terpercaya" },
      { title: "Aman & Higienis", desc: "Aman digunakan dengan standar tinggi" },
      { title: "Inovasi Berkelanjutan", desc: "Selalu berinovasi mengikuti tren" },
      { title: "Dukungan Ahli", desc: "Tim profesional siap membantu Anda" }
    ],
    services: {
      title: "Layanan Kami",
      desc: "Lengkapi kebutuhan salon Anda dengan layanan pilihan dari Nailsqueen.",
      items: [
        { title: "Gel Manicure", desc: "Warna premium dengan kualitas terbaik" },
        { title: "Builder Gel", desc: "Kuat, tahan lama & mudah diaplikasikan" },
        { title: "Nail Art Custom", desc: "Ekspresikan kreativitas tanpa batas" },
        { title: "Spa & Care", desc: "Perawatan kuku untuk hasil maksimal" },
        { title: "Consultation", desc: "Konsultasi bisnis dan gaya" }
      ]
    },
    why: {
      title: "Mengapa Memilih Nailsqueen?",
      items: [
        { title: "Berkualitas Tinggi", desc: "Bahan pilihan dengan standar internasional" },
        { title: "Aman & Terpercaya", desc: "Teruji & aman untuk kuku dan kulit" },
        { title: "Edukasi & Support", desc: "Dukungan, training & tips untuk pertumbuhan bisnis" },
        { title: "Inovatif & Trendy", desc: "Selalu update dengan tren terbaru" }
      ],
      awards: { title: "Penghargaan", desc: "Penghargaan yang kami raih adalah bukti komitmen terhadap kualitas terbaik." },
      news: { title: "Berita & Media", desc: "Temukan update terbaru, pencapaian, dan wawasan dari Nailsqueen." },
      events: { 
        title: "Event & Promo", desc: "Jangan lewatkan event seru dan promo spesial dari Nailsqueen!", 
        promoLabel: "Promo Spesial", promoDesc: "Untuk Layanan Terpilih" 
      }
    },
    cta: {
      title: "Siap Mengembangkan Bisnis Kuku Anda?",
      desc: "Booking konsultasi atau tanya kebutuhan salon Anda langsung dengan tim Nailsqueen."
    },
    contact: {
      title: "Hubungi Kami",
      desc: "Punya pertanyaan atau ingin berkolaborasi? Isi form di bawah ini dan tim kami segera membalas.",
      name: "Nama Lengkap",
      phone: "Nomor Telepon",
      email: "Alamat Email",
      msg: "Pesan",
      send: "Kirim Pesan"
    },
    footer: {
      desc: "Mitra terpercaya Anda untuk solusi perawatan & kecantikan kuku profesional.",
      quick: "Tautan Cepat",
      service: "Layanan Pelanggan",
      contact: "Hubungi Kami",
      shipping: "Informasi Pengiriman",
      return: "Pengembalian & Penukaran",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      chatWa: "Chat via WhatsApp",
      rights: "Semua Hak Dilindungi."
    }
  },
  ENG: {
    topBanner: "Professional Nail Care & Beauty Solutions For Your Success",
    nav: { home: "Home", about: "About Us", service: "Our Service", why: "Why Us", awards: "Awards", news: "News", contact: "Contact" },
    btn: { book: "Book Now", chat: "Chat Admin", bookApp: "Book Appointment", viewAllService: "View All Services", viewAllAwards: "View All Awards", viewAllNews: "View All News", viewAllEvents: "View All Events" },
    hero: {
      subtitle: "Professional Nail Care & Beauty Solutions",
      title: "Empowering\nYour Nail Business\nto Shine",
      desc: "Nailsqueen provides the best nail care and services with professional standards for safe, hygienic, and satisfying results."
    },
    features: [
      { title: "Professional Quality", desc: "High quality & trusted services" },
      { title: "Safe & Hygienic", desc: "Safe to use with high standards" },
      { title: "Continuous Innovation", desc: "Always innovating with trends" },
      { title: "Expert Support", desc: "Professional team ready to help" }
    ],
    services: {
      title: "Our Service",
      desc: "Complete your salon needs with selected services from Nailsqueen.",
      items: [
        { title: "Gel Manicure", desc: "Premium colors with best quality" },
        { title: "Builder Gel", desc: "Strong, long-lasting & easy to apply" },
        { title: "Custom Nail Art", desc: "Express limitless creativity" },
        { title: "Spa & Care", desc: "Nail care for maximum results" },
        { title: "Consultation", desc: "Business and style consultation" }
      ]
    },
    why: {
      title: "Why Choose Nailsqueen?",
      items: [
        { title: "High Quality", desc: "Selected materials with international standards" },
        { title: "Safe & Trusted", desc: "Tested & safe for nails and skin" },
        { title: "Education & Support", desc: "Support, training & tips for business growth" },
        { title: "Innovative & Trendy", desc: "Always updated with latest trends" }
      ],
      awards: { title: "Awards & Recognition", desc: "Awards we have achieved are proof of our commitment." },
      news: { title: "News & Media", desc: "Discover the latest updates, achievements, and insights from Nailsqueen." },
      events: { 
        title: "Events & Offers", desc: "Don't miss out on exciting events and special promos from Nailsqueen!",
        promoLabel: "Special Offer", promoDesc: "For Selected Services"
      }
    },
    cta: {
      title: "Ready to Grow Your Nail Business?",
      desc: "Book a consultation or inquire about your salon needs directly with the Nailsqueen team."
    },
    contact: {
      title: "Get In Touch",
      desc: "Have a question or want to collaborate? Fill out the form below and our team will contact you shortly.",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      msg: "Message",
      send: "Send Message"
    },
    footer: {
      desc: "Your trusted partner for professional nail care & beauty solutions.",
      quick: "Quick Links",
      service: "Customer Service",
      contact: "Contact Us",
      shipping: "Shipping Information",
      return: "Return & Exchange",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      chatWa: "Chat on WhatsApp",
      rights: "All Rights Reserved."
    }
  }
};

type Language = 'ID' | 'ENG';

export default function App() {
  const currentDate = new Date();
  const today = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
  const currentTime = `${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}`;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('ID');
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeAwardSlide, setActiveAwardSlide] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: today,
    time: currentTime,
    notes: ''
  });
  const heroSlides = [
    { src: '/home1.jpeg', alt: 'Nailsqueen team and product wall', pos: 'object-center sm:object-[center_32%] lg:object-[center_30%]' },
    { src: '/home2.jpeg', alt: 'Nailsqueen relaxing treatment chairs', pos: 'object-[62%_center] sm:object-center lg:object-[58%_center]' },
    { src: '/home3.jpeg', alt: 'Nailsqueen manicure studio interior', pos: 'object-[58%_center] sm:object-center lg:object-[56%_center]' }
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveAwardSlide((prev) => (prev + 1) % 3);
    }, 2800);

    return () => window.clearInterval(intervalId);
  }, []);

  const t = TRANSLATIONS[lang];
  const bookingText = {
    title: lang === 'ID' ? 'Booking Schedule' : 'Booking Schedule',
    desc: lang === 'ID' ? 'Isi form berikut, lalu kirim langsung ke WhatsApp admin.' : 'Fill out the form below, then send directly to our WhatsApp admin.',
    name: lang === 'ID' ? 'Nama Lengkap' : 'Full Name',
    phone: lang === 'ID' ? 'Nomor WhatsApp' : 'WhatsApp Number',
    service: lang === 'ID' ? 'Pilih Layanan' : 'Select Service',
    notes: lang === 'ID' ? 'Catatan tambahan (opsional)' : 'Additional notes (optional)',
    send: lang === 'ID' ? 'Kirim ke WhatsApp' : 'Send to WhatsApp'
  };
  const why5th = lang === 'ID'
    ? { title: 'Harga Kompetitif', desc: 'Kualitas terbaik dengan harga yang bersaing' }
    : { title: 'Competitive Price', desc: 'Best quality with competitive pricing' };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const LangToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center text-xs font-medium border border-brand-dark/20 rounded-full p-1 bg-white/50 ${className}`}>
      <button 
        onClick={() => setLang('ID')} 
        className={`px-3 py-1.5 rounded-full transition-colors flex-1 ${lang === 'ID' ? 'bg-brand-dark text-white' : 'text-brand-dark hover:bg-brand-dark/10'}`}
      >
        ID
      </button>
      <button 
        onClick={() => setLang('ENG')} 
        className={`px-3 py-1.5 rounded-full transition-colors flex-1 ${lang === 'ENG' ? 'bg-brand-dark text-white' : 'text-brand-dark hover:bg-brand-dark/10'}`}
      >
        ENG
      </button>
    </div>
  );

  const handleBookingInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitBookingToWhatsApp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const waNumber = '6281234567890';
    const message = (lang === 'ID' ? 'Halo Nailsqueen, saya ingin booking jadwal:' : 'Hi Nailsqueen, I would like to book an appointment:') + `%0A%0A` +
      `${lang === 'ID' ? 'Nama' : 'Name'}: ${bookingForm.name}%0A` +
      `${lang === 'ID' ? 'No. HP' : 'Phone'}: ${bookingForm.phone}%0A` +
      `${lang === 'ID' ? 'Layanan' : 'Service'}: ${bookingForm.service}%0A` +
      `${lang === 'ID' ? 'Tanggal' : 'Date'}: ${bookingForm.date}%0A` +
      `${lang === 'ID' ? 'Jam' : 'Time'}: ${bookingForm.time}%0A` +
      `${lang === 'ID' ? 'Catatan' : 'Notes'}: ${bookingForm.notes || '-'}%0A`;

    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
    setIsBookingOpen(false);
    setBookingForm({ name: '', phone: '', service: '', date: today, time: currentTime, notes: '' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-brand-dark text-[#C49A6C] text-[11px] sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 text-center flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap leading-relaxed">
        <Star size={14} className="hidden sm:block" />
        <span>{t.topBanner}</span>
        <Star size={14} className="hidden sm:block" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-light/95 backdrop-blur-md border-b border-brand-dark/10">
        <div className="container mx-auto px-4 lg:px-8 py-2.5 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 bg-brand-light rounded-md px-1 py-0.5">
            <img
              src="/logo-nq.jpeg"
              alt="Nailsqueen Logo"
              className="h-8 sm:h-12 w-auto max-w-[170px] sm:max-w-[240px] object-contain"
              style={{ filter: 'invert(1)', mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-brand-dark">
            <a href="#home" className="hover:text-brand-accent transition-colors border-b-2 border-brand-accent">{t.nav.home}</a>
            <a href="#about" className="hover:text-brand-accent transition-colors">{t.nav.about}</a>
            <div className="relative group cursor-pointer flex items-center gap-1">
              <a href="#services" className="hover:text-brand-accent transition-colors">{t.nav.service}</a>
              <ChevronDown size={14} />
            </div>
            <a href="#why" className="hover:text-brand-accent transition-colors">{t.nav.why}</a>
            <a href="#awards" className="hover:text-brand-accent transition-colors">{t.nav.awards}</a>
            <a href="#news" className="hover:text-brand-accent transition-colors">{t.nav.news}</a>
            <a href="#contact" className="hover:text-brand-accent transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LangToggle />
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-brand-dark p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden bg-brand-light border-t border-brand-dark/10 px-4 py-4 flex flex-col gap-4 shadow-xl absolute top-full w-full left-0 origin-top"
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.home}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.about}</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.service}</a>
            <a href="#why" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.why}</a>
            <a href="#awards" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.awards}</a>
            <a href="#news" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.news}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.contact}</a>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-brand-dark/10 mt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-brand-dark flex items-center gap-2"><Globe size={16}/> {lang === 'ID' ? 'Bahasa' : 'Language'}</span>
                <LangToggle className="w-32" />
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-0 px-0 scroll-mt-24">
        <div className="container mx-auto">
          <div className="relative overflow-hidden bg-[#f3e8dc] rounded-b-[1.25rem] sm:rounded-b-[1.5rem] lg:rounded-none">
            <div className="absolute inset-y-0 left-[41%] hidden lg:block w-24 bg-gradient-to-r from-[#f3e8dc] via-[#f3e8dc]/75 to-transparent z-20" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-0 p-0 sm:p-8 lg:p-0 mt-2 sm:mt-5 lg:mt-6">
              <motion.div
                className="hidden lg:block w-full lg:w-[41%] z-30 text-center lg:text-left lg:pl-10 xl:pl-14 lg:py-10"
                initial="hidden" animate="visible" variants={fadeIn}
              >
                <p className="uppercase tracking-wider text-[10px] sm:text-xs font-semibold text-[#6b584e] mb-3 sm:mb-4">
                  {t.hero.subtitle}
                </p>
                <h1 className="text-[1.95rem] sm:text-5xl lg:text-[4.1rem] font-serif text-[#2d1a16] leading-[1.05] mb-3 sm:mb-5 tracking-tight">
                  Empowering
                  <br />
                  Your Nail Business
                  <br />
                  to Shine
                </h1>
                <p className="text-[#4f4038] text-sm sm:text-base mb-5 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Nailsqueen menyediakan produk dan perawatan kuku terbaik dengan standar profesional untuk hasil yang aman, higienis, dan memuaskan.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 w-full sm:w-auto">
                  <button className="hidden sm:flex w-full sm:w-auto bg-[#6b3221] text-white px-6 py-3 rounded-xl items-center justify-center gap-2 hover:bg-[#7d3d2a] transition-colors font-medium text-sm">
                    <Calendar size={18} />
                    {t.btn.bookApp}
                  </button>
                  <button className="hidden sm:flex w-full sm:w-auto bg-[#f7efe6]/70 border border-[#b48a73] text-[#4b2f25] px-6 py-3 rounded-xl items-center justify-center gap-2 hover:bg-[#fcf7f2] transition-colors font-medium text-sm">
                    <MessageCircle size={18} />
                    {t.btn.chat}
                  </button>
                </div>
                <p className="hidden sm:flex mt-3 sm:mt-4 text-xs sm:text-sm text-[#5a4339] items-center justify-center lg:justify-start gap-2">
                  <ShieldCheck size={16} className="text-[#8f664f]" />
                  {lang === 'ID' ? 'Tidak perlu pembayaran di website ini.' : 'No payment needed on this website.'}
                </p>
              </motion.div>

              <motion.div
                className="w-full lg:w-[59%] relative"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="sm:hidden relative overflow-hidden aspect-[4/5] bg-[#f2e8dd] min-h-[320px]">
                  <img
                    src="/home3.jpeg"
                    alt="Nailsqueen studio interior"
                    className="absolute inset-0 w-full h-full object-cover object-[56%_center]"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f3e8dc] via-[#f3e8dc]/55 to-transparent" />
                </div>

                <div className="hidden sm:block relative overflow-hidden rounded-[1rem] lg:rounded-none aspect-[16/10] lg:aspect-[16/9] bg-[#f2e8dd] min-h-[420px] lg:min-h-0">
                  {heroSlides.map((slide, idx) => (
                    <img
                      key={slide.src}
                      src={slide.src}
                      alt={slide.alt}
                      className={`absolute inset-0 w-full h-full object-cover ${slide.pos} transition-opacity duration-700 ${activeSlide === idx ? 'opacity-100' : 'opacity-0'}`}
                      fetchPriority={idx === 0 ? 'high' : 'auto'}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="w-full px-4 pt-3 pb-2 sm:hidden"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <p className="uppercase tracking-wider text-[11px] font-semibold text-[#7a665a] mb-3">
                  {t.hero.subtitle}
                </p>
                <h1 className="text-[3rem] font-serif text-[#2d1a16] leading-[0.95] mb-3 tracking-tight">
                  Empowering Your
                  <br />
                  Nail Business
                  <br />
                  to Shine
                </h1>
                <p className="text-[#4f4038] text-[13px] mb-4 leading-relaxed">
                  Nailsqueen menyediakan produk dan perawatan kuku terbaik dengan standar profesional untuk hasil yang aman, higienis, dan memuaskan.
                </p>
                <div className="space-y-2.5">
                  <button className="w-full bg-[#6b3221] text-white px-6 py-3 rounded-2xl flex items-center justify-center gap-2 font-medium text-sm">
                    <Calendar size={18} />
                    {t.btn.bookApp}
                  </button>
                  <button className="w-full bg-[#f7efe6]/70 border border-[#b48a73] text-[#4b2f25] px-6 py-3 rounded-2xl flex items-center justify-center gap-2 font-medium text-sm">
                    <MessageCircle size={18} />
                    {t.btn.chat}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            id="about"
            className="hidden sm:grid bg-[#f8f2ea] rounded-2xl sm:rounded-[1.2rem] border border-[#e5d8c8] p-4 sm:p-5 lg:p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-0 -mt-3 sm:-mt-6 lg:-mt-8 mx-3 sm:mx-8 lg:mx-10 relative z-20"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Crown, title: 'Professional Quality', desc: 'Produk berkualitas tinggi & terpercaya' },
              { icon: ShieldCheck, title: 'Safe & Hygienic', desc: 'Aman digunakan dengan standar kebersihan tinggi' },
              { icon: Lightbulb, title: 'Continuous Innovation', desc: 'Selalu berinovasi mengikuti tren & kebutuhan' },
              { icon: Users, title: 'Expert Support', desc: 'Tim profesional siap membantu Anda' },
              { icon: Star, title: 'Trusted by Professionals', desc: 'Dipercaya oleh ribuan salon & nail artist' }
            ].map((feature, idx) => (
              <div key={idx} className={`flex items-start gap-3 sm:flex-col sm:items-start lg:items-center text-left lg:text-center px-2 sm:px-3 lg:px-5 py-1 sm:py-0 ${idx > 0 ? 'lg:border-l lg:border-[#e5d5c4]' : ''}`}>
                <feature.icon size={18} className="text-[#b57b56] mb-2" strokeWidth={1.8} />
                <div>
                  <h3 className="font-semibold text-[#36211a] mb-1 text-xs sm:text-sm leading-tight">{feature.title}</h3>
                  <p className="text-[11px] sm:text-xs text-[#5c453b]/90 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="sm:hidden bg-[#f8f2ea] border border-[#e5d8c8] rounded-2xl p-4 mx-3 mt-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: Crown, title: 'Professional\nQuality', desc: 'Produk berkualitas tinggi & terpercaya' },
                { icon: ShieldCheck, title: 'Safe &\nHygienic', desc: 'Aman digunakan dengan standar kebersihan tinggi' },
                { icon: Lightbulb, title: 'Continuous\nInnovation', desc: 'Selalu berinovasi mengikuti tren & kebutuhan' },
                { icon: Users, title: 'Expert\nSupport', desc: 'Tim profesional siap membantu Anda' }
              ].map((feature, idx) => (
                <div key={idx} className="rounded-xl bg-white/55 border border-[#e8dac8] px-2.5 py-2.5 text-center min-h-[106px] flex flex-col items-center justify-start">
                  <feature.icon size={16} className="text-[#b57b56] mb-1.5" strokeWidth={1.8} />
                  <h3 className="text-[11px] font-semibold text-[#36211a] leading-[1.15] whitespace-pre-line mb-1">{feature.title}</h3>
                  <p className="text-[9px] text-[#5c453b]/90 leading-[1.3] line-clamp-3">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Service Section */}
      <section id="services" className="pt-4 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-18 bg-brand-light px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-dark mb-3 sm:mb-4">{t.services.title}</h2>
              <p className="text-brand-dark/70 max-w-xl text-sm sm:text-base leading-relaxed">{t.services.desc}</p>
            </div>
            <button className="hidden sm:block border border-brand-dark text-brand-dark px-6 py-2.5 rounded-full hover:bg-brand-dark hover:text-white transition-colors text-sm font-medium whitespace-nowrap">
              {t.btn.viewAllService}
            </button>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { img: "https://placehold.co/800x600/F6ECE0/6B4B3F?text=Gel+Manicure", id: 0 },
              { img: "https://placehold.co/800x600/F3E7DA/6B4B3F?text=Builder+Gel", id: 1 },
              { img: "https://placehold.co/800x600/F9F0E6/6B4B3F?text=Nail+Art+Custom", id: 2 },
              { img: "https://placehold.co/800x600/F4EADF/6B4B3F?text=Spa+%26+Care", id: 3 },
              { img: "https://placehold.co/800x600/F7EEE5/6B4B3F?text=Consultation", id: 4 }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white rounded-2xl sm:rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-black/5">
                <div className="aspect-[4/3] overflow-hidden bg-brand-light/50 p-3 sm:p-4 pb-0">
                  <img src={item.img} alt={t.services.items[item.id].title} loading="lazy" className="w-full h-full object-cover object-center rounded-t-xl sm:rounded-t-2xl group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-5 text-center flex flex-col flex-grow justify-center">
                  <h3 className="font-semibold text-brand-dark mb-1.5 sm:mb-2 text-base">{t.services.items[item.id].title}</h3>
                  <p className="text-xs sm:text-sm text-brand-dark/70 leading-relaxed">{t.services.items[item.id].desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <button className="sm:hidden w-full mt-8 border border-brand-dark text-brand-dark px-6 py-3.5 rounded-xl hover:bg-brand-dark hover:text-white transition-colors font-medium">
            {t.btn.viewAllService}
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-10 sm:py-14 lg:py-16 px-4 lg:px-8 bg-[radial-gradient(circle_at_top,#5a321f_0%,#2a170f_38%,#1b0f0b_100%)] text-[#f5ebde] scroll-mt-24">
        <div className="container mx-auto">
          <motion.h2
            className="hidden sm:block text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {t.why.title}
          </motion.h2>

          <motion.div
            className="sm:hidden max-w-sm mx-auto rounded-xl border border-[#8e633f]/40 bg-[linear-gradient(145deg,#3c2418_0%,#25160f_55%,#1b100b_100%)] px-4 py-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[1.85rem] font-serif leading-tight text-[#f6eadb] mb-3">{t.why.title}</h2>
            {[
              { icon: Award, ...t.why.items[0] },
              { icon: ShieldCheck, ...t.why.items[1] },
              { icon: Users, ...t.why.items[2] },
              { icon: Star, ...t.why.items[3] },
              { icon: Gift, ...why5th }
            ].map((item, idx) => (
              <div key={idx} className={`flex items-start gap-3 py-3 ${idx < 4 ? 'border-b border-[#8e633f]/35' : ''}`}>
                <item.icon size={18} className="text-[#d3a06a] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <div>
                  <h3 className="text-[14px] font-semibold text-[#f3e5d4] leading-tight mb-1">{item.title}</h3>
                  <p className="text-[11px] leading-relaxed text-[#d5bda5]">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-0 mb-6 sm:mb-8 max-w-6xl mx-auto"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {[
              { icon: Award, title: 'Berkualitas Tinggi', desc: 'Bahan pilihan dengan standar internasional' },
              { icon: ShieldCheck, title: 'Aman & Terpercaya', desc: 'Teruji & aman untuk kuku dan kulit' },
              { icon: Users, title: 'Edukasi & Support', desc: 'Dukungan, training & tips untuk pertumbuhan bisnis Anda' },
              { icon: Star, title: 'Inovatif & Trendy', desc: 'Selalu update dengan tren terbaru' },
              { icon: Gift, title: 'Harga Kompetitif', desc: 'Kualitas terbaik dengan harga yang bersaing' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className={`flex items-start sm:items-center lg:items-start justify-center gap-3 p-3 sm:p-4 lg:px-5 lg:py-2 text-center sm:text-left lg:text-left ${idx > 0 ? 'lg:border-l lg:border-[#8f6d4f]/45' : ''}`}>
                <item.icon size={20} className="text-[#d3a06a] mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <div className="max-w-[220px]">
                  <h3 className="text-sm sm:text-base font-semibold text-[#f4e7d6] mb-1 leading-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#d8c2aa] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 max-w-6xl mx-auto">
            <motion.div id="awards" variants={fadeIn} className="bg-[#f8f2ea] rounded-2xl p-4 sm:p-6 text-[#2f2119] border border-[#eadbc9] scroll-mt-24">
              <div className="flex items-center justify-center gap-2 mb-2"><Award size={22} className="text-[#8b5b39]" /><h3 className="text-2xl font-serif text-center">{t.why.awards.title}</h3></div>
              <p className="text-sm text-[#5f4c40] mb-4 text-center">Penghargaan yang kami raih adalah bukti komitmen terhadap kualitas terbaik.</p>
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/10] bg-[#ead7c4]">
                {[
                  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=900',
                  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=900',
                  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=900'
                ].map((img, idx) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Awards ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${activeAwardSlide === idx ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                  />
                ))}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {[0, 1, 2].map((idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveAwardSlide(idx)}
                      className={`h-1.5 rounded-full transition-all ${activeAwardSlide === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/70'}`}
                      aria-label={`Go to awards slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <button className="w-full border border-[#c39b79] text-[#6d4834] py-2.5 rounded-full text-sm font-medium hover:bg-[#f0e4d8] transition-colors">View All Awards</button>
            </motion.div>

            <motion.div id="news" variants={fadeIn} className="bg-[#f8f2ea] rounded-2xl p-4 sm:p-6 text-[#2f2119] border border-[#eadbc9] scroll-mt-24">
              <div className="flex items-center justify-center gap-2 mb-2"><Newspaper size={22} className="text-[#8b5b39]" /><h3 className="text-2xl font-serif text-center">{t.why.news.title}</h3></div>
              <p className="text-sm text-[#5f4c40] mb-4 text-center">Discover the latest updates, achievements, and insights from Nailsqueen.</p>
              <div className="flex flex-col gap-2.5 mb-4">
                {[
                  { title: lang === 'ID' ? 'Nailsqueen Hadir di Beauty Expo Indonesia 2024' : 'Nailsqueen Appeared at Beauty Expo Indonesia 2024', date: lang === 'ID' ? '10 Mei 2024' : 'May 10, 2024', img: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=300' },
                  { title: lang === 'ID' ? 'Tips Perawatan Kuku Sehat & Kuat untuk Klien' : 'Tips for Healthy & Strong Nails for Clients', date: lang === 'ID' ? '25 April 2024' : 'April 25, 2024', img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=300' },
                  { title: lang === 'ID' ? 'Nailsqueen Training Class Batch #15 Sukses Digelar!' : 'Nailsqueen Training Class Batch #15 Successfully Held!', date: lang === 'ID' ? '15 April 2024' : 'April 15, 2024', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=300' }
                ].map((news, idx) => (
                  <div key={idx} className="flex items-center gap-3 min-h-[74px]">
                    <img src={news.img} alt={news.title} className="w-20 sm:w-24 h-14 sm:h-16 rounded-lg object-cover object-center flex-shrink-0" loading="lazy" />
                    <div><p className="text-sm font-semibold leading-snug text-[#3b2921] line-clamp-2">{news.title}</p><p className="text-xs text-[#7a6355] mt-0.5">{news.date}</p></div>
                  </div>
                ))}
              </div>
              <button className="w-full border border-[#c39b79] text-[#6d4834] py-2.5 rounded-full text-sm font-medium hover:bg-[#f0e4d8] transition-colors">View All News</button>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-[#f8f2ea] rounded-2xl p-4 sm:p-6 text-[#2f2119] border border-[#eadbc9]">
              <div className="flex items-center justify-center gap-2 mb-2"><Gift size={22} className="text-[#8b5b39]" /><h3 className="text-2xl font-serif text-center">{t.why.events.title}</h3></div>
              <p className="text-sm text-[#5f4c40] mb-4 text-center">Jangan lewatkan event seru dan promo spesial dari Nailsqueen!</p>
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-[16/10] bg-gradient-to-r from-[#4a281c] to-[#2e1a13] p-5 text-[#f5dfbf]">
                <p className="tracking-[0.2em] text-[11px] uppercase text-[#d9b790]">{t.why.events.promoLabel}</p>
                <p className="mt-2 text-lg">{lang === 'ID' ? 'Diskon Hingga' : 'Disc. Up To'}</p>
                <p className="text-6xl font-serif leading-none">20%</p>
                <p className="text-sm text-[#e8cfb2]">{lang === 'ID' ? 'Untuk Layanan Terpilih' : 'For Selected Items'}</p>
                <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=500" alt="Promo" className="absolute bottom-0 right-0 w-28 sm:w-36 lg:w-40 max-w-[46%] h-auto object-contain opacity-80" loading="lazy" />
              </div>
              <button className="w-full border border-[#c39b79] text-[#6d4834] py-2.5 rounded-full text-sm font-medium hover:bg-[#f0e4d8] transition-colors">View All Events</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 sm:py-16 bg-brand-light px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.div 
            className="bg-[#9b7b65] rounded-[2rem] p-6 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:p-12 text-white relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          >
            {/* Background decorative element */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center text-center sm:text-left gap-4 sm:gap-6 relative z-10 w-full lg:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-white/30 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/5 backdrop-blur-sm">
                <Calendar size={28} className="sm:w-[32px] sm:h-[32px]" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-2 leading-tight">{t.cta.title}</h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-lg">{t.cta.desc}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 sm:gap-4 relative z-10 mt-2 sm:mt-4 lg:mt-0">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto bg-white text-brand-dark px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl lg:rounded-full flex items-center justify-center gap-2 font-medium hover:bg-opacity-90 transition-colors"
              >
                <Calendar size={18} />
                {t.btn.bookApp}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {isBookingOpen && (
        <div className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#fffaf4] rounded-2xl border border-[#ead8c4] shadow-2xl p-5 sm:p-6 relative">
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 text-[#6b4b3a] hover:text-[#4a2f23]"
              aria-label="Close booking form"
            >
              <X size={20} />
            </button>
            <h3 className="text-2xl font-serif text-[#2f2119] mb-1">{bookingText.title}</h3>
            <p className="text-sm text-[#6b564a] mb-5">{bookingText.desc}</p>

            <form onSubmit={submitBookingToWhatsApp} className="space-y-3.5">
              <input name="name" value={bookingForm.name} onChange={handleBookingInput} required placeholder={bookingText.name} className="w-full rounded-xl border border-[#dbc6b2] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b98d6f]/40" />
              <input name="phone" value={bookingForm.phone} onChange={handleBookingInput} required placeholder={bookingText.phone} className="w-full rounded-xl border border-[#dbc6b2] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b98d6f]/40" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <select name="service" value={bookingForm.service} onChange={handleBookingInput} required className="w-full rounded-xl border border-[#dbc6b2] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b98d6f]/40">
                  <option value="">{bookingText.service}</option>
                  <option value="Gel Manicure">Gel Manicure</option>
                  <option value="Builder Gel">Builder Gel</option>
                  <option value="Nail Art Custom">Nail Art Custom</option>
                  <option value="Spa & Care">Spa & Care</option>
                  <option value="Consultation">Consultation</option>
                </select>
                <input name="date" type="date" value={bookingForm.date} onChange={handleBookingInput} required className="w-full rounded-xl border border-[#dbc6b2] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b98d6f]/40" />
              </div>
              <input name="time" type="time" value={bookingForm.time} onChange={handleBookingInput} required className="w-full rounded-xl border border-[#dbc6b2] bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#b98d6f]/40" />
              <textarea name="notes" value={bookingForm.notes} onChange={handleBookingInput} placeholder={bookingText.notes} rows={3} className="w-full rounded-xl border border-[#dbc6b2] bg-white px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#b98d6f]/40" />

              <button type="submit" className="w-full bg-[#6b3221] text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#7d3d2a] transition-colors font-medium text-sm">
                <MessageCircle size={18} />
                {bookingText.send}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-brand-dark text-white mt-auto pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center gap-2 mb-5 sm:mb-6 bg-brand-dark rounded-md px-1 py-0.5 w-fit mx-auto sm:mx-0">
              <img
                src="/logo-nq.jpeg"
                alt="Nailsqueen Logo"
                className="h-10 sm:h-12 lg:h-14 w-auto max-w-[190px] object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              {t.footer.desc}
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <span className="text-[10px] font-medium">Tiktok</span>
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" aria-label="Maps" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <MapPin size={18} />
              </a>
            </div>
          </div>

          <div className="hidden sm:block text-center sm:text-left">
            <h4 className="font-semibold mb-4 sm:mb-6">{t.footer.quick}</h4>
            <div className="flex flex-col gap-2.5 sm:gap-3 text-white/70 text-sm items-center sm:items-start">
              <a href="#home" className="hover:text-white transition-colors w-fit">{t.nav.home}</a>
              <a href="#about" className="hover:text-white transition-colors w-fit">{t.nav.about}</a>
              <a href="#services" className="hover:text-white transition-colors w-fit">{t.nav.service}</a>
              <a href="#why" className="hover:text-white transition-colors w-fit">{t.nav.why}</a>
              <a href="#awards" className="hover:text-white transition-colors w-fit">{t.nav.awards}</a>
              <a href="#news" className="hover:text-white transition-colors w-fit">{t.nav.news}</a>
              <a href="#contact" className="hover:text-white transition-colors w-fit">{t.nav.contact}</a>
            </div>
          </div>

          <div className="hidden sm:block text-center sm:text-left">
            <h4 className="font-semibold mb-4 sm:mb-6">{t.footer.service}</h4>
            <div className="flex flex-col gap-2.5 sm:gap-3 text-white/70 text-sm items-center sm:items-start">
              <a href="#" className="hover:text-white transition-colors w-fit">FAQ</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.shipping}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.return}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.terms}</a>
            </div>
          </div>

          <div className="hidden sm:block text-center sm:text-left">
            <h4 className="font-semibold mb-4 sm:mb-6">{t.footer.contact}</h4>
            <div className="flex flex-col gap-3.5 sm:gap-4 text-white/70 text-sm mb-0">
              <div className="flex gap-3 items-start justify-center sm:justify-start">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex gap-3 items-start justify-center sm:justify-start">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>info@nailsqueen.com</span>
              </div>
              <div className="flex gap-3 items-start justify-center sm:justify-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Jl. Kecantikan No. 10<br />Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        <div className="container mx-auto pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-white/50">
          © {new Date().getFullYear()} Nailsqueen. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}
