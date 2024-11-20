import Student from "../models/student.model.js";

export const createStudent = async (req, res) => {
    try {
        const { studentID, studentName, course, presentDate } = req.body;

        // Check if student already exists
        const existingStudent = await Student.findOne({ studentID });
        if (existingStudent) {
            return res.status(409).json({ 
                error: "Student already exists" 
            });
        }

        // Create new student
        const newStudent = new Student({
            studentID,
            studentName,
            course,
            presentDate
        });

        await newStudent.save();

        res.status(201).json({ 
            message: "Student created successfully",
            student: newStudent
        });

    } catch (error) {
        console.log("Error in createStudent controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

// In controllers/student.controller.js


export const updateStudent = async (req, res) => {
    try {
        const { studentID } = req.params;
        const updates = req.body;

        const student = await Student.findOneAndUpdate(
            { studentID: studentID },
            updates,
            { new: true }
        );

        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({
            message: "Student updated successfully",
            student: student
        });

    } catch (error) {
        console.error("Error in updateStudent controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// In backend/controllers/student.controller.js

export const deleteStudent = async (req, res) => {
    try {
        const { studentID } = req.params;

        const deletedStudent = await Student.findOneAndDelete({ studentID });

        if (!deletedStudent) {
            return res.status(404).json({ error: "Student not exists" }); // Update this message
        }

        res.status(200).json({ message: "Student deleted successfully" });

    } catch (error) {
        console.error("Error in deleteStudent controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};