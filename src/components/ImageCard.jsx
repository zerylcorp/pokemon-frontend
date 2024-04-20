import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Tooltip, IconButton } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from "react-redux";
import { catchPokemon } from "../store/actions/pokemon.action";

const ImageCard = ({ id, image, title, heightDesc, weightDesc, setOpenToast }) => {
  const dispatch = useDispatch();
  const handleCatchPokemon = (idx) => {
    console.log(idx);
    dispatch(catchPokemon(idx));
    setOpenToast(true);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" width="100" height="140" image={image} alt={title} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
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
          <Typography variant="body2" color="text.secondary">
            {heightDesc}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {weightDesc}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
