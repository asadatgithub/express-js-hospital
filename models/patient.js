import mongoose from "mongoose";


const Patient = mongoose.model(
    "Patient",
    new mongoose.Schema({
        name: { type: String, required: true, maxlength: 50 },
        mrn: { type: String, required: true, index: true, unique: true },
        dob: { type: Date, required: true },
        contact: { type: String, index: true, unique: true },
        address: { type: String }
    })
);

export default Patient;

// const Schema = mongoose.Schema;
// const schema = Schema({
//     name: { type: String, required: true, maxlength: 50 },
//     mrn: { type: Number, required: true, index: true, unique: true },
//     dob: { type: Date, required: true },
//     contact: { type: String, index: true, unique: true },
//     address: { type: String }
// });
// export default mongoose.model("Patient", schema);
