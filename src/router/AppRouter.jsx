import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PokemonList from '../pages/PokemonList';
import PokemonCreate from '../pages/PokemonCreate';
import PokemonEdit from '../pages/PokemonEdit';
import PokemonDetail from '../pages/PokemonDetail';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemon/list' element={<PokemonList />} />
      <Route path='/pokemon/create' element={<PokemonCreate />} />
      <Route path='/pokemon/:id/edit' element={<PokemonEdit />} />
      <Route path='/pokemon/:id/detail' element={<PokemonDetail />} />

      <Route path='/not-found' element={<NotFound />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
