import React from "react";
import Image from "next/image";

const PotensiDesa: React.FC = () => {
  // Data potensi desa
  const potensiList = [
    {
      id: 1,
      title: "Potensi Pertanian",
      description: "Pertanian desa kami menghasilkan berbagai macam hasil bumi yang melimpah.",
    },
    {
      id: 2,
      title: "Potensi Pariwisata",
      description: "Desa kami memiliki keindahan alam yang cocok untuk pariwisata.",
    },
    {
      id: 3,
      title: "Potensi Perikanan",
      description: "Desa memiliki potensi besar dalam sektor perikanan dengan hasil laut yang beragam.",
    },
  ];

  return (
    <div className="container mx-auto py-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Bagian Card Potensi (atas pada mobile, kiri pada desktop) */}
        <div className="order-2 md:order-none md:col-span-2">
          {/* Container untuk scroll di mobile */}
          <div className="flex md:hidden overflow-x-auto space-x-4">
            {potensiList.map((potensi) => (
              <div
                key={potensi.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden w-60 flex-shrink-0 transition-all duration-300 min-h-[150px] hover:min-h-[250px] hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/assets/img/1.avif"
                    alt={`Gambar ${potensi.title}`}
                    className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
                    width={240} // Sesuaikan dengan lebar card
                    height={150} // Sesuaikan dengan tinggi gambar
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{potensi.title}</h3>
                  <p className="text-[10px] text-gray-500 mb-2">{potensi.description}</p>
                  
                  <button className="mt-4 bg-blue-500 rounded-md py-2 px-4 text-white transition duration-300 hover:bg-blue-600">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Grid layout untuk tablet dan desktop, tampilkan hanya 3 card */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {potensiList.slice(0, 3).map((potensi) => (
              <div
                key={potensi.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 min-h-[150px] hover:min-h-[250px] hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/assets/img/1.avif"
                    alt={`Gambar ${potensi.title}`}
                    className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
                    width={240} // Sesuaikan dengan lebar card
                    height={150} // Sesuaikan dengan tinggi gambar
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{potensi.title}</h3>
                  <p className="text-[8px] md:text-base text-gray-500 mb-2">{potensi.description}</p>
                  
                  <button className="mt-4 bg-gray-300 rounded-md py-2 px-4 text-gray-700 transition duration-300 hover:bg-gray-400">
                    Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian teks (bawah pada mobile, kanan pada desktop) */}
        <div className="order-1 md:order-none md:col-span-1 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Potensi Desa</h2>
          <p className="text-gray-600">
            Informasi tentang potensi dan kemajuan Desa di berbagai bidang seperti ekonomi, pariwisata, pertanian, industri kreatif, dan kelestarian lingkungan.
          </p>
          {/* Tombol dengan animasi hover */}
          <div className="mt-6">
            <button className="bg-blue-500 rounded-md py-2 px-4 text-white transition duration-300 hover:bg-blue-600">
              Lihat Semua Potensi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotensiDesa;
