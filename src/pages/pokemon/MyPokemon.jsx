import React, { useEffect, useState } from "react";
import { Box, Card, Paper, CircularProgress, CardMedia, CardContent, Typography, Tooltip, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { getAllMyPokemon, releasePokemon, renamePokemon } from "../../store/actions/my-pokemon.action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MyPokemon = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.myPokemonReducer);
  const [openToast, setOpenToast] = useState(false);
  const handleReleasePokemon = (idx) => {
    dispatch(releasePokemon(idx));
    setOpenToast(true);
  };
  const handleRenamePokemon = (idx) => {
    dispatch(renamePokemon(idx));
    setOpenToast(true);
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
                {openToast && <ToastContainer />}
                <Paper elevation={3} sx={{ maxWidth: 250, height: 250, padding: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                    <Card sx={{ maxWidth: 200, boxShadow: "none" }}>
                      <CardMedia component="img" width="100" height="140" image={item.imageUrl} alt={item.name} />
                      <CardContent>
                        <Box display="flex" justifyContent="center" gap={1} alignItems="center">
                          <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
                            {item.pokemonName.charAt(0).toUpperCase() + item.pokemonName.slice(1)}
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
                          <Tooltip title="Rename">
                            <IconButton onClick={() => handleRenamePokemon(item.pokemonId)}>
                              <DriveFileRenameOutlineIcon
                                sx={{
                                  cursor: "pointer",
                                  color: "#000",
                                }}
                              />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Release">
                            <IconButton onClick={() => handleReleasePokemon(item.pokemonId)}>
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
                </Paper>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default MyPokemon;
