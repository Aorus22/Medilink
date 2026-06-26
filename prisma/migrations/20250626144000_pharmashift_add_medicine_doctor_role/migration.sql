-- Create Medicine master data table
CREATE TABLE "Medicine" (
    "id" SERIAL NOT NULL,
    "namaObat" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Medicine_pkey" PRIMARY KEY ("id")
);

-- Add userId column to Doctor (unique, links to User for login)
ALTER TABLE "Doctor" ADD COLUMN "userId" INTEGER;
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_userId_key" UNIQUE ("userId");
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Add new columns to Pharmacy (medicineId, doctorId, harga)
ALTER TABLE "Pharmacy" ADD COLUMN "medicineId" INTEGER;
ALTER TABLE "Pharmacy" ADD COLUMN "doctorId" INTEGER;
ALTER TABLE "Pharmacy" ADD COLUMN "harga" DOUBLE PRECISION;

ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "Medicine"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
