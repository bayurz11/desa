import React, { ReactNode, useState } from 'react';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);

  return (
    <div className="flex flex-col h-auto">
      {/* Konten Utama */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Bagian Kiri */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Desa Mentuda</h2>
              <p className="text-sm mb-2">
                Desa Mentuda adalah sebuah desa yang terletak di Kec. Mentuda, Provinsi.
              </p>
              <p className="text-sm mb-2">Jl. Raya Mentuda No.123</p>
              <p className="text-sm mb-2">Telepon: (123) 456-7890</p>
              <p className="text-sm">Email: info@desamentuda.id</p>
            </div>

            {/* Kolom Profil Desa - Dropdown (Mobile Only) */}
            <div className="md:hidden">
              <h2 className="text-lg font-semibold mb-4 cursor-pointer" onClick={() => setIsProfilOpen(!isProfilOpen)}>
                PROFIL DESA
              </h2>
              {isProfilOpen && (
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                  <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
                  <li><a href="#" className="hover:underline">Artikel</a></li>
                </ul>
              )}
            </div>

            {/* Kolom Layanan - Dropdown (Mobile Only) */}
            <div className="md:hidden">
              <h2 className="text-lg font-semibold mb-4 cursor-pointer" onClick={() => setIsLayananOpen(!isLayananOpen)}>
                LAYANAN
              </h2>
              {isLayananOpen && (
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="hover:underline">Pengaduan</a></li>
                  <li><a href="#" className="hover:underline">Persuratan</a></li>
                </ul>
              )}
            </div>

            {/* Kolom Profil Desa dan Layanan (Tampilan Desktop) */}
            <div className="hidden md:block">
              <h2 className="text-lg font-semibold mb-4">PROFIL DESA</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                <li><a href="#" className="hover:underline">Hubungi Kami</a></li>
                <li><a href="#" className="hover:underline">Artikel</a></li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h2 className="text-lg font-semibold mb-4">LAYANAN</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:underline">Pengaduan</a></li>
                <li><a href="#" className="hover:underline">Persuratan</a></li>
              </ul>
            </div>

            {/* Kolom Lainnya */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Sosial Media Kami</h2>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {/* Ikon Sosial Media */}
                <a href="#" className="hover:text-blue-500">
                <FaFacebookSquare  className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-pink-500">
                <PiInstagramLogoFill className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-4">© {new Date().getFullYear()} Desa Mentuda. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
