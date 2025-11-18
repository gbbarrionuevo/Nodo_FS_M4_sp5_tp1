import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';

const Header = () => {
  return (
    <header role="banner" className="bg-gray-900 dark:bg-gray-950 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative w-7 h-7 rounded-full border border-black overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-red-600"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white border-2 border-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <h1 className="text-2xl font-bold text-red-500">PokeAPI</h1>
        </Link>

        <div className="flex items-center space-x-3">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
