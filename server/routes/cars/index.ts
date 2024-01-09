import prisma from "../../../prisma/prismaClient";

// separating api from db layer
export default async function getCars() {
  const res = await prisma.car.findMany();
  return res;
}
