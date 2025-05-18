import {
  FaBatteryFull,
  FaBiohazard,
  FaRecycle,
  FaBoxes,
  FaTshirt,
  FaGlassMartiniAlt,
  FaIndustry,
  FaFileAlt,
  FaTrashAlt,
  FaShoePrints,
} from 'react-icons/fa';
import { MdOutlineLocalDrink } from 'react-icons/md';

const wasteIcons = {
  battery: <FaBatteryFull size={64} color="white" />,
  biological: <FaBiohazard size={64} color="white" />,
  'brown-glass': <FaGlassMartiniAlt size={64} color="#6b4f1d" />, // brown-ish color
  cardboard: <FaBoxes size={64} color="white" />,
  clothes: <FaTshirt size={64} color="white" />,
  'green-glass': <FaGlassMartiniAlt size={64} color="#2f7a1e" />, // green-ish
  metal: <FaIndustry size={64} color="white" />,
  paper: <FaFileAlt size={64} color="white" />,
  plastic: <MdOutlineLocalDrink size={64} color="white" />,
  shoes: <FaShoePrints size={64} color="white" />,
  trash: <FaTrashAlt size={64} color="white" />,
  'white-glass': <FaGlassMartiniAlt size={64} color="#d9d9d9" />, // light grey/white glass
};

export default function DetectionArea({ item, type }) {
  return (
    <div className="w-1/2 bg-cyan-400 flex flex-col items-center justify-center text-white p-6">
      <div className="mb-6">
        {wasteIcons[item] || <FaRecycle size={64} color="white" />}
      </div>
      <h2 className="text-3xl font-bold mb-2 capitalize">{item}</h2>
      <p className="text-lg font-medium opacity-80">
        {typeof type === 'number' ? type.toFixed(2) : ''}
      </p>
    </div>
  );
}
