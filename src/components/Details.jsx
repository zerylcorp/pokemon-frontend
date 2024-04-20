import React from "react";
import { Box, Paper, Typography, Tooltip, IconButton, Button } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch } from "react-redux";
import { catchPokemon } from "../store/actions/pokemon.action";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DetailsPokemon = ({ id, image, title, species, heightDesc, weightDesc, setOpenToast }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCatchPokemon = (idx) => {
    dispatch(catchPokemon(idx));
    setOpenToast(true);
  };
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, padding: 2, m: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        <img src={image} alt={title} style={{ maxWidth: "100%", height: "300px" }} />
        <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
          <Typography variant="h5" align="center">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Typography>
          <Tooltip title="Catch Pokemon">
            <IconButton onClick={() => handleCatchPokemon(id)}>
              <BookmarkIcon
                sx={{
                  cursor: "pointer",
                  color: "#000",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
          <Typography variant="body2" color="text.secondary" fontWeight={700}>
            {heightDesc}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={700}>
            {weightDesc}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={700}>
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </Typography>
        </Box>
        <Button onClick={handleBack} startIcon={<ArrowBack />} align="start"> 
          Back
        </Button>
      </Box>
    </Paper>
  );
};

export default DetailsPokemon;
