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
        about: "A cardiologist with over 10 years of experience in the field.",
        name: "Dr. John Doe",
        specialist: "Cardiology",
        experience: "10 years",
        education: "MD, Harvard Medical School"
      },
      {
        about: "An orthopedic surgeon specializing in bone and joint cases.",
        name: "Dr. Jane Smith",
        specialist: "Orthopedic Surgery",
        experience: "8 years",
        education: "MD, Johns Hopkins School of Medicine"
      },
      {
        about: "A general practitioner focusing on disease prevention and public health.",
        name: "Dr. Michael Brown",
        specialist: "General Medicine",
        experience: "5 years",
        education: "MD, University of California, San Francisco"
      },
      {
        about: "An internist with experience in managing chronic diseases.",
        name: "Dr. Emily White",
        specialist: "Internal Medicine",
        experience: "12 years",
        education: "MD, Yale School of Medicine"
      },
    ],
  });

  console.log("Doctors added.", doctors);

  const users = await prisma.user.createMany({
    data: [
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

  const doctor = await prisma.doctor.findFirst();

  // const appointment = await prisma.appointment.create({
  //   data: {
  //     date: new Date(),
  //     purpose: "Routine check-up",
  //     information: "Patient has been experiencing chest pain occasionally.",
  //     location: "Clinic A, Surakarta",
  //     status: "pending",
  //     idUser: user.id,
  //     idDokter: doctor.id,
  //   },
  // });

  // console.log("Appointment created:", appointment);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
