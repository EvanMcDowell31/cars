import prisma from "../../../prisma/prismaClient";

export default async function getCarDetails(id: string) {
  return await prisma.car.findUnique({
    where: { id },
    include: {
      details: true, // Include related CarDetail
    },
  });
}

export async function editCarDetails(id: string) {}
