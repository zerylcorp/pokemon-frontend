import React, { useEffect, useState } from "react";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { allPokemon } from "../../store/actions/pokemon.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PokemonList = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.pokemonReducer);
  const [openToast, setOpenToast] = useState(false);

  useEffect(() => {
    dispatch(allPokemon());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", m: 2 }}>
          {data?.data?.map((item) => {
            return (
              <Box key={item.id}>
                {openToast && <ToastContainer />}
                <ImageCard id={item.id} image={`${item.imageUrl}`} title={`${item.name}`} heightDesc={`Height: ${item.height}`} weightDesc={`Weight: ${item.weight}`} setOpenToast={setOpenToast} />
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default PokemonList;
