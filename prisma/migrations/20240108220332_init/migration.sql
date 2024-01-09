-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarDetail" (
    "id" SERIAL NOT NULL,
    "carId" INTEGER NOT NULL,
    "description" TEXT,
    "mileage" INTEGER,
    "fuelType" TEXT,
    "transmission" TEXT,
    "engine" TEXT,
    "horsepower" INTEGER,

    CONSTRAINT "CarDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CarDetail_carId_key" ON "CarDetail"("carId");

-- AddForeignKey
ALTER TABLE "CarDetail" ADD CONSTRAINT "CarDetail_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
