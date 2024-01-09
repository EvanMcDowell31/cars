"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export const CarDetails = () => {
  const params = useParams();
  const { id: carId } = params;
  console.log({ carId });

  const [car, setCar] = useState({
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
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCarDetails() {
      try {
        const response = await fetch(`/api/${carId}`);
        // if (!response.ok) {
        //   throw new Error("Car not found");
        // }
        const data = await response.json();
        console.log({ data });
        // setCar(data);
      } catch (error) {
        console.error("Failed to fetch car details:", error);
      } finally {
        setLoading(false);
      }
    }

    if (carId) {
      fetchCarDetails();
    }
  }, [carId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>Car not found.</div>;
  }

  return (
    <div>
      <h1>Car Details</h1>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
      <p>Price: ${car.price}</p>
      <h2>Additional Details</h2>
      {car.details ? (
        <div>
          <p>Description: {car.details.description || "N/A"}</p>
          <p>
            Mileage:{" "}
            {car.details.mileage ? `${car.details.mileage} miles` : "N/A"}
          </p>
          <p>Fuel Type: {car.details.fuelType || "N/A"}</p>
          <p>Transmission: {car.details.transmission || "N/A"}</p>
          <p>Engine: {car.details.engine || "N/A"}</p>
          <p>
            Horsepower:{" "}
            {car.details.horsepower ? `${car.details.horsepower} HP` : "N/A"}
          </p>
        </div>
      ) : (
        <p>No additional details available.</p>
      )}
    </div>
  );
};
