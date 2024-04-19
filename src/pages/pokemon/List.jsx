import React from "react";
import { Box } from "@mui/material";
import ImageCard from "../../components/ImageCard";

const PokemonList = () => {
  return (
    <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", m: 2 }}>
      {[1, 2, 3, 4, 5, 6, 7].map((i) => {
        return (
          <>
            <ImageCard key={i} image="https://via.placeholder.com/150" title={`Image ${i}`} description={`Description for Image ${i}`} />
          </>
        );
      })}
    </Box>
  );
};

export default PokemonList;
