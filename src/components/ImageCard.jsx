import React from "react";
import { Paper, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ id, image, title, heightDesc, weightDesc, setOpenToast }) => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ maxWidth: 250, height: 270, padding: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
        <Card sx={{ maxWidth: 200, boxShadow: "none" }}>
          <CardMedia component="img" width="100" height="140" image={image} alt={title} />
          <CardContent>
            <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
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
