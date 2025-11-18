import { usePokemon } from '../context/PokemonContext';
import PokeballLoader from '../components/PokeballLoader';
import PokemonCard from '../components/PokemonCard';
import PageTransition from "../components/PageTransition";
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const { pokemon, loading } = usePokemon();

  return (
    <PageTransition>
      <div className="min-h-[80vh] py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-wide">Lista de Pokémon</h2>

          <Link
            to="/pokemon/create"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl shadow-md transition"
          >
            Crear Pokémon
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[500px]">
            <PokeballLoader />
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {pokemon.map(p => (
                <PokemonCard
                  key={p.id}
                  pokemon={p}
                />
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/"
                className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-xl shadow-xl transition"
              >
                Volver al Home
              </Link>
            </div>
          </>
        )}
      </div>
    </PageTransition>
  );
};

export default PokemonList;
