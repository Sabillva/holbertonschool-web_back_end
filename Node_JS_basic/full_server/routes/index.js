/*eslint-disable*/
import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

const express = require("express");

const router = express.Router();

router.get("/", AppController.getHomepage);

router.get("/students", (req, res) => {
  StudentsController.getAllStudents(req, res, process.argv[2]);
});
router.get("/students/:major", (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
});

export default router;
