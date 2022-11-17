import mongoose from "mongoose";


const Checkup = mongoose.model(
    "Checkup",
    new mongoose.Schema({
        mrn: { type: String, required: true},
        doctorEmployeeID: { type: String, required: true},

    })
);

export default Checkup;