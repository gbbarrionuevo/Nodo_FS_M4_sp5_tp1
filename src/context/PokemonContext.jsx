/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const pokeList = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(API);
      setPokemon(data);
    } catch (error) {
      console.error('Error al consultar la API', error);
    } finally {
      setLoading(false);
    }
  }

  const pokeCreate = async (pokeData) => {
    try {
      const { data } = await axios.post(API, pokeData);
      setPokemon(prev => [...prev, data]);
    } catch (error) {
      console.error('Error al crear el pokémon', error);
    }
  }

  const pokeEdit = async (id, pokeData) => {
    try {
      const { data } = await axios.put(`${API}/${id}`, pokeData);
      setPokemon(prev =>
        prev.map(p => (p.id === id ? data : p))
      );
    } catch (error) {
      console.error('Error al editar el pokémon', error);
    }
  }

  const pokeDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setPokemon(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error al eliminar el pokémon', error);
    }
  }

  useEffect(() => {
    pokeList();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon, loading, pokeCreate, pokeEdit, pokeDelete }}>
      {children}
    </PokemonContext.Provider>
  );
}
