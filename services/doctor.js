import EmployeeModel from "../models/employee.js";
import CheckupModel from "../models/checkup.js";
import PatientModel from "../models/patient.js";
import mongoose from "mongoose";
const EmployeeService = {
  getAllPatients: async (doctorID) => {
    try {
      const data = await EmployeeModel.aggregate([
        {
          $match: { '_id': mongoose.Types.ObjectId(doctorID) }
        },
        {
          $lookup: {
            from: 'checkups',
            localField: 'employeeID',
            foreignField: 'doctorEmployeeID',
            as: 'patients'
          }
        },
        {
          $lookup: {
            from: 'patients',
            localField: 'patients.mrn',
            foreignField: 'mrn',
            as: 'patients'
          }
        }
      ]);
      if (data) {
        return { message: "success", data };
      } else {
        return { message: "failed", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  addPatient: async (body) => {
    try {
      const employeeCount = await EmployeeModel.find({"employeeID": body.doctorEmployeeID}).count();
      const patientCount = await PatientModel.find({"mrn": body.mrn}).count();
      if (employeeCount === 0 || patientCount == 0){
        return { message: "error", data: `Employee with ID ${body.doctorEmployeeID} or patient with MRN ${body.mrn} was not found` };
      }
      const data = await CheckupModel.create(body);

      if (data) {
        return { message: "success", data };
      } else {
        return { message: "failed", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  removeById: async (id) => {
    try {
      const data = await EmployeeModel.findByIdAndDelete(id);

      if (data) {
        return { message: "success", data };
      } else {
        return { message: "failed", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAll: async () => {
    try {
      const data = await EmployeeModel.find();
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getByAge: async (ageVal) => {
    ageVal = parseInt(ageVal);
    try {
      const data = await EmployeeModel.aggregate([
        {
          $addFields:
            { age: { $dateDiff: { startDate: "$dob", endDate: "$$NOW", unit: "year" } } },
        },
        { $match: { age: { $lt: ageVal } } },
      ]);
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }

  },
  getById: async (id) => {
    try {
      const data = await EmployeeModel.findById(id);
      if (data) {
        return { message: "success", data };
      } else {
        return { message: "failed", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  updateByID: async (id, body) => {
    try {
      const data = await EmployeeModel.findByIdAndUpdate(id, body);
      if (data) {
        return { message: "success", data };
      } else {
        return { message: "failed", data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  add: async (body) => {
    try {
      const savedData = await EmployeeModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default EmployeeService;
