-- CreateTable
CREATE TABLE "VendingMachineSnapshot" (
    "id" SERIAL NOT NULL,
    "machineId" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" DOUBLE PRECISION NOT NULL,
    "fan" INTEGER NOT NULL,
    "light" INTEGER NOT NULL,
    "feeder" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VendingMachineSnapshot_pkey" PRIMARY KEY ("id")
);
