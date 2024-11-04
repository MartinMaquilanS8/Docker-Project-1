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

// Controller function for updating a student by studentID
export const updateStudent = async (req, res) => {
    const { id } = req.params;  // This is the studentID from the URL
    const { studentName, course, presentDate } = req.body;

    try {
        // Find and update the student by studentID
        const updatedStudent = await Student.findOneAndUpdate(
            { studentID: id }, // Match by studentID
            { studentName, course, presentDate },
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ 
            message: "Student updated successfully", 
            student: updatedStudent 
        });
    } catch (error) {
        console.log("Error in updateStudent controller:", error.message);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
