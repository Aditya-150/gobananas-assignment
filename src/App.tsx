import "./App.css";
import { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import SearchNavBar from "./components/SearchNavBar";
import BreedModal from "./components/BreedModal";
import { Breed } from "./vite-env";

function App() {
const [breeds, setBreeds] = useState<Breed[]>([]);
const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);
const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
const [open, setOpen] = useState(false);

useEffect(() => {
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => {
      setBreeds(data);
      setFilteredBreeds(data);
    });
}, []);

const handleSearch = (value: string) => {
  const filtered = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredBreeds(filtered);
};

const handleOpen = (breed: Breed) => {
  setSelectedBreed(breed);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setSelectedBreed(null);
};

return (
  <>
    <SearchNavBar handleSearch={handleSearch} />
    <Grid container spacing={3} mt={10} px={5}>
      {filteredBreeds.map((breed) => (
        <Grid item xs={12} sm={6} md={4} key={breed.id}>
          <Card onClick={() => handleOpen(breed)}>
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
          </Card>
        </Grid>
      ))}
    </Grid>
    {selectedBreed && (
      <BreedModal breed={selectedBreed} open={open} onClose={handleClose} />
    )}
  </>
);
}

export default App;
