//TRAE TODOS LOS DATOS

const {
  getAllData,
  getDataById,
  deleteData,
  createData,
  UpdateData,
} = require("./model");

function handleGetAllData(req, res) {
  const persons = getAllData();

  return res.json(persons);
}

function handleGetDataById(req, res) {
  const id = req.params.id;
  //   const person = persons.find((person) => person.id === id);
  const person = getDataById(id);
  if (Object.keys(person).length === 0)
    return res.status(404).json({ message: "Person not found" });
  return res.json(person);
}

function handleDeleteById(req, res) {
  const id = req.params.id;
  const person = deleteData(id);
  res.status(204).end();
}

function handleCreateData(req, res) {
  const data = {
    name: req.body.name,
    number: req.body.number,
  };
  const { name, number } = data;
  if (name === "" || number === "") {
    return res.status(406).json({ message: "error: number and name required" });
  }
  const persons = getAllData();
  if (persons.find((person) => person.name === data.name)) {
    return res.status(409).json({ message: "error: name already registered" });
  } else {
    let newContact = createData(data);
    res.status(201).json(newContact);
  }
}

function handleUpdateData(req, res) {
  const id = req.params.id;
  const data = req.body;
  const person = getDataById(id);
  if (Object.keys(person).length === 0) {
    return res.status(404).json({ message: "Person not found" });
  }

  const updatedPerson = UpdateData(id, data);
  
  return res.json(updatedPerson);
}

module.exports = {
  handleGetAllData,
  handleGetDataById,
  handleDeleteById,
  handleCreateData,
  handleUpdateData,
};
