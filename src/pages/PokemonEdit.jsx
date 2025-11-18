import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { useSweetAlert } from "../context/SweetAlertContext";
import { useToast } from "../context/ToastContext";
import Input from "../components/Input";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const PokemonEdit = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [types, setTypes] = useState([]);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [base_experience, setBaseExperience] = useState('');
  const [abilities, setAbilities] = useState([]);
  const [hp, setHp] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');

  const { alert } = useSweetAlert();
  const { notify } = useToast();

  const navigate = useNavigate();
  const { id } = useParams();
  const { pokemon, pokeEdit } = usePokemon();

  useEffect(() => {
    const poke = pokemon.find((p) => p.id === id);

    if (poke) {
      setName(poke.name);
      setImage(poke.image);
      setTypes(poke.types);
      setHeight(poke.height);
      setWeight(poke.weight);
      setBaseExperience(poke.base_experience);
      setAbilities(poke.abilities);
      setHp(poke.hp);
      setAttack(poke.attack);
      setDefense(poke.defense);
    }
  }, [pokemon, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === '' ||
      image.trim() === '' ||
      (Array.isArray(types) ? types.length === 0 : String(types).trim() === '') ||
      height.trim() === '' ||
      weight.trim() === '' ||
      base_experience.trim() === '' ||
      (Array.isArray(abilities) ? abilities.length === 0 : String(abilities).trim() === '') ||
      hp.trim() === '' ||
      attack.trim() === '' ||
      defense.trim() === ''
    ) {
      notify('Ingresa correctamente los campos', 'error');
      return;
    }

    const result = await alert(`¿Estás seguro de editar a ${name}?`, {
      icon: "warning",
      confirmButtonText: "Editar",
      cancelButtonText: "Cancelar"
    });

    if (!result.isConfirmed) {
      return;
    }

    try {
      await pokeEdit(id, { name, image, types, height, weight, base_experience, abilities, hp, attack, defense });
      notify('Pokémon editado correctamente', 'success');
      navigate('/pokemon/list');
    } catch (error) {
      notify('Ocurrió un error al editar el pokémon', 'error');
      console.error('Ocurrió un error al editar el pokémon', error);
    }
  };

  return (
    <PageTransition>
      <div className="mt-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-wide">Editar Pokémon</h2>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">

              <form className="px-8 pt-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-1 font-medium">Nombre <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      minlength="3"
                      maxlength="90"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Imagen <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="text"
                      id="image"
                      name="image"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      minlength="3"
                      maxlength="90"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Tipos <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="text"
                      id="types"
                      name="types"
                      value={types}
                      onChange={(e) => setTypes(e.target.value.split(","))}
                      minlength="3"
                      maxlength="90"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Altura <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="number"
                      id="height"
                      name="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Peso <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="number"
                      id="weight"
                      name="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Base XP <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="number"
                      id="base_experience"
                      name="base_experience"
                      value={base_experience}
                      onChange={(e) => setBaseExperience(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Habilidades <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="text"
                      id="abilities"
                      name="abilities"
                      value={abilities}
                      onChange={(e) => setAbilities(e.target.value.split(","))}
                      minlength="3"
                      maxlength="90"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Salud <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="number"
                      id="hp"
                      name="hp"
                      value={hp}
                      onChange={(e) => setHp(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Ataque <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="number"
                      id="attack"
                      name="attack"
                      value={attack}
                      onChange={(e) => setAttack(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 font-medium">Defensa <span className="text-gray-400">(*)</span></label>
                    <Input
                      type="number"
                      id="defense"
                      name="defense"
                      value={defense}
                      onChange={(e) => setDefense(e.target.value)}
                      min="0"
                    />
                  </div>
                </div>

                <div className="-mx-8 mt-6">
                  <hr className="border-t border-gray-200 dark:border-gray-700" />
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 -mx-8 px-8 py-4 rounded-b-2xl flex justify-end gap-2">
                  <Link
                    to="/pokemon/list"
                    className="text-white bg-gray-600 hover:bg-gray-700 rounded-xl shadow-xl px-5 py-2 dark:focus:ring-gray-300 transition"
                  >
                    Volver
                  </Link>

                  <Button
                    type="submit"
                    className="text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xl px-4 py-2 dark:focus:ring-blue-200"
                  >
                    Confirmar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default PokemonEdit;
