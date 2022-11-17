import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
    name: { type: String, required: true, maxlength: 50 },
    mrn: { type: Number, required: true, index: true, unique: true },
    dob: { type: Date, required: true },
    contact: { type: String , index: true, unique: true},
    address: { type: String }
});
export default mongoose.model("Patient", schema);
