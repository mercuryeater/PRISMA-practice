//handle requests
const { getAllData, createData, getDataById, deleteById } = require("./model");

const handleGetAllData = async (req, res) => {
  const persons = await getAllData();
  return res.json(persons);
};

const handleCreateData = async (req, res) => {
  try {
    const { name, phone_number } = req.body;

    if (name === "" || phone_number === 0) {
      return res
        .status(406)
        .json({ message: "error: number and name required" });
    }

    const persons = await getAllData();

    if (persons.find((person) => person.name === name)) {
      return res
        .status(409)
        .json({ message: "error: name already registered" });
    }

    const contactCreated = await createData(name, phone_number);
    return res.json(contactCreated);
  } catch (err) {
    console.error(err);
  }
};

const handleGetDataById = async (req, res) => {
  const id = req.params.id;
  const person = await getDataById(id);
  if (Object.keys(person).length === 0)
    return res.status(404).json({ message: "Person not found" });

  return res.json(person);
};

const handleGetInfo = async (req, res) => {
  try {
    const persons = await getAllData();
    const people = persons.length;
    const currentDate = new Date();
    return res.send(
      `Phonebook has info for ${people} people<br><br>Time: ${currentDate}`
    );
  } catch (err) {
    console.error(err);
  }
};

const handleDeleteById = async (req, res) => {
  const id = req.params.id;
  const personToDelete = await deleteById(id);
  console.log(`contact with id ${id} deleted`);
  return res.status(204).end();
};

module.exports = {
  handleGetAllData,
  handleCreateData,
  handleGetDataById,
  handleGetInfo,
  handleDeleteById,
};
