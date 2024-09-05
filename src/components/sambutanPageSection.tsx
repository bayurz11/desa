import React from "react";
import Image from "next/image";

const NewPageSection: React.FC = () => {
  return (
    // Konten baru di bawah InfoCards
    <div className="flex flex-col md:flex-row items-center justify-center mt-12 bg-gray-100 py-10 w-full space-y-6 md:space-y-0 md:space-x-6 px-4">
      {/* Bagian Gambar */}
      <div className="flex-shrink-0">
        <Image
          src="/assets/img/1.avif"
          alt="Sambutan Kepala Desa"
          width={400} // Sesuaikan ukuran gambar
          height={400} // Sesuaikan ukuran gambar
          className="rounded-lg"
        />
      </div>

      {/* Bagian Teks */}
      <div className="flex flex-col items-center md:items-start max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Sambutan Kepala Desa</h2>
        <p className="text-center md:text-left">
          Ini adalah konten tambahan yang bisa digunakan untuk memberikan informasi
          lebih lanjut tentang desa, kegiatan, atau apa saja yang ingin kamu tampilkan
          di halaman ini.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Lihat Lebih Banyak
        </button>
      </div>
    </div>
  );
};

export default NewPageSection;
