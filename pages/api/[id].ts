import type { NextApiRequest, NextApiResponse } from "next";
import getCarDetails from "../../server/routes/cars/[id]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handleGetCarDetails(req, res);
      break;
    case "PUT":
      await hanldeEditCar(req, res);
      break;
    // Add cases for other HTTP methods (POST, PUT, DELETE) as needed
    default:
      res.setHeader("Allow", ["GET", "PUT"]); // Update this if you add other methods
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handleGetCarDetails(req: NextApiRequest, res: NextApiResponse) {
  try {
    const car = await getCarDetails();
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    res.status(500).json({ message: "Failed to fetch cars" });
  }
}

async function hanldeEditCar(req: NextApiRequest, res: NextApiResponse) {
  const carId = parseInt(req.query.id);

  const { make, model, year, color, price } = req.body;
  try {
    const updatedCar = await prisma.car.update({
      where: { id: carId },
      data: { make, model, year, color, price },
    });
    res.status(200).json(updatedCar);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ message: "Error updating car" });
  }
}
