import "./App.css";
import { Route, Routes } from "react-router-dom";
import { PokemonList } from "./pages/PokemonList";
import { PokemonDetails } from "./components/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
      <Route path="*" element={"Cette page n'existe pas"} />
    </Routes>
  );
}

export default App;
