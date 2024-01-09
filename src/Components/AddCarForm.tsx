import React, { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import { fetcher } from "../utils";
import useSWR from "swr";

export const AddCarForm = ({ onCarAdded }) => {
  const { cars, error, isLoading } = useSWR("/api/cars", fetcher);

  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });

      if (!response.ok) throw new Error("Error creating car");
      const car = await response.json();
      onCarAdded(car); // Callback to update the car list
      // Reset form
      setNewCar({ make: "", model: "", year: "", color: "", price: "" });
    } catch (error) {
      console.error("Failed to create car:", error);
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
            value={newCar.make}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Model"
            name="model"
            value={newCar.model}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Year"
            name="year"
            value={newCar.year}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Color"
            name="color"
            value={newCar.color}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Price"
            name="price"
            value={newCar.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add Car
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
