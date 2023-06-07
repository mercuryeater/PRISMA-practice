const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllData = async () => {
  const persons = await prisma.persons.findMany();
  return persons;
};

const createData = async (name, phone_number) => {
  const contactCreated = await prisma.persons.create({
    data: {
      name,
      phone_number,
    },
  });
  return contactCreated;
};

const getDataById = async (id) => {
  const person = await prisma.persons.findMany({
    where: {
      id: id,
    },
  });
  return person;
};

const deleteById = async (id) => {
  const personToDelete = await prisma.persons.delete({
    where: {
      id: id,
    },
  });
  return personToDelete;
};

module.exports = {
  getAllData,
  createData,
  getDataById,
  deleteById,
};
