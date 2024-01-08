import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const cars = await prisma.car.findMany();
    res.status(200).json(cars);
  }
  // handle other methods or return 405 for methods not allowed
}
