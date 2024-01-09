"use server";

// Server Action
export async function createCar(carData) {
  const response = await fetch("/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create car");
  }

  return response.json();
}

export default createCar;
