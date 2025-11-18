import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="w-8 h-8 rounded-full transition-colors duration-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
    >
      <i className={`bi ${isDarkMode ? 'bi-sun-fill text-yellow-400' : 'bi-moon-fill text-gray-800'} h-5 w-5`}></i>
    </Button>
  );
};

export default ThemeButton;
