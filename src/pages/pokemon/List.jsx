import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import ImageCard from "../../components/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { allPokemon } from "../../store/actions/pokemon.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaginationComponent from "../../components/Pagination";

const PokemonList = () => {
  const dispatch = useDispatch();
  const [openToast, setOpenToast] = useState(false);
  const { data, loading } = useSelector((state) => state.pokemonReducer);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const handlePageChange = (newOffset) => {
    setOffset(newOffset);
  };

  useEffect(() => {
    dispatch(allPokemon({ limit, offset }));
  }, [dispatch, offset]);

  return (
    <>
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      )}
      {!loading && (
        <>
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", m: 2 }}>
            {data?.data?.map((item) => {
              return (
                <Box key={item.id}>
                  {openToast && <ToastContainer />}
                  <ImageCard id={item.id} image={`${item.imageUrl}`} title={`${item.name}`} heightDesc={`Tinggi: ${item.height}`} weightDesc={`Berat: ${item.weight}`} setOpenToast={setOpenToast} />
                </Box>
              );
            })}
          </Box>
          <PaginationComponent limit={limit} offset={offset} totalCount={data.count} onPageChange={handlePageChange} />
        </>
      )}
    </>
  );
};

export default PokemonList;
