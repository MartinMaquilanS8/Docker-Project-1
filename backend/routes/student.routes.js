import express from "express";
import { createStudent, updateStudent } from "../controllers/student.controller.js";

const router = express.Router();

// POST request to create a student
router.post("/", createStudent);

// PUT request to update a student by studentID
router.put("/:id", updateStudent);

router.get("/:id", (req, res) => {
    res.json({ Message: "GET request successful" });
  });
  

export default router;
