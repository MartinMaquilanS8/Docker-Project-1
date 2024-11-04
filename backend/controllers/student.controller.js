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