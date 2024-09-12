import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [currentPath, setCurrentPath] = useState<string>("");
  const [hasShadow, setHasShadow] = useState<boolean>(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => currentPath === path ? "text-blue-500 font-bold" : "text-gray-700 dark:text-gray-200";

  return (
    <nav className={`bg-white dark:bg-gray-800 ${hasShadow ? 'shadow-md' : ''} w-full fixed top-0 left-0 z-50 transition-shadow duration-300`}>
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
              <Link href="/" className={`relative ${isActive("/")}`}>
                <span className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Beranda
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </span>
              </Link>
              <Link href="/profil-desa" className={`relative ${isActive("/profil-desa")}`}>
                <span className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Profil Desa
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </span>
              </Link>
              <Link href="/infografis" className={`relative ${isActive("/infografis")}`}>
                <span className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Infografis
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </span>
              </Link>
              <Link href="/peta-desa" className={`relative ${isActive("/peta-desa")}`}>
                <span className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Peta Desa
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </span>
              </Link>
              <Link href="/berita" className={`relative ${isActive("/berita")}`}>
                <span className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Berita
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </span>
              </Link>
              <Link href="/ppid" className={`relative ${isActive("/ppid")}`}>
                <span className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                  PPID
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 transform scale-x-0 hover:scale-x-100"></span>
                </span>
              </Link>
            </div>
          </div>

          {/* Login/Register */}
          <div className="hidden md:flex items-center space-x-4">
  <Link href="Login" legacyBehavior>
    <a 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-20 h-8 rounded-lg bg-blue-500 text-white text-sm flex items-center justify-center cursor-pointer hover:bg-blue-600"
    >
      Masuk
    </a>
  </Link>
  <Link href="Register" legacyBehavior>
    <a 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-20 h-8 rounded-lg border-2 border-green-500 text-green-500 text-sm bg-transparent hover:bg-green-500 hover:text-white flex items-center justify-center cursor-pointer"
    >
      Daftar
    </a>
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
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/")}`}>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              Beranda
            </span>
          </Link>
          <Link href="/profil-desa" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/profil-desa")}`}>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              Profil Desa
            </span>
          </Link>
          <Link href="/infografis" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/infografis")}`}>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              Infografis
            </span>
          </Link>
          <Link href="/peta-desa" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/peta-desa")}`}>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              Peta Desa
            </span>
          </Link>
          <Link href="/berita" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/berita")}`}>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              Berita
            </span>
          </Link>
          <Link href="/ppid" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive("/ppid")}`}>
            <span className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
              PPID
            </span>
          </Link>

          {/* Login/Register Mobile */}
          <div className="flex flex-col space-y-2 mt-4">
            <Link href="/masuk">
              <span className="w-full h-8 rounded-lg bg-blue-500 text-white text-sm flex items-center justify-center cursor-pointer hover:bg-blue-600">
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
