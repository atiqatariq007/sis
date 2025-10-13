
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");


router.get("/students", studentController.getAllStudents);
router.get("/students/:id", studentController.getStudentById);
router.post("/students", studentController.addNewStudent);
router.put("/students/:id",studentController.UpdateStudent);
router.delete("/students/:id",studentController.deleteStudent);

module.exports = router;
