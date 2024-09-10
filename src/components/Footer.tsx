import React, { useState } from 'react';

const Layout: React.FC = ({ children }) => {
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
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.349C0 23.405.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.465.098 2.798.142v3.24l-1.919.001c-1.503 0-1.795.715-1.795 1.763v2.309h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.675V1.326C24 .595 23.405 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.918 2.201-4.918 4.917 0 .385.045.76.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.422.722-.664 1.561-.664 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.923-.087.631 1.953 2.445 3.376 4.6 3.415-1.68 1.318-3.809 2.105-6.102 2.105-.397 0-.788-.023-1.174-.067C2.29 21.14 5.019 22 7.946 22c9.142 0 14.307-7.721 14.307-14.426 0-.22-.005-.439-.015-.656A10.262 10.262 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-500">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.975 1.243 2.242 1.305 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.305 3.608-.975.975-2.242 1.243-3.608 1.305-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.305-.975-.975-1.243-2.242-1.305-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.305-3.608C6.517 2.492 7.784 2.224 9.15 2.163 10.416 2.105 10.796 2.093 12 2.093zm0-2.163C8.741 0 8.332.014 7.051.071 5.772.13 4.518.392 3.476 1.434 2.434 2.476 2.172 3.73 2.113 5.01.02 10.722 0 11.1 0 12s.014 1.278.07 2.548c.059 1.281.321 2.535 1.363 3.577 1.042 1.042 2.297 1.305 3.577 1.363C8.332 23.986 8.741 24 12 24s3.668-.014 4.949-.071c1.281-.059 2.535-.321 3.577-1.363 1.042-1.042 1.305-2.297 1.363-3.577.057-1.27.071-1.679.071-4.949s-.014-3.668-.071-4.949c-.059-1.281-.321-2.535-1.363-3.577-1.042-1.042-2.297-1.305-3.577-1.363C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 00-6.162 6.162 6.162 6.162 0 006.162 6.162 6.162 6.162 0 006.162-6.162A6.162 6.162 0 0012 5.838zm0 10.162a3.997 3.997 0 01-3.997-3.997A3.997 3.997 0 0112 8.006a3.997 3.997 0 013.997 3.997A3.997 3.997 0 0112 16zM18.406 4.594a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm mt-8">
            © 2024 Desa Mentuda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
