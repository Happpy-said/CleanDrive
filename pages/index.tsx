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
    const date
