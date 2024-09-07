"use client";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "../components/NavBar";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import InfoCards from "../components/InfoCards";
import SambutanPageSection from "../components/sambutanPageSection";
import StrukturOrganisasi from "../components/StrukturOrganisasi";
import PopulationProps from "../components/AdmPenduduk";
import Image from "next/image";

export default function TypewriterEffectDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

    if (scrollTop > 200) { // Tampilkan tombol jika scroll lebih dari 300px
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }

    setScrollProgress(scrollPercent);
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
      <PopulationProps total={1234} male={600} female={634} keluarga={650} Sementara={25} Mutasi={2} />
      {showScrollToTop && (
        <div className="fixed bottom-4 right-4 w-16 h-16 flex items-center justify-center">
          <div
            className="w-full h-full rounded-full border-4 border-white-500 flex items-center justify-center"
            style={{
              background: `conic-gradient(#4F46E5 ${scrollProgress}%, #0000 ${scrollProgress}% 100%)`,
            }}
          >
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span className="text-xl">✈️</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
