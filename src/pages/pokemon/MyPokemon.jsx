import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import ImageCard from "../../components/ImageCard";

const MyPokemon = () => {
  const { data, loading } = useSelector((state) => state.pokemonReducer);

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
                <ImageCard id={item.id} image={`${item.imageUrl}`} title={`${item.name}`} description={`Height: ${item.height} - Weight: ${item.weight}`} />
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default MyPokemon;
