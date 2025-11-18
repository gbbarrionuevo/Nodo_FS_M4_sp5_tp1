const Footer = () => {
  return (
    <footer role="contentinfo" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold text-red-500">PokeAPI</span>
      </div>
    </footer>
  );
};

export default Footer;
