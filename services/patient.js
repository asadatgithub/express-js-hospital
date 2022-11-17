import PatientModel from "../models/patient.js";

const PatientService = {
  removeById: async (id) => {
    try {
      const data = await PatientModel.findByIdAndDelete(id);

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
      const data = await PatientModel.find();
      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getByAge: async (ageVal) => {
    ageVal = parseInt(ageVal);
    try {
      const data = await PatientModel.aggregate([
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
      const data = await PatientModel.findById(id);
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
      const data = await PatientModel.findByIdAndUpdate(id, body);
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
      const savedData = await PatientModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default PatientService;
