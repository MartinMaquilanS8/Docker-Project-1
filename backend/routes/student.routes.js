import express from "express";
import { createStudent, updateStudent } from "../controllers/student.controller.js";

const router = express.Router();

// POST request to create a student
router.post("/", createStudent);

// PUT request to update a student by studentID
router.put("/:id", (req, res, next) => {
    console.log("PUT /api/student/:id endpoint hit with ID:", req.params.id);
    next(); // Passes control to the updateStudent controller
}, updateStudent);


export default router;
