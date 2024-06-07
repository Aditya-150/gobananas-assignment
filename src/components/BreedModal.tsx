import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import { Breed } from "../vite-env";

interface BreedModalProps {
  breed: Breed | null;
  open: boolean;
  onClose: () => void;
}

const BreedModal: React.FC<BreedModalProps> = ({ breed, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 300, sm: 400, md: 500 },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: "1rem",
        }}
      >
        {breed ? (
          <>
            <div
              className="breed-image"
              style={{
                width: "100%",
                height: "auto",
                overflow: "hidden",
                borderRadius: "1rem",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`}
                alt={breed.name}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "1rem",
                }}
              />
            </div>
            <Typography variant="h4" component="h2" gutterBottom>
              {breed.name}
            </Typography>
            <Typography sx={{ mt: 2 }}>{breed.description}</Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Weight:</strong> {breed.weight.metric} kg
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Life Span:</strong> {breed.life_span} Years
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Origin:</strong> {breed.origin}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <strong>Temperament:</strong> {breed.temperament}
            </Typography>
            <Button
              onClick={onClose}
              sx={{ mt: 2 }}
              variant="contained"
              color="secondary"
            >
              Close
            </Button>
          </>
        ) : null}
      </Box>
    </Modal>
  );
};

export default BreedModal;
