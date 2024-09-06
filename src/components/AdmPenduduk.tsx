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
    <div className="bg-white p-6 rounded-lg shadow-md w-full border border-gray-300 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in">
      <h3 className="text-lg font-semibold text-center mb-3">{title}</h3>
      <p className="text-5xl font-extrabold text-center text-blue-600">
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
}

const PopulationStatistics: React.FC<PopulationProps> = ({ total, male, female }) => {
  return (
    <div className="p-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-6">Administrasi Penduduk</h2>
      <p className="text-center mb-10 text-gray-700">
        Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi terkait dengan kependudukan dan
        pendayagunaannya untuk pelayanan publik yang efektif dan efisien.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PopulationCard title="Total Penduduk" count={total} />
        <PopulationCard title="Laki-Laki" count={male} />
        <PopulationCard title="Perempuan" count={female} />
      </div>
    </div>
  );
};

export default PopulationStatistics;
