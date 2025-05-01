/*
  Warnings:

  - You are about to drop the column `keperluan` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `agama` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `alamat` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nama` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pekerjaan` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tanggalLahir` on the `User` table. All the data in the column will be lost.
  - Added the required column `date` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `information` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purpose` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('pending', 'confirmed', 'rejected');

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "keperluan",
DROP COLUMN "tanggal",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "information" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "purpose" TEXT NOT NULL,
ADD COLUMN     "status" "AppointmentStatus" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "agama",
DROP COLUMN "alamat",
DROP COLUMN "nama",
DROP COLUMN "pekerjaan",
DROP COLUMN "tanggalLahir",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL,
ADD COLUMN     "religion" TEXT NOT NULL;
