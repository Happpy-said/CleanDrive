"use client";

import { useState } from "react";

const translations = {
  fr: {
    nav_services: "Nos services",
    nav_reservation: "Réserver",
    hero_title: "Lavage auto à domicile",
    hero_desc: "Rapide, Pratique, Professionnel – Où que vous soyez !",
    services_title: "Nos Services",
    ext_wash: "Lavage extérieur",
    int_wash: "Lavage intérieur",
    full_wash: "Lavage complet",
    carpet: "Moquette / tapis",
    on_demand: "sur demande",
    reservation_title: "Réserver maintenant",
    name_label: "Nom complet :",
    date_label: "Date souhaitée :",
    service_label: "Type de service :",
    time_label: "Créneau horaire :",
    whatsapp_btn: "Réserver via WhatsApp",
    contact_title: "Nous contacter",
  },
  en: {
    nav_services: "Services",
    nav_reservation: "Book now",
    hero_title: "Mobile Car Wash",
    hero_desc: "Fast, convenient, professional – wherever you are.",
    services_title: "Our Services",
    ext_wash: "Exterior wash",
    int_wash: "Interior wash",
    full_wash: "Full wash",
    carpet: "Carpet / mats",
    on_demand: "on request",
    reservation_title: "Book now",
    name_label: "Full Name:",
    date_label: "Preferred date:",
    service_label: "Service type:",
    time_label: "Time slot:",
    whatsapp_btn: "Book via WhatsApp",
    contact_title: "Contact us",
  },
  ar: {
    nav_services: "الخدمات",
    nav_reservation: "الحجز",
    hero_title: "غسيل سيارات متنقل",
    hero_desc: "سريع، مريح، احترافي – أينما كنت.",
    services_title: "خدماتنا",
    ext_wash: "غسيل خارجي",
    int_wash: "غسيل داخلي",
    full_wash: "غسيل كامل",
    carpet: "السجاد / الحصائر",
    on_demand: "حسب الطلب",
    reservation_title: "احجز الآن",
    name_label: "الاسم الكامل:",
    date_label: "التاريخ المطلوب:",
    service_label: "نوع الخدمة:",
    time_label: "الفترة الزمنية:",
    whatsapp_btn: "احجز عبر واتساب",
    contact_title: "اتصل بنا",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en" | "ar">("fr");
  const t = translations[lang];

  const sendToWhatsapp = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const date = (document.getElementById("date") as HTMLInputElement).value;
    const service = (document.getElementById("service") as HTMLSelectElement).value;
    const slot = (document.getElementById("slot") as HTMLSelectElement).value;

    if (!name || !date || !service || !slot) {
      alert(lang === "fr" ? "Veuillez remplir tous les champs." : lang === "en" ? "Please fill all fields." : "يرجى ملء جميع الحقول.");
      return;
    }

    const msg = 
      (lang === "ar" ? "مرحبًا، أود حجز غسيل مع CleanDrive.\n" : "Bonjour, je souhaite réserver un lavage CleanDrive.\n") +
      `${t.name_label} ${name}\n${t.date_label} ${date}\n${t.service_label} ${service}\n${t.time_label} ${slot}`;

    const url = "https://wa.me/21652552112?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-blue-900/90 backdrop-blur-md z-50 flex justify-between items-center px-6 py-4 shadow-md">
        <div className="text-2xl font-bold text-blue-400 cursor-default select-none">CleanDrive</div>
        <div className="flex items-center space-x-6">
          <a href="#services" className="text-slate-300 hover:text-blue-400 transition">{t.nav_services}</a>
          <a href="#reservation" className="text-slate-300 hover:text-blue-400 transition">{t.nav_reservation}</a>
          <div className="flex space-x-2">
            <button onClick={() => setLang("fr")} className={`text-xl ${lang === "fr" ? "text-blue-400" : "text-slate-300"}`}>🇫🇷</button>
            <button onClick={() => setLang("en")} className={`text-xl ${lang === "en" ? "text-blue-400" : "text-slate-300"}`}>🇬🇧</button>
            <button onClick={() => setLang("ar")} className={`text-xl ${lang === "ar" ? "text-blue-400" : "text-slate-300"}`}>🇹🇳</button>
          </div>
        </div>
      </nav>

      <header
        id="hero"
        className="relative flex items-center justify-center text-center h-[80vh] bg-[url('https://i.postimg.cc/rsMPfhL1/78134252-lavage-de-voitures-blue-background-concept-mosa-que-th-me-du-v-hicule-de-nettoyage.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60"
      >
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fadeIn">
            {t.hero_title}
          </h1>
          <p className="text-blue-200 mt-4 text-xl md:text-2xl drop-shadow-md animate-fadeIn delay-200">
            {t.hero_desc}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        <section id="services" className="space-y-6">
          <h2 className="text-blue-400 text-3xl font-semibold border-b-4 border-blue-600 pb-2 inline-block">
            {t.services_title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-default">
              <p className="text-xl mb-1">🚗 {t.ext_wash}</p>
              <p className="font-bold">À partir de 20 DT</p>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-default">
              <p className="text-xl mb-1">🧼 {t.int_wash}</p>
              <p className="font-bold">À partir de 20 DT</p>
            </div>
            <div className="bg-blue-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-default">
              <p className="text-xl mb-1">💎 {t.full_wash}</p>
              <p className="font-bold">À partir de 30 DT</p>
            </div>
          </div>
          <p className="mt-4 italic text-blue-300">🧽 {t.carpet} - <span>{t.on_demand}</span></p>
        </section>

        <section id="reservation" className="space-y-6">
          <h2 className="text-blue-400 text-3xl font-semibold border-b-4 border-blue-600 pb-2 inline-block">
            {t.reservation_title}
          </h2>
          <form className="space-y-5 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); sendToWhatsapp(); }}>
            <div>
              <label htmlFor="name" className="block mb-1 text-blue-300 font-medium">{t.name_label}</label>
              <input type="text" id="name" className="w-full rounded-md bg-blue-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="date" className="block mb-1 text-blue-300 font-medium">{t.date_label}</label>
              <input type="date" id="date" className="w-full rounded-md bg-blue-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="service" className="block mb-1 text-blue-300 font-medium">{t.service_label}</label>
              <select id="service" className="w-full rounded-md bg-blue-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option>Lavage extérieur</option>
                <option>Nettoyage intérieur</option>
                <option>Lavage complet</option>
                <option>Nettoyage à la vapeur</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="slot" className="block mb-1 text-blue-300 font-medium">{t.time_label}</label>
              <select id="slot" className="w-full rounded-md bg-blue-900 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                <option>08h - 9h</option>
                <option>09h - 10h</option>
                <option>10h - 11h</option>
                <option>11h - 12h</option>
                <option>12h - 13h</option>
                <option>13h - 14h</option>
                <option>14h - 15h</option>
                <option>15h - 16h</option>
                <option>16h - 17h</option>
                <option>17h - 18h</option>
                <option>18h - 19h</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg px-6 py-3 w-full hover:from-blue-700 hover:to-blue-500 transition"
            >
              {t.whatsapp_btn}
            </button>
          </form>
        </section>

        <section id="contact" className="space-y-6 text-center max-w-xl mx-auto">
          <h2 className="text-blue-400 text-3xl font-semibold border-b-4 border-blue-600 pb-2 inline-block">
            {t.contact_title}
          </h2>
          <p className="text-blue-200 text-lg"><span className="mr-2">📞</span>+216 52 552 112</p>
          <p className="text-blue-200 text-lg"><span className="mr-2">📧</span>cleandrive.tn@gmail.com</p>
          <p className="text-blue-200 text-lg"><span className="mr-2">📍</span>Tunis et alentours</p>
        </section>
      </main>

      <a
        href="tel:+21652552112"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-5 py-3 shadow-lg transition z-50"
      >
        📞 Appeler maintenant
      </a>

      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </>
  );
}
