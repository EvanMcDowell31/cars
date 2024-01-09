"use client";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import useSWR from "swr";
import { Car } from "@prisma/client";
import { useState, useEffect } from "react";
import { AddCarModal } from "../AddCarModal";
import { useRouter } from "next/navigation";
import { fetcher } from "../../utils";
import handler from "../../../app/api/cars";

export const CarList = () => {
  const [cars, setCars] = useState<Car[]>([
    {
      id: "123",
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      color: "Blue",
      price: 20000,
      details: {
        description: "A reliable family car",
        mileage: 30000,
        fuelType: "Petrol",
        transmission: "Automatic",
        engine: "1.8L",
        horsepower: 132,
      },
    },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const { cars: _CARS, error, isLoading } = useSWR("/api/cars", fetcher);

  useEffect(() => {
    async function fetchCars() {
      const response = await fetch("/api/cars");
      const data = await response.json();

      setCars(data);
    }

    fetchCars();
  }, []);

  // or router.refresh to refresh data
  // this will not cause react to rerender
  const handleCarAdded = (newCar) => {
    setCars([...cars, newCar]);
    // router.refresh();
  };

  return (
    <div>
      <Typography variant="h4" component="h1">
        Car Listings
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalOpen(true)}
      >
        Add New Car
      </Button>
      <AddCarModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCarAdded={handleCarAdded}
      />

      <List>
        {cars?.map((car) => (
          <ListItem
            key={car.id}
            button
            onClick={() => router.push(`/${car.id}`)}
          >
            <ListItemText
              primary={`${car.make} ${car.model}`}
              secondary={`Year: ${car.year}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
