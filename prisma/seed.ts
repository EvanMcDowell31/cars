const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const car1 = await prisma.car.create({
    data: {
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      color: "Blue",
      price: 20000,
      details: {
        create: {
          description: "A reliable family car",
          mileage: 30000,
          fuelType: "Petrol",
          transmission: "Automatic",
          engine: "1.8L",
          horsepower: 132,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
