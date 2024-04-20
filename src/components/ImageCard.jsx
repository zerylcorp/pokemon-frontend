import React from "react";
import { Paper, Card, CardMedia, CardContent, Typography, Box, Tooltip, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch } from "react-redux";
import { catchPokemon } from "../store/actions/pokemon.action";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ id, image, title, heightDesc, weightDesc, setOpenToast }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCatchPokemon = (idx) => {
    dispatch(catchPokemon(idx));
    setOpenToast(true);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 250, height: 270, padding: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        <Card sx={{ maxWidth: 200, boxShadow: "none" }}>
          <CardMedia component="img" width="100" height="140" image={image} alt={title} />
          <CardContent>
            <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
              <Tooltip title="Detail Pokemon">
                <IconButton onClick={() => handleCatchPokemon(id)}>
                  <Typography
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/pokemon/${id}`);
                    }}
                    fontWeight={700}
                    gutterBottom
                    variant="h5"
                    component="div">
                    {title.charAt(0).toUpperCase() + title.slice(1)}
                  </Typography>
                </IconButton>
              </Tooltip>
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
            </Box>
            <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
              <Typography variant="body2" color="text.secondary" fontWeight={700}>
                {weightDesc}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Paper>
  );
};

export default ImageCard;
