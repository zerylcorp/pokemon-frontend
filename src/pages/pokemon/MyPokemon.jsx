import React, { useEffect } from "react";
import { Box, Card, CircularProgress, CardMedia, CardContent, Typography, Tooltip, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { getAllMyPokemon } from "../../store/actions/my-pokemon.action";

const MyPokemon = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.myPokemonReducer);
  const handleReleasePokemon = (idx) => {
    console.log("klik release");
  };
  const handleRenamePokemon = (idx) => {
    console.log("klik rename");
  };

  useEffect(() => {
    dispatch(getAllMyPokemon());
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
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia component="img" width="100" height="140" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Pokemon" />
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
                      <Typography gutterBottom variant="h5" component="div">
                        {item.pokemonName.charAt(0).toUpperCase() + item.pokemonName.slice(1)}
                      </Typography>

                      <Tooltip title="Rename">
                        <IconButton onClick={() => handleRenamePokemon()}>
                          <DriveFileRenameOutlineIcon
                            sx={{
                              cursor: "pointer",
                              color: "#000",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Release">
                        <IconButton onClick={() => handleReleasePokemon()}>
                          <BookmarkRemoveIcon
                            sx={{
                              cursor: "pointer",
                              color: "#000",
                            }}
                          />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default MyPokemon;
