-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "alamat" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "agama" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "about" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "specialist" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "experience" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "keperluan" TEXT NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idDokter" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistoricalData" (
    "id" SERIAL NOT NULL,
    "parameter" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "tgl" TIMESTAMP(3) NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "HistoricalData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pharmacy" (
    "id" SERIAL NOT NULL,
    "namaObat" TEXT NOT NULL,
    "keteranganPenggunaan" TEXT NOT NULL,
    "dosis" TEXT NOT NULL,
    "tanggalMulaiObat" TIMESTAMP(3) NOT NULL,
    "tanggalSelesaiObat" TIMESTAMP(3) NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "Pharmacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MriTest" (
    "id" SERIAL NOT NULL,
    "urlPhoto" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "MriTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UrineTest" (
    "id" SERIAL NOT NULL,
    "warna" TEXT NOT NULL,
    "bau" TEXT NOT NULL,
    "ph" DOUBLE PRECISION NOT NULL,
    "glukosa" TEXT NOT NULL,
    "protein" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "UrineTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodTest" (
    "id" SERIAL NOT NULL,
    "hemoglobin" DOUBLE PRECISION NOT NULL,
    "leukosit" DOUBLE PRECISION NOT NULL,
    "trombosit" DOUBLE PRECISION NOT NULL,
    "gulaDarah" DOUBLE PRECISION NOT NULL,
    "kolesterol" DOUBLE PRECISION NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "idUser" INTEGER NOT NULL,

    CONSTRAINT "BloodTest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_idDokter_fkey" FOREIGN KEY ("idDokter") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistoricalData" ADD CONSTRAINT "HistoricalData_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pharmacy" ADD CONSTRAINT "Pharmacy_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MriTest" ADD CONSTRAINT "MriTest_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UrineTest" ADD CONSTRAINT "UrineTest_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodTest" ADD CONSTRAINT "BloodTest_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
