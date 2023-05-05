//REPRESENTA UNA BASE DE DATOS

//CON LA LIBRERIA DE dbmock
//SIMULAMOS una base de datos
const table = require("@makeitrealcamp/db-mock");

const ogPersons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-123456",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-23-4567-89",
  },
  {
    id: "4",
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

const a = table.insert({
  id: "35",
  altId: "35",
  name: "Arto Hellas",
  number: "040-123456",
});
const b = table.insert({
  name: "Ada Lovelace",
  number: "39-44-123456",
});

function getAllData() {
  const persons = table.findAll();

  return persons;
}

function getDataById(id) {
  const person = table.findById(id);

  return person;
}

function createData(data) {
  const addPerson = table.insert(data);

  return addPerson;
}

function UpdateData(id, data) {
  const personToUpdate = { id, ...data };
  const updatedPerson = table.update(personToUpdate);
  return updatedPerson;
}

function deleteData(id) {
  const personToDelete = table.remove(id);

  return personToDelete;
}

module.exports = {
  getAllData,
  getDataById,
  createData,
  UpdateData,
  deleteData,
};
