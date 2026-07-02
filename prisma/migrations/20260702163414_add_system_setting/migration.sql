-- CreateTable
CREATE TABLE "SystemSetting" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "vmApiUrl" TEXT NOT NULL DEFAULT '',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SystemSetting_pkey" PRIMARY KEY ("id")
);
