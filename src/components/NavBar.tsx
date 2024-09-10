import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from 'next/link';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md w-full fixed">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with link to home */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/assets/img/logo/images.jpeg"
              alt="Logo"
              width={40}
              height={35}
              className="h-8 w-6"
            />
            <span className="ml-2 font-semibold text-xl dark:text-white">
              Mentuda
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex space-x-9">
              <Link href="/" className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-500 hover:underline transition duration-300">
                Beranda
              </Link>
              <Link href="/profil-desa" className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-500 hover:underline transition duration-300">
                Profil Desa
              </Link>
              <Link href="/infografis" className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-500 hover:underline transition duration-300">
                Infografis
              </Link>
              <Link href="/peta" className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-500 hover:underline transition duration-300">
                Peta Desa
              </Link>
              <Link href="/berita" className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-500 hover:underline transition duration-300">
                Berita
              </Link>
              <Link href="/ppid" className="text-gray-700 dark:text-gray-200 font-bold hover:text-blue-500 hover:underline transition duration-300">
                PPID
              </Link>
            </div>
          </div>

          {/* Login/Register */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/masuk">
              <span className="w-20 h-8 rounded-lg bg-blue-500 text-white text-sm flex items-center justify-center cursor-pointer">
                Masuk
              </span>
            </Link>
            <Link href="/daftar">
              <span className="w-20 h-8 rounded-lg border-2 border-green-500 text-green-500 text-sm bg-transparent hover:bg-green-500 hover:text-white flex items-center justify-center cursor-pointer">
                Daftar
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={`${isOpen ? "hidden" : "inline-flex"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${isOpen ? "inline-flex" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-gray-700 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Beranda
          </Link>
          <Link href="/profil-desa" className="text-gray-700 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Profil Desa
          </Link>
          <Link href="/infografis" className="text-gray-700 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Infografis
          </Link>
          <Link href="/peta" className="text-gray-700 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Peta Desa
          </Link>
          <Link href="/berita" className="text-gray-700 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            Berita
          </Link>
          <Link href="/ppid" className="text-gray-700 dark:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
            PPID
          </Link>

          {/* Login/Register Mobile */}
          <div className="flex flex-col space-y-2 mt-4">
            <Link href="/masuk">
              <span className="w-full h-8 rounded-lg bg-blue-500 text-white text-sm flex items-center justify-center cursor-pointer">
                Masuk
              </span>
            </Link>
            <Link href="/daftar">
              <span className="w-full h-8 rounded-lg border-2 border-green-500 text-green-500 text-sm bg-transparent hover:bg-green-500 hover:text-white flex items-center justify-center cursor-pointer">
                Daftar
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
