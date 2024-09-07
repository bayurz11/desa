import React, { useRef, useEffect } from "react";
import Image from "next/image";

const StrukturOrganisasi: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let isUserScrolling = false; // Untuk mendeteksi apakah pengguna sedang scroll manual

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
      const duration = 30000; // Durasi animasi dalam milidetik

      let startTime: number | null = null;

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;

        if (!isUserScrolling) { // Hanya scroll otomatis jika pengguna tidak sedang scroll manual
          scrollContainer.scrollLeft = progress * (scrollWidth - containerWidth);
        }

        requestAnimationFrame(animateScroll);
      };

      // Memulai animasi scroll otomatis
      requestAnimationFrame(animateScroll);

      // Menangani deteksi scroll manual oleh pengguna
      const handleUserScroll = () => {
        isUserScrolling = true;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          isUserScrolling = false;
        }, 1000); // Menganggap pengguna selesai scroll setelah 1 detik
      };

      let timeoutId: NodeJS.Timeout;
      scrollContainer.addEventListener("scroll", handleUserScroll);

      return () => {
        scrollContainer.removeEventListener("scroll", handleUserScroll);
      };
    }
  }, []);

  const items = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white py-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Struktur Organisasi Desa Mentuda
      </h2>

      {/* Bagian Card Struktur Organisasi */}
      <div
        ref={containerRef}
        className="w-full max-w-screen-xl overflow-x-auto whitespace-nowrap bg-gray-100 rounded-lg shadow-md p-4 scroll-smooth"
        style={{
          scrollbarWidth: 'none', // Untuk Firefox
          msOverflowStyle: 'none', // Untuk Internet Explorer dan Edge
        }}
      >
        <div className="inline-flex space-x-4">
          {items.map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow-md w-64 flex-shrink-0 flex flex-col items-center snap-center"
            >
              <Image
                src={`/assets/img/user/images.png`} // Ganti dengan URL gambar yang sesuai
                alt={`Foto Posisi ${item + 1}`}
                width={400} // Sesuaikan ukuran gambar
                height={400} // Sesuaikan ukuran gambar
                className="w-24 h-24 rounded-full mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-center mb-2">Nama Posisi {item + 1}</h3>
              <p className="text-center text-sm text-gray-700">
                Deskripsi singkat tentang posisi ini.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
