import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const NotFound = () => {
  return (
    <PageTransition>
      <div class="flex flex-col justify-center items-center py-52 px-4">
        <div class="max-w-md w-full space-y-8 text-center">
          <div class="mb-8">
            <h2 class="text-6xl font-extrabold text-gray-900 dark:text-gray-100 tracking-widest">404</h2>
            <p class="mt-1 text-3xl font-bold text-gray-900 dark:text-gray-100">Página no encontrada</p>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
          </div>
          <div class="mt-2">
            <Link
              to="/"
              class="text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xl px-5 py-3 font-semibold dark:focus:ring-blue-200 transition"
            >
              <i className="bi bi-arrow-right me-1"></i>Volver al Home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
