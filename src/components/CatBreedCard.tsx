import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"; 

import {Breed} from "../vite-env";

interface CatBreedCardProps {
  breed: Breed;
  onClick: () => void;
}

const CatBreedCard: React.FC<CatBreedCardProps> = ({ breed, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
          alt={breed.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {breed.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CatBreedCard;
