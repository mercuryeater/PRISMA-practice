const express = require("express");
const app = express();
const port = 3001;

const {
    handleGetAllData,
    handleGetDataById,
    handleDeleteById,
    handleCreateData,
    handleUpdateData 
} = require("./controller");

app.use(express.json());

app.get("/api/persons", handleGetAllData); 

app.get("/info", (req, res) => {
  const people = persons.length;
  // const dateHeader = req.get('Date'); ESTO ES PARA HEADERS ENVIADOS DESDE EL SERVER?
  const currentDate = new Date()
  res.send(`Phonebook has info for ${people} people<br><br>Time: ${currentDate}`);
});

app.get("/api/persons/:id", handleGetDataById);

app.delete("/api/persons/:id", handleDeleteById);

app.post("/api/persons", handleCreateData);

app.patch("/api/persons/:id", handleUpdateData);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
