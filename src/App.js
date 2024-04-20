import { Routes, Route, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import PokemonList from "./pages/pokemon/List";
import Details from "./pages/pokemon/Details";
import MyPokemon from "./pages/pokemon/MyPokemon";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route index path="/pokemon" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="/pokemon/my-list" element={<MyPokemon />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
      <Outlet />
    </Box>
  );
}

export default App;
