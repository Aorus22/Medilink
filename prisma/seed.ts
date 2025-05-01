import { Doctor } from "@/db/prisma";

const { PrismaClient } = require('../src/db/prisma');
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

function hashed(password: string) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

async function main() {
  await prisma.appointment.deleteMany();
  await prisma.user.deleteMany();
  await prisma.doctor.deleteMany();

  const doctors = await prisma.doctor.createMany({
    data: [
      {
        name: "Dr. Amanda Wilson",
        specialist: "Cardiologist",
        about: "Experienced cardiologist.",
        education: "MD, Stanford Medical School",
        experience: "15 years",
        location: "Medic Room 1"
      },
      {
        name: "Dr. James Rodriguez",
        specialist: "Neurologist",
        about: "Expert in neurological disorders.",
        education: "MD, NYU School of Medicine",
        experience: "10 years",
        location: "Medic Room 1"
      },
      {
        about: "A cardiologist with over 10 years of experience in the field.",
        name: "Dr. John Doe",
        specialist: "Cardiology",
        experience: "10 years",
        education: "MD, Harvard Medical School",
        location: "Medic Room 1"
      },
      {
        about: "An orthopedic surgeon specializing in bone and joint cases.",
        name: "Dr. Jane Smith",
        specialist: "Orthopedic Surgery",
        experience: "8 years",
        education: "MD, Johns Hopkins School of Medicine",
        location: "Medic Room 1"
      },
      {
        about: "A general practitioner focusing on disease prevention and public health.",
        name: "Dr. Michael Brown",
        specialist: "General Medicine",
        experience: "5 years",
        education: "MD, University of California, San Francisco",
        location: "Medic Room 1"
      },
      {
        about: "An internist with experience in managing chronic diseases.",
        name: "Dr. Emily White",
        specialist: "Internal Medicine",
        experience: "12 years",
        education: "MD, Yale School of Medicine",
        location: "Medic Room 1"
      },
    ],
  });

  console.log("Doctors added.", doctors);

  const users = await prisma.user.createMany({
    data: [
      {
        username: "marko123",
        password: hashed("securepassword"),
        name: "Marko",
        birthdate: new Date("1990-01-01"),
        address: "Jakarta",
        profession: "Engineer",
        religion: "Islam",
        avatar: "",
      },
      {
        username: "muhammadalexander",
        password: hashed("passwordUser1"),
        name: "Muhammad Alexander",
        birthdate: new Date("2003-03-03"),
        address: "Surakarta",
        profession: "Engineer",
        religion: "Islam",
        avatar: "",
      },
      {
        username: "alyza28",
        password: hashed("passwordUser2"),
        name: "Alyza",
        birthdate: new Date("1998-08-28"),
        address: "Karanganyar",
        profession: "Designer",
        religion: "Islam",
        avatar: "",
      },
      {
        username: "rafael99",
        password: hashed("passwordUser3"),
        name: "Rafael",
        birthdate: new Date("1999-05-05"),
        address: "Solo",
        profession: "Developer",
        religion: "Christian",
        avatar: "",
      },
    ],
  });

  console.log("User added:", users);

  const doctor1 = await prisma.doctor.findFirst({ where: { name: "Dr. Amanda Wilson" } });
  const user = await prisma.user.findFirst({ where: { name: "Marko" } });

  await prisma.message.createMany({
    data: [
      {
        sender: "DOCTOR",
        content: "Hello Marko, how are you feeling today?",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:30:00"),
      },
      {
        sender: "USER",
        content: "Hi Dr. Wilson, I'm feeling better than yesterday. The chest pain has decreased.",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:32:00"),
      },
      {
        sender: "DOCTOR",
        content: "That's good to hear. Have you been taking the prescribed medications regularly?",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:35:00"),
      },
      {
        sender: "USER",
        content: "Yes, I've been taking them as prescribed. But I'm experiencing some dizziness as a side effect.",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:38:00"),
      },
      {
        sender: "DOCTOR",
        content: "Dizziness can be a side effect of the medication. When does it typically occur?",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:40:00"),
      },
      {
        sender: "USER",
        content: "Usually about an hour after taking the morning dose. It lasts for about 30 minutes.",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:42:00"),
      },
      {
        sender: "DOCTOR",
        content: "I see. Try taking it with food to reduce the dizziness. If it persists or worsens, we might need to adjust the dosage.",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:43:00"),
      },
      {
        sender: "DOCTOR",
        content: "Please let me know if you have any questions about your medication.",
        userId: user.id,
        doctorId: doctor1.id,
        time: new Date("2024-05-01T09:45:00"),
      }
    ]
  });

  const appointments = await prisma.appointment.createMany({
    data: [
      {
        date: new Date("2024-04-15T10:00:00"),
        purpose: "Initial cardiac consultation",
        information: "Patient reported occasional chest pain and shortness of breath.",
        status: "confirmed",
        idUser: user.id,
        idDokter: doctor1.id,
      },
      {
        date: new Date("2024-04-22T14:00:00"),
        purpose: "Follow-up appointment",
        information: "Review of initial medication and symptoms progress.",
        status: "confirmed",
        idUser: user.id,
        idDokter: doctor1.id,
      },
      {
        date: new Date("2025-05-01T11:00:00"),
        purpose: "Routine check-up",
        information: "Patient has been experiencing chest pain occasionally.",
        status: "pending",
        idUser: user.id,
        idDokter: doctor1.id,
      },
    ],
  });

  console.log("Appointments created:", appointments);

  const allDoctors = await prisma.doctor.findMany();

  const practiceHoursData = allDoctors.flatMap((doctor: Doctor) => [
    {
      startTime: "08:00",
      endTime: "12:00",
      dayOfWeek: "Senin",
      doctorId: doctor.id,
    },
    {
      startTime: "13:00",
      endTime: "17:00",
      dayOfWeek: "Rabu",
      doctorId: doctor.id,
    },
    {
      startTime: "09:00",
      endTime: "14:00",
      dayOfWeek: "Jumat",
      doctorId: doctor.id,
    },
  ]);

  await prisma.practiceHour.createMany({
    data: practiceHoursData,
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