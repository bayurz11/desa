import React from "react";
import Image from "next/image";

const BeritaDesa: React.FC = () => {
  // Data berita
  const beritaList = [
    {
      id: 1,
      title: "Nama Berita 1",
      date: "01 September 2024",
      
    },
    {
      id: 2,
      title: "Nama Berita 2",
      date: "02 September 2024",
      
    },
    {
      id: 3,
      title: "Nama Berita 3",
      date: "03 September 2024",
     
    },
    {
      id: 4,
      title: "Nama Berita 4",
      date: "04 September 2024",
      
    },
    // Tambahkan lebih banyak berita jika diperlukan
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Bagian teks */}
        <div className="md:col-span-1 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Berita Desa</h2>
          <p className="text-gray-600">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa
          </p>
          {/* Tombol dengan animasi hover */}
          <div className="mt-6">
            <button className="bg-gray-300 rounded-md py-2 px-4 text-gray-700 transition duration-300 hover:bg-gray-400">
              Selengkapnya
            </button>
          </div>
        </div>

        {/* Bagian Card Berita */}
        <div className="md:col-span-2">
          {/* Container untuk scroll di mobile */}
          <div className="flex md:hidden overflow-x-auto space-x-4">
            {beritaList.map((berita) => (
              <div
                key={berita.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-60 flex-shrink-0 transition-all duration-300 min-h-[150px] hover:min-h-[250px] hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/assets/img/1.avif"
                    alt={`Gambar ${berita.title}`}
                    className="w-full h-32 object-cover transform transition duration-500 hover:scale-110"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{berita.title}</h3>
                  <p className="text-[10px] text-gray-500 mb-2">Tanggal: {berita.date}</p>
                  
                  <button className="mt-4 bg-gray-300 rounded-md py-2 px-4 text-gray-700 transition duration-300 hover:bg-gray-400">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Grid layout untuk tablet dan desktop, tampilkan hanya 3 card */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {beritaList.slice(0, 3).map((berita) => (
              <div
                key={berita.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 min-h-[150px] hover:min-h-[250px] hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/assets/img/1.avif"
                    alt={`Gambar ${berita.title}`}
                    className="w-full h-32 object-cover transform transition duration-500 hover:scale-110"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{berita.title}</h3>
                  <p className="text-[8px] md:text-base text-gray-500 mb-2">Tanggal: {berita.date}</p>
                  
                  <button className="mt-4 bg-gray-300 rounded-md py-2 px-4 text-gray-700 transition duration-300 hover:bg-gray-400">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaDesa;
