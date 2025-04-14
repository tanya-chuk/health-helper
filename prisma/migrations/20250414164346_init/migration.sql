-- CreateTable
CREATE TABLE "Illness" (
    "id" TEXT NOT NULL,
    "case" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "notes" TEXT,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "Illness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedicationIntakePeriod" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3),
    "medicationId" TEXT NOT NULL,

    CONSTRAINT "MedicationIntakePeriod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medication" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cause" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operation" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "case" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FamilyHistoryRecord" (
    "id" TEXT NOT NULL,
    "person" TEXT NOT NULL,
    "case" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "FamilyHistoryRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergy" (
    "id" TEXT NOT NULL,
    "household" TEXT[],
    "drug" TEXT[],
    "patientId" TEXT NOT NULL,

    CONSTRAINT "Allergy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodPressure" (
    "id" TEXT NOT NULL,
    "systolic" INTEGER NOT NULL,
    "diastolic" INTEGER NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "BloodPressure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "birthDate" TIMESTAMP(3),
    "badHabits" JSONB,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BloodPressure_patientId_key" ON "BloodPressure"("patientId");

-- AddForeignKey
ALTER TABLE "Illness" ADD CONSTRAINT "Illness_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicationIntakePeriod" ADD CONSTRAINT "MedicationIntakePeriod_medicationId_fkey" FOREIGN KEY ("medicationId") REFERENCES "Medication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FamilyHistoryRecord" ADD CONSTRAINT "FamilyHistoryRecord_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Allergy" ADD CONSTRAINT "Allergy_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodPressure" ADD CONSTRAINT "BloodPressure_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
