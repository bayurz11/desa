"use client";
import { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from 'next/image'; // Import Image from next/image

const TypewriterEffectDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

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

  return (
    <div className="min-h-screen flex flex-col">
      <SpeedInsights />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <h2 className="text-2xl font-bold text-center mb-16">
        Profil Desa Mentuda
      </h2>

      <section className="p-8 bg-white">
       
        <div className="flex flex-col items-center">
          <div className="w-1/3 flex justify-center mb-8">
            <Image
              src="/assets/img/logo/images.jpeg"
              alt="Logo Desa Mentuda"
              className="mb-8"
              width={150}
              height={150}
            />
            
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">Desa Mentuda</h3>
          <p className="text-lg text-center mb-4"> Kecamatan Lingga, Kabupaten Lingga, Provinsi Kepulauan Riau</p>
          <div className="w-2/3 ">
            <h3 className="text-xl font-semibold mb-4 text-center">Visi</h3>
            <p className="text-gray-700 mb-8 text-center">
              Visi Desa Mentuda adalah menciptakan masyarakat yang mandiri, sejahtera, dan berbudaya, dengan memanfaatkan potensi lokal dan teknologi untuk meningkatkan kualitas hidup warga.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-center">Misi</h3>
            <div className="flex justify-center items-center">
  <ul className="list-disc list-inside text-gray-700">
    <li>Meningkatkan infrastruktur desa untuk mendukung pertumbuhan ekonomi lokal.</li>
    <li>Memberdayakan masyarakat melalui pelatihan dan pendidikan keterampilan.</li>
    <li>Melestarikan budaya lokal dan lingkungan hidup untuk generasi mendatang.</li>
    <li>Memperkuat partisipasi masyarakat dalam pengambilan keputusan desa.</li>
  </ul>
</div>

          </div>
        </div>
      </section>

      <section className="p-8 bg-gray-100 text-center">
        <h3 className="text-xl font-semibold mb-4">Bagan Desa</h3>
        <p className="text-lg text-center mb-4"> Bagan Struktur Desa Mentuda</p>
        <div className="flex justify-center">
          <Image
           src="/assets/img/1.avif" // Ganti dengan path gambar Bagan Desa Anda
            alt="Bagan Desa Mentuda"
            className="mb-8"
            style={{ borderRadius: '12px' }}
            width={800} // Atur sesuai kebutuhan
            height={800} // Atur sesuai kebutuhan
          />
        </div>
      </section>

      <section className="p-8 bg-white">
        <h3 className="text-xl font-semibold text-center mb-4">Struktur Organisasi Badan Permusyawaratan Desa</h3>
        <div className="flex flex-col items-center">
          {/* Ganti src dengan path gambar Struktur Organisasi Anda */}
          <Image
            src="/assets/img/1.avif" 
            alt="Struktur Organisasi Badan Permusyawaratan Desa"
            className="mb-8"
            style={{ borderRadius: '12px' }}
            width={800} // Atur sesuai kebutuhan
            height={600} // Atur sesuai kebutuhan
          />
        </div>
      </section>
      
      <Footer />
      {showScrollToTop && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
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
};

export default TypewriterEffectDemo;
