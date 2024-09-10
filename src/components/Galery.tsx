import React from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  title: string;
}

const Gallery: React.FC = () => {
  const galleryImages: GalleryImage[] = [
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 1' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 2' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 3' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 4' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 5' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 6' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 7' },
    { src: '/assets/img/1.avif', title: 'Pemandangan Desa 8' },
  ];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold mb-4">Galeri Desa</h2>
        <p className="text-gray-600 text-center">
          Menampilkan kegiatan-kegiatan yang berlangsung di Desa
        </p>
      </div>

      {/* Grid untuk desktop */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden w-full h-60">
              <Image
                src={image.src}
                alt={`Galeri ${index}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width={400}
                height={300}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="text-white text-lg font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll horizontal untuk mobile */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex space-x-4 p-2 overflow-hidden ">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg flex-shrink-0 transition-transform duration-500 hover:scale-105"
              style={{ width: '280px' }}
            >
              <div className="relative overflow-hidden w-full h-48">
                <Image
                  src={image.src}
                  alt={`Galeri ${index}`}
                  className="w-full h-full object-cover"
                  width={300}
                  height={225}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-base font-medium">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol 'Lihat Selengkapnya' */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Gallery;
