import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface PopulationCardProps {
  title: string;
  count: number;
}

const PopulationCard: React.FC<PopulationCardProps> = ({ title, count }) => {
  // Animasi untuk angka
  const props = useSpring({
    to: { number: count },
    from: { number: 0 },
    config: { duration: 4000 }, // Durasi animasi
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full border border-gray-300 transition-transform duration-300 hover:shadow-md animate-fade-in">
      <h3 className="text-base md:text-base font-semibold text-center mb-3">{title}</h3>
      <p className="text-4xl md:text-4xl font-extrabold text-center text-blue-600">
        <animated.span>
          {props.number.to(n => Math.floor(n))}
        </animated.span>
      </p>
    </div>
  );
};

interface PopulationProps {
  total: number;
  male: number;
  female: number;
  keluarga: number;
  Sementara: number;
  Mutasi: number;
}

const PopulationStatistics: React.FC<PopulationProps> = ({ total, male, female, keluarga, Sementara, Mutasi }) => {
  return (
    <div className="p-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-6">Administrasi Penduduk</h2>
      <p className="text-center mb-10 text-gray-700">
        Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi terkait dengan kependudukan dan
        pendayagunaannya untuk pelayanan publik yang efektif dan efisien.
      </p>
      {/* Tambahkan margin-bottom pada grid untuk memberi ruang di bawahnya */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 w-full mb-8">
        <PopulationCard title="Total Penduduk" count={total} />
        <PopulationCard title="Kepala Keluarga" count={keluarga} />
        <PopulationCard title="Laki-Laki" count={male} />
        <PopulationCard title="Perempuan" count={female} />
        <PopulationCard title="Penduduk Sementara" count={Sementara} />
        <PopulationCard title="Mutasi Penduduk" count={Mutasi} />
      </div>
    </div>
  );
};

export default PopulationStatistics;
