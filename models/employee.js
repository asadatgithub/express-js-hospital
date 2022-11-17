import mongoose from "mongoose";


const Employee = mongoose.model(
    "Employee",
    new mongoose.Schema({
        name: { type: String, required: true, maxlength: 50 },
        employeeID: { type: String, required: true, index: true, unique: true },
        dob: { type: Date, required: true },
        contact: { type: String, index: true, unique: true },
        address: { type: String },
        role: {type: String, required: true}
    })
);

export default Employee;