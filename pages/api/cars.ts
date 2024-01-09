import type { NextApiRequest, NextApiResponse } from "next";
import getCars from "../../server/routes/cars";
import { Prisma } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    case "POST":
      await hanldeCreateCar(req, res);
      break;
    // Add cases for other HTTP methods (POST, PUT, DELETE) as needed
    default:
      res.setHeader("Allow", ["GET", "POST"]); // Update this if you add other methods
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cars = await getCars();
    res.status(200).json(cars);
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    res.status(500).json({ message: "Failed to fetch cars" });
  }
}

async function hanldeCreateCar(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newCar = await Prisma.car.create({
      data: req.body,
    });
    res.status(201).json(newCar);
  } catch (error) {
    console.error("Error creating a new car:", error);
    res.status(500).json({ message: "Error creating a new car" });
  }
}
