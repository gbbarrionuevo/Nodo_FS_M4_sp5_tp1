import { Link, useParams } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import PageTransition from "../components/PageTransition";

const PokemonDetail = () => {
  const { id } = useParams();
  const { pokemon } = usePokemon();

  const poke = pokemon.find((p) => p.id === id);

  if (!poke) {
    return <p>Pokémon no encontado</p>
  }

  // Colores según tipos
  const typeInfo = {
    Normal: "bg-gray-400",
    Fuego: "bg-red-500",
    Agua: "bg-blue-500",
    Planta: "bg-green-500",
    Eléctrico: "bg-yellow-400",
    Hielo: "bg-cyan-400",
    Lucha: "bg-orange-700",
    Veneno: "bg-purple-600",
    Tierra: "bg-amber-700",
    Volador: "bg-sky-400",
    Psíquico: "bg-pink-500",
    Bicho: "bg-lime-600",
    Roca: "bg-stone-500",
    Fantasma: "bg-indigo-700",
    Dragón: "bg-indigo-600",
    Siniestro: "bg-gray-700",
    Acero: "bg-slate-400",
    Hada: "bg-pink-400",
  };

  return (
    <PageTransition>
      <div className="mt-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-wide">Detalles del Pokémon</h2>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <article className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl mb-10">
              <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 relative shadow">
                <img
                  src={poke.image}
                  alt={poke.name}
                  className="w-72 h-72 object-contain relative z-10 transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="px-8 pt-6">
                <div className="space-y-5">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold capitalize text-gray-900 dark:text-white">
                      {poke.name} <span className="text-sm text-gray-500 dark:text-gray-400">#{poke.id}</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {poke.types?.map((type, idx) => (
                      <span
                        key={type + "-" + idx}
                        className={`text-md px-3 py-1 rounded-full capitalize text-white shadow-sm ${typeInfo[type] || "bg-gray-500"
                          }`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-1 text-md text-gray-700 dark:text-gray-300 text-center">
                    <p><strong className="me-1">Habilidades:</strong>{poke.abilities?.join(", ") || "—"}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-1 text-md text-gray-700 dark:text-gray-300 text-center">
                    <div>
                      <p><strong className="me-1">Altura:</strong>{poke.height} dm</p>
                      <p><strong className="me-1">Peso:</strong>{poke.weight} hg</p>
                      <p><strong className="me-1">Base XP:</strong>{poke.base_experience}</p>
                    </div>
                    <div>
                      <p><strong className="me-1">Salud:</strong>{poke.hp}</p>
                      <p><strong className="me-1">Ataque:</strong>{poke.attack}</p>
                      <p><strong className="me-1">Defensa:</strong>{poke.defense}</p>
                    </div>
                  </div>
                </div>

                <div className="-mx-8 mt-6">
                  <hr className="border-t border-gray-200 dark:border-gray-700" />
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 -mx-8 px-8 py-4 rounded-b-lg flex justify-end gap-2">
                  <Link
                    to="/pokemon/list"
                    className="text-white bg-gray-600 hover:bg-gray-700 rounded-xl shadow-xl px-5 py-2 dark:focus:ring-gray-300 transition"
                  >
                    Volver
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default PokemonDetail;
