import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav className="flex px-5 py-3 text-gray-700 bg-gray-50 rounded-lg border border-gray-200" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 3.172l5.828 5.828a4 4 0 11-5.656 5.656L4.344 10.34l-1.41 1.413a6 6 0 008.486 8.485l.172-.171a6 6 0 008.485-8.485L10 3.172z" />
              </svg>
              Beranda
            </span>
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 12l-2.4 2.4 2.4 2.4H3.6v-4.8h5.4v-2.4H3.6v-4.8H7.2L4.8 4.8 9 9h9V4.8h-4.8v14.4H9v-7.2z" />
            </svg>
            <Link href="/peta-desa">
              <span className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                Peta Desa
              </span>
            </Link>
          </div>
        </li>
      </ol>
    </nav>
  );
}
