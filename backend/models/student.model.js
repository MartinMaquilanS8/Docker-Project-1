import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    presentDate: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

export default Student;