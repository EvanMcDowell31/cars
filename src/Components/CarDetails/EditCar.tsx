import React, { useState, useEffect } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";

interface EditCarProps {
  id: string;
}

export const EditCar = ({ id }: EditCarProps) => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
  });

  useEffect(() => {
    // Fetch the current car details to populate the form
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => console.error("Error fetching car:", error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });

      if (!response.ok) throw new Error("Error updating car");
      // Handle success (e.g., show a message or redirect)
    } catch (error) {
      console.error("Failed to update car:", error);
      // Handle failure (e.g., show an error message)
    }
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Make"
            name="make"
            value={car.make}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Model"
            name="model"
            value={car.model}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Year"
            name="year"
            value={car.year}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Color"
            name="color"
            value={car.color}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={car.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Update Car
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
