import React from "react";
import Image from "next/image";
import 'public/css/StrukturOrganisasi.css'; // Pastikan untuk menambahkan file CSS terpisah

const StrukturOrganisasi: React.FC = () => {
  const items = Array.from({ length: 7 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-white py-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Struktur Organisasi Desa Mentuda
      </h2>

      {/* Bagian Card Struktur Organisasi */}
      <div className="scroll-container w-full max-w-screen-xl overflow-x-hidden whitespace-nowrap bg-gray-100 rounded-lg shadow-md p-4">
        <div className="scroll-content inline-flex space-x-4">
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
          {/* Duplikat konten untuk ilusi infinite scrolling */}
          {items.map((item) => (
            <div
              key={`dup-${item}`}
              className="bg-white p-4 rounded-lg shadow-md w-64 flex-shrink-0 flex flex-col items-center snap-center"
            >
              <Image
                src={`/assets/img/user/images.png`}
                alt={`Foto Posisi Duplikat ${item + 1}`}
                width={400}
                height={400}
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
