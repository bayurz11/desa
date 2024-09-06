"use client";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Navbar from "../components/NavBar";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import InfoCards from "../components/InfoCards";
import SambutanPageSection from "../components/sambutanPageSection";
import StrukturOrganisasi from "../components/StrukturOrganisasi";
import Image from "next/image";

export default function TypewriterEffectDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Tampilkan tombol jika scroll lebih dari 300px
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const words = [
    { text: "Selamat" },
    { text: "Datang" },
    { text: "di" },
    { text: "Website" },
    { text: "Desa" },
    {
      text: "Mentuda",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SpeedInsights/>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col items-center justify-center min-h-[50rem] mt-6">
        <Image
          src="/assets/img/logo/images.jpeg"
          alt="Descriptive Alt Text"
          className="mb-8 h-25 w-25"
          width={150}
          height={150}
        />
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <p className="text-center">
            Sumber informasi terbaru tentang pemerintahan di Desa Mentuda
          </p>
        </div>
        <InfoCards />
      </div>
      <SambutanPageSection />
      <StrukturOrganisasi />
  <div>tes</div>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          ↑
        </button>
      )}
    </div>
  );
}
