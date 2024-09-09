import React from "react";
import Image from "next/image";

const WisataDesa: React.FC = () => {
  const wisataList = [
    {
      id: 1,
      title: "Wisata Alam",
      description: "Keindahan alam desa kami yang menakjubkan untuk dikunjungi.",
    },
    {
      id: 2,
      title: "Wisata Budaya",
      description: "Tradisi dan budaya lokal yang kaya untuk dipelajari.",
    },
    {
      id: 3,
      title: "Wisata Kuliner",
      description: "Makanan khas desa yang lezat dan menggugah selera.",
    },
    {
      id: 4,
      title: "Wisata Sejarah",
      description: "Tempat bersejarah yang menarik untuk dikunjungi.",
    },
    {
      id: 5,
      title: "Wisata Edukasi",
      description: "Tempat belajar dan berinteraksi dengan kegiatan edukatif.",
    },
    {
      id: 6,
      title: "Wisata Petualangan",
      description: "Aktivitas petualangan seru di alam terbuka.",
    },
    {
      id: 7,
      title: "Wisata Religi",
      description: "Tempat-tempat religi dengan suasana yang menenangkan.",
    },
    {
      id: 8,
      title: "Wisata Olahraga",
      description: "Fasilitas olahraga dan kegiatan fisik untuk semua usia.",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Bagian teks */}
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold mb-4">Wisata Desa</h2>
        <p className="text-gray-600 text-center">
          Temukan berbagai destinasi wisata menarik di desa kami, mulai dari keindahan alam hingga kuliner khas yang menggugah selera.
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 rounded-md py-2 px-4 text-white transition duration-300 hover:bg-blue-600">
            Lihat Semua Wisata
          </button>
        </div>
      </div>

      {/* Bagian Card Wisata */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="whitespace-nowrap">
          {wisataList.map((wisata) => (
            <div
              key={wisata.id}
              className="inline-block bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl mx-3"
              style={{ width: "300px" }}
            >
              <div className="overflow-hidden">
                <Image
                  src="/assets/img/1.avif"
                  alt={`Gambar ${wisata.title}`}
                  className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
                  width={300} // Sesuaikan dengan lebar card
                  height={200} // Sesuaikan dengan tinggi card
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{wisata.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{wisata.description}</p>
                <button className="mt-4 bg-blue-500 rounded-md py-2 px-4 text-white transition duration-300 hover:bg-blue-600">
                  Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WisataDesa;
