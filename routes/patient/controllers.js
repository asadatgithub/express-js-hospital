import PatientService from "../../services/patient.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  delete: async (req, res) => {
    const deleteResponse = await PatientService.removeById(req.params.id);
    if (deleteResponse.message === "success") {
      return httpResponse.SUCCESS(res, deleteResponse.data);
    } else if (deleteResponse.message === "error") {
      return httpResponse.NOT_FOUND(res, deleteResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, deleteResponse.data);
    }
  },
  getAll: async (req, res) => {
    try {
      const data = await PatientService.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getByAge: async (req, res) => {
    try {
      const data = await PatientService.getByAge(req.params.age);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  updateByID: async (req, res) => {
    try {
      const data = await PatientService.updateByID(req.params.id, req.body);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },


  getById: async (req, res) => {
    const addResponse = await PatientService.getById(req.params.id);
    if (addResponse.message === "success") {
      return httpResponse.SUCCESS(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.NOT_FOUND(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  add: async (req, res) => {
    var data = req.body
    data.mrn = Date.now().toString();
    console.log(data, ">>> data");
    const addResponse = await PatientService.add(data);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },
}

export default controller;
