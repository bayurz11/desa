import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Import MapContainer secara dinamis, tanpa server-side rendering
const PetaDesa = dynamic(() => import('../components/PetaDesaComponent'), {
  ssr: false,
});

// Ini komponen utama yang akan kamu gunakan
const PetaDesaWrapper: React.FC = () => {
  return (
    <div>
      <PetaDesa lat={-0.17376} lng={104.48504} />
    </div>
  );
};

export default PetaDesaWrapper;
