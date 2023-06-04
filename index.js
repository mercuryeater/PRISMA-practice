const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const PORT = process.env.PORT ?? 3001;

app.get('/api/persons', async (req, res) => {
  const persons = await prisma.persons.findMany();

  return res.json(persons);
})


app.post('/api/persons', async (req, res) => {
  try{
  const {name, phone_number} = req.body;
  const contactCreated = await prisma.persons.create({
      data: {
          name,
          phone_number,
      }
  });
  return res.json(contactCreated);
} catch(err){
  console.error(err);
}
})


app.get('/info', async (req, res) => {
  try{
  const persons = await prisma.persons.findMany();
  const people = persons.length;
  const currentDate = new Date()
  return res.send(`Phonebook has info for ${people} people<br><br>Time: ${currentDate}`);
  } catch(err){
    console.error(err);
  }
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// const {
//     handleGetAllData,
//     handleGetDataById,
//     handleDeleteById,
//     handleCreateData,
//     handleUpdateData 
// } = require("./controller");

// app.use(express.json());

// app.get("/api/persons", handleGetAllData); 

// app.get("/info", (req, res) => {
//   const people = persons.length;
//   // const dateHeader = req.get('Date'); ESTO ES PARA HEADERS ENVIADOS DESDE EL SERVER?
//   const currentDate = new Date()
//   res.send(`Phonebook has info for ${people} people<br><br>Time: ${currentDate}`);
// });

// app.get("/api/persons/:id", handleGetDataById);

// app.delete("/api/persons/:id", handleDeleteById);

// app.post("/api/persons", handleCreateData);

// app.patch("/api/persons/:id", handleUpdateData);

// app.listen(port, () => console.log(`Example app listening on port ${port}`));
