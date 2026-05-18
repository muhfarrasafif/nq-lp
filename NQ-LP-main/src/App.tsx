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
  Youtube, 
  Facebook, 
  MapPin, 
  Phone, 
  Mail,
  Send,
  Menu,
  X,
  Globe
} from 'lucide-react';
import { useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('ID');

  const t = TRANSLATIONS[lang];

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

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-brand-dark text-[#C49A6C] text-xs sm:text-sm py-2 px-4 text-center flex items-center justify-center gap-2 flex-wrap">
        <Star size={14} className="hidden sm:block" />
        <span>{t.topBanner}</span>
        <Star size={14} className="hidden sm:block" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-brand-light/95 backdrop-blur-md border-b border-brand-dark/10">
        <div className="container mx-auto px-4 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Note: Update src below with your uploaded logo filename (e.g. upload to public/logo.png) */}
            <img src="/logo.png" alt="Nailsqueen Logo" className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-brand-dark">
            <a href="#" className="hover:text-brand-accent transition-colors border-b-2 border-brand-accent">{t.nav.home}</a>
            <a href="#" className="hover:text-brand-accent transition-colors">{t.nav.about}</a>
            <div className="relative group cursor-pointer flex items-center gap-1">
              <span className="hover:text-brand-accent transition-colors">{t.nav.service}</span>
              <ChevronDown size={14} />
            </div>
            <a href="#" className="hover:text-brand-accent transition-colors">{t.nav.why}</a>
            <a href="#" className="hover:text-brand-accent transition-colors">{t.nav.awards}</a>
            <a href="#" className="hover:text-brand-accent transition-colors">{t.nav.news}</a>
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
            <a href="#" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.home}</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.about}</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.service}</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.why}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-medium text-brand-dark block p-2 hover:bg-brand-dark/5 rounded-lg">{t.nav.contact}</a>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-brand-dark/10 mt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-brand-dark flex items-center gap-2"><Globe size={16}/> Language</span>
                <LangToggle className="w-32" />
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-10 pb-24 sm:pt-16 sm:pb-32 lg:pt-24 lg:pb-40 px-4 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          <motion.div 
            className="lg:w-1/2 z-10 text-center lg:text-left"
            initial="hidden" animate="visible" variants={fadeIn}
          >
            <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-brand-muted mb-4">
              {t.hero.subtitle}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-brand-dark leading-[1.15] mb-6 whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-brand-dark/80 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-brand-dark text-white px-8 py-3.5 sm:px-6 sm:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all font-medium">
                <Calendar size={18} />
                {t.btn.bookApp}
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative w-full px-4 sm:px-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-t-full overflow-hidden shadow-2xl aspect-[4/3] max-w-lg mx-auto border-[6px] sm:border-8 border-white">
              {/* Note: Update src below with your uploaded image filename if needed (e.g. src="/my-hero.jpg") */}
              <img 
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059e984?auto=format&fit=crop&q=70&w=1000" 
                alt="Nail Salon Interior" 
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights Bar */}
      <div className="container mx-auto px-4 lg:px-8 relative z-20 -mt-16 sm:-mt-24 lg:-mt-32 mb-12 sm:mb-16">
        <motion.div 
          className="bg-white rounded-[2rem] shadow-xl p-4 sm:p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Crown, id: 0 },
            { icon: ShieldCheck, id: 1 },
            { icon: Lightbulb, id: 2 },
            { icon: Users, id: 3 }
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <div className="text-brand-accent mb-2 sm:mb-3">
                <feature.icon size={28} className="sm:w-[32px] sm:h-[32px]" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-brand-dark mb-1 text-sm lg:text-base leading-tight">{t.features[feature.id].title}</h3>
              <p className="text-[11px] sm:text-xs text-brand-dark/70 leading-relaxed">{t.features[feature.id].desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Our Service Section */}
      <section className="py-12 sm:py-20 bg-brand-light px-4 lg:px-8">
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
              { img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=70&w=600", id: 0 },
              { img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=70&w=600", id: 1 },
              { img: "https://images.unsplash.com/photo-1595868925439-55694a50e50c?auto=format&fit=crop&q=70&w=600", id: 2 },
              { img: "https://images.unsplash.com/photo-1516975080661-46bfa2c281c7?auto=format&fit=crop&q=70&w=600", id: 3 },
              { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=70&w=600", id: 4 }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-white rounded-2xl sm:rounded-[1.25rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-black/5">
                <div className="aspect-[4/3] overflow-hidden bg-brand-light/50 p-3 sm:p-4 pb-0">
                  <img src={item.img} alt={t.services.items[item.id].title} loading="lazy" className="w-full h-full object-cover rounded-t-xl sm:rounded-t-2xl group-hover:scale-105 transition-transform duration-700" />
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
      <section className="py-20 sm:py-24 bg-brand-dark text-brand-light px-4 lg:px-8">
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl font-serif text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            {t.why.title}
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {[
              { icon: Award, id: 0 },
              { icon: ShieldCheck, id: 1 },
              { icon: Users, id: 2 },
              { icon: Star, id: 3 }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={fadeIn} className="flex gap-4 p-4 sm:p-0 rounded-2xl bg-white/5 sm:bg-transparent items-start border border-white/5 sm:border-none">
                <div className="text-brand-accent flex-shrink-0 mt-1">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-white">{t.why.items[feature.id].title}</h3>
                  <p className="text-sm text-brand-light/70 leading-relaxed">{t.why.items[feature.id].desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Awards */}
            <motion.div variants={fadeIn} className="bg-brand-light rounded-[2rem] p-6 lg:p-8 text-brand-dark flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Award className="text-brand-dark flex-shrink-0" size={24} />
                <h3 className="text-xl sm:text-2xl font-serif leading-tight">{t.why.awards.title}</h3>
              </div>
              <p className="text-sm text-brand-dark/70 mb-6 leading-relaxed">{t.why.awards.desc}</p>
              <div className="aspect-video bg-white rounded-2xl overflow-hidden mb-6 flex-grow py-4 px-6 sm:px-8 shadow-inner flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1541746972996-4e0ab0f8bdce?auto=format&fit=crop&q=70&w=800" alt="Awards" loading="lazy" className="w-full h-full object-cover rounded-xl" />
              </div>
              <button className="w-full border border-brand-dark py-3 rounded-xl hover:bg-brand-dark hover:text-white transition-colors font-medium text-sm">
                {t.btn.viewAllAwards}
              </button>
            </motion.div>

            {/* News */}
            <motion.div variants={fadeIn} className="bg-brand-light rounded-[2rem] p-6 lg:p-8 text-brand-dark flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Newspaper className="text-brand-dark flex-shrink-0" size={24} />
                <h3 className="text-xl sm:text-2xl font-serif leading-tight">{t.why.news.title}</h3>
              </div>
              <p className="text-sm text-brand-dark/70 mb-6 leading-relaxed">{t.why.news.desc}</p>
              
              <div className="flex flex-col gap-3 sm:gap-4 mb-6 flex-grow">
                {[
                  { title: "Nailsqueen Hadir di Beauty Expo 2024", date: "10 Mei 2024", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=70&w=200" },
                  { title: "Tips Perawatan Kuku Sehat & Kuat", date: "25 April 2024", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=70&w=200" },
                  { title: "Training Class Batch #15 Sukses", date: "15 April 2024", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=70&w=200" }
                ].map((news, idx) => (
                  <div key={idx} className="flex gap-4 items-center p-2 rounded-xl hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-black/5">
                    <img src={news.img} alt={news.title} loading="lazy" className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-xs sm:text-sm line-clamp-2 leading-snug">{news.title}</h4>
                      <p className="text-[11px] sm:text-xs text-brand-dark/60 mt-1">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-auto border border-brand-dark py-3 rounded-xl hover:bg-brand-dark hover:text-white transition-colors font-medium text-sm">
                {t.btn.viewAllNews}
              </button>
            </motion.div>

            {/* Events */}
            <motion.div variants={fadeIn} className="bg-brand-light rounded-[2rem] p-6 lg:p-8 text-brand-dark flex flex-col h-full">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Gift className="text-brand-dark flex-shrink-0" size={24} />
                <h3 className="text-xl sm:text-2xl font-serif leading-tight">{t.why.events.title}</h3>
              </div>
              <p className="text-sm text-brand-dark/70 mb-6 leading-relaxed">{t.why.events.desc}</p>
              
              <div className="bg-[#4e3a35] text-brand-light rounded-2xl p-6 sm:p-8 mb-6 flex-grow flex flex-col items-start relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-xs sm:text-sm tracking-widest uppercase mb-1.5 sm:mb-2 opacity-80">{t.why.events.promoLabel}</p>
                  <p className="text-lg sm:text-xl font-medium">Disc. Up To</p>
                  <p className="text-6xl sm:text-7xl font-serif mb-1 sm:mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left">20%</p>
                  <p className="text-xs sm:text-sm opacity-80">{t.why.events.promoDesc}</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=70&w=400" 
                  alt="Promo"
                  loading="lazy"
                  className="absolute bottom-0 -right-4 w-44 sm:w-56 h-auto object-cover opacity-40 mix-blend-overlay group-hover:opacity-50 transition-opacity"
                />
              </div>

              <button className="w-full border border-brand-dark py-3 rounded-xl hover:bg-brand-dark hover:text-white transition-colors mt-auto font-medium text-sm">
                {t.btn.viewAllEvents}
              </button>
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
              <button className="w-full sm:w-auto bg-white text-brand-dark px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl lg:rounded-full flex items-center justify-center gap-2 font-medium hover:bg-opacity-90 transition-colors">
                <Calendar size={18} />
                {t.btn.bookApp}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-dark text-white mt-auto pt-16 pb-8 px-4 lg:px-8 border-t border-white/10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* Note: Update src below with your uploaded logo. brightness(0) invert(1) makes the dark logo white in this dark background. */}
              <img src="/logo.png" alt="Nailsqueen Logo" className="h-10 sm:h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-white/70 mb-8 text-sm leading-relaxed max-w-xs">
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.597 18.064c-3.111 0-5.733-1.602-5.733-5.32 0-3.327 2.45-5.32 5.512-5.32 3.11 0 5.688 1.823 5.688 5.41 0 3.766-2.584 5.23-5.467 5.23zm-.133-12.391c-3.956 0-7.467 2.44-7.467 7.058 0 4.53 3.378 7.058 7.422 7.058 3.911 0 7.378-2.396 7.378-7.014 0-4.662-3.333-7.102-7.333-7.102zm-5.778 4.258a1.29 1.29 0 00-1.289 1.289c0 .712.578 1.289 1.289 1.289a1.29 1.29 0 000-2.578z"/>
                   <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 sm:mb-6">{t.footer.quick}</h4>
            <div className="flex flex-col gap-3 text-white/70 text-sm">
              <a href="#" className="hover:text-white transition-colors w-fit">{t.nav.home}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.nav.about}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.nav.service}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.nav.why}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.nav.awards}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.nav.news}</a>
              <a href="#contact" className="hover:text-white transition-colors w-fit">{t.nav.contact}</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 sm:mb-6">{t.footer.service}</h4>
            <div className="flex flex-col gap-3 text-white/70 text-sm">
              <a href="#" className="hover:text-white transition-colors w-fit">FAQ</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.shipping}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.return}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors w-fit">{t.footer.terms}</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 sm:mb-6">{t.footer.contact}</h4>
            <div className="flex flex-col gap-4 text-white/70 text-sm mb-6">
              <div className="flex gap-3 items-start">
                <Phone size={18} className="flex-shrink-0 mt-0.5" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="flex-shrink-0 mt-0.5" />
                <span>info@nailsqueen.com</span>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Jl. Kecantikan No. 10<br />Jakarta, Indonesia</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-white/5 border border-white/20 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-brand-dark transition-all text-sm font-medium">
              <MessageCircle size={16} />
              {t.footer.chatWa}
            </button>
          </div>

        </div>

        <div className="container mx-auto pt-8 border-t border-white/10 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Nailsqueen. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}
