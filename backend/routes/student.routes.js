import express from "express";
import { updateStudent } from "../controllers/student.controller.js";

const router = express.Router();

router.put('/students/:studentID', updateStudent);

// Test route
router.get('/students/test', (req, res) => {
    res.json({ message: "Test route working" });
});

export default router;
