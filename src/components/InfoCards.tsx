import React from 'react';
import Image from "next/image";
interface CardProps {
  card: typeof cardData[number];
}

const cardData = [
  { src: "/assets/img/infocard/map.png", alt: "Peta Desa Icon", text: "Peta Desa", href: "../peta-desa" },
  { src: "/assets/img/infocard/compliant.png", alt: "Produk Hukum Icon", text: "Produk Hukum", href: "/produk-hukum" },
  { src: "/assets/img/infocard/document.png", alt: "Informasi Publik Icon", text: "Informasi Publik", href: "/informasi-publik" },
  { src: "/assets/img/infocard/archive.png", alt: "Arsip Berita Icon", text: "Arsip Berita", href: "/arsip-berita" },
  { src: "/assets/img/infocard/image-gallery.png", alt: "Album Galeri Icon", text: "Album Galeri", href: "/album-galeri" },
  { src: "/assets/img/infocard/announcement.png", alt: "Pengaduan Icon", text: "Pengaduan", href: "/pengaduan" },
  { src: "/assets/img/infocard/architect.png", alt: "Pembangunan Icon", text: "Pembangunan", href: "/pembangunan" },
  { src: "/assets/img/infocard/pie-chart.png", alt: "Status IDM Icon", text: "Status IDM", href: "/status-idm" },
];

const mobileCardData = [
  "Informasi Publik",
  "Arsip Berita",
  "Album Galeri",
  "Pengaduan",
  "Pembangunan",
  "Status IDM"
].map(text => cardData.find(card => card.text === text));

const Card: React.FC<CardProps> = ({ card }) => (
  <a
    href={card.href}
    className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:scale-105 hover:shadow-lg transition-transform duration-300"
  >
    <Image src={card.src} alt={card.alt} className="mb-2 h-12 w-12 object-contain" width={400} // Atur lebar sesuai kebutuhan
          height={250}  />
    <p className="text-center text-gray-700 dark:text-gray-200 text-sm md:text-base">
      {card.text}
    </p>
  </a>
);

const InfoCards: React.FC = () => {
  return (
    <div
    className="mt-10">
      {/* Desktop Cards */}
      <div className="hidden md:grid md:grid-cols-8 md:gap-4">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      {/* Mobile Cards */}
      <div className="md:hidden grid grid-cols-3 gap-4 px-4">
        {mobileCardData.map((card, index) => (
          card && <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
