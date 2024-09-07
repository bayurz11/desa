import React, { useRef, useEffect } from "react";
import Image from "next/image";

const StrukturOrganisasi: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.clientWidth;
      const duration = 40000; // Durasi animasi dalam milidetik

      let startTime: number | null = null;

      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;
        scrollContainer.scrollLeft = progress * (scrollWidth - containerWidth);

        // Pastikan animasi tetap berjalan halus
        if (scrollContainer.scrollLeft >= scrollWidth - containerWidth) {
          startTime = timestamp; // Reset startTime untuk animasi halus dari awal
        }

        requestAnimationFrame(animateScroll);
      };

      requestAnimationFrame(animateScroll);

      return () => {
        // Tidak perlu menghapus event listener karena kita tidak menambahkannya
      };
    }
  }, []);

  const items = Array.from({ length: 12 }, (_, i) => i); // Mengubah jumlah item menjadi 7

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white py-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Struktur Organisasi Desa Mentuda</h2>

      {/* Bagian Card Struktur Organisasi */}
      <div
        ref={containerRef}
        className="w-full max-w-screen-xl overflow-x-auto whitespace-nowrap bg-gray-100 rounded-lg shadow-md p-4"
        style={{
          scrollbarWidth: 'none',  // Untuk Firefox
          msOverflowStyle: 'none', // Untuk Internet Explorer dan Edge
        }}
      >
        <div className="inline-flex space-x-4">
          {items.map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow-md w-64 flex-shrink-0 flex flex-col items-center"
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
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Lihat Lebih Banyak
      </button>
    </div>
  );
};

export default StrukturOrganisasi;
