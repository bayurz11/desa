"use client";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "../components/NavBar";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import InfoCards from "../components/InfoCards";
import SambutanPageSection from "../components/sambutanPageSection";
import StrukturOrganisasi from "../components/StrukturOrganisasi";
import PopulationProps from "../components/AdmPenduduk";
import Berita from "../components/Berita";
import Potensi from "../components/Potensi";
import Wisata from "../components/Wisata";
import Galery from "../components/Galery";
import PetaDesa from "../components/PetaDesa";
import Footer from "../components/Footer";
import Image from "next/image";

export default function TypewriterEffectDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Cek apakah berada di browser
  const isBrowser = typeof window !== "undefined";

  const handleScroll = () => {
    if (isBrowser) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

      if (scrollTop > 200) {
        // Tampilkan tombol jika scroll lebih dari 200px
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }

      setScrollProgress(scrollPercent);
    }
  };

  const scrollToTop = () => {
    if (isBrowser) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isBrowser]);

  const words = [
    { text: "Desa" },
    {
      text: "Mentuda",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SpeedInsights />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col items-center justify-center min-h-[50rem] mt-6">
        <Image
          src="/assets/img/logo/images.jpeg"
          alt="Logo Desa Mentuda"
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
      <PopulationProps
        total={1234}
        male={600}
        female={634}
        keluarga={650}
        Sementara={25}
        Mutasi={2}
      />
      <Berita />
      <Potensi />
      <Wisata />
      <Galery />
      <PetaDesa />
      <Footer />
      {showScrollToTop && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-50">
          <div
            className="w-full h-full rounded-full border-4 border-white flex items-center justify-center"
            style={{
              background: `conic-gradient(#4F46E5 ${scrollProgress}%, transparent ${scrollProgress}% 100%)`,
            }}
          >
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span className="text-lg md:text-xl">🚀</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
