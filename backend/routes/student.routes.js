import express from "express";
import { createStudent } from "../controllers/student.controller.js";

const router = express.Router();

// Define the POST route for creating a student
router.post("/", createStudent);

export default router;