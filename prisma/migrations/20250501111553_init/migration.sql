-- CreateTable
CREATE TABLE "PracticeHour" (
    "id" SERIAL NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "dayOfWeek" TEXT NOT NULL,
    "doctorId" INTEGER NOT NULL,

    CONSTRAINT "PracticeHour_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PracticeHour" ADD CONSTRAINT "PracticeHour_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
