import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const car = await prisma.car.findUnique({
      where: { id: parseInt(id as string) },
      include: {
        details: true, // Include related CarDetail
      },
    });

    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  }

  // Other methods (like PUT) can be handled here
}
