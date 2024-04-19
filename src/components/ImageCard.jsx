import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

const ImageCard = ({ image, title, description }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Box display="flex" justifyContent="space-between" gap={3} alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="body2">
            <GradeIcon
              sx={{
                cursor: "pointer",
                color: "#000",
              }}
            />
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
