
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const jokescontroller = require("./controllers/jokesController");
const studentcontroller = require("./controllers/studentController");


app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.json("welcome to jokes api and students api,visit /jokes to get all jokes list and /students to get all students list");
});


app.get("/students", studentcontroller.getAllStudents);
app.get("/students/:id",studentcontroller.getStudentById);
app.post("/students",studentcontroller.addNewStudent);
    

app.get("/jokes",jokescontroller.getalljokes);
app.get("/random-joke",jokescontroller.getRandomJoke);
app.get("/jokes/:id",jokescontroller.getJokesById);
app.post("/jokes",jokescontroller.addJokes);
    

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});