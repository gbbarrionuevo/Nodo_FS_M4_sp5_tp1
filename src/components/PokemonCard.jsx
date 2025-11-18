import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { useSweetAlert } from "../context/SweetAlertContext";
import { useToast } from "../context/ToastContext";
import Button from "./Button";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const { pokeDelete } = usePokemon();
  const { alert } = useSweetAlert();
  const { notify } = useToast();

  const handleDelete = async () => {
    const result = await alert(`¿Estás seguro de eliminar a ${pokemon.name}?`, {
      icon: "warning",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await pokeDelete(pokemon.id);
      notify('Pokémon eliminado correctamente', 'success');
      navigate('/pokemon/list');
    } catch (error) {
      notify('Ocurrió un error al eliminar el pokémon', 'error');
      console.error('Ocurrió un error al eliminar el pokémon', error);
    }
  };

  return (
    <article className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex justify-center p-8 bg-gray-50 dark:bg-gray-900 relative shadow">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-36 h-36 object-contain relative z-10 transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-5 space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-bold capitalize text-gray-900 dark:text-white leading-tight">
            {pokemon.name} <span className="text-sm text-gray-500 dark:text-gray-400">#{pokemon.id}</span>
          </h3>
        </div>

        <div className="flex justify-center gap-3">
          <Button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-2 rounded-xl shadow-xl"
            onClick={() => navigate(`/pokemon/${pokemon.id}/detail`)}
            title="Ver detalles"
          >
            <i className="bi bi-search"></i> Detalles
          </Button>

          <Button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-2 rounded-xl shadow-xl"
            onClick={() => navigate(`/pokemon/${pokemon.id}/edit`)}
            title="Editar"
          >
            <i className="bi bi-pen"></i> Editar
          </Button>

          <Button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white px-2 py-2 rounded-xl shadow-xl"
            onClick={handleDelete}
            title="Eliminar"
          >
            <i className="bi bi-trash"></i> Eliminar
          </Button>
        </div>
      </div>
    </article>

  );
};

export default PokemonCard;
