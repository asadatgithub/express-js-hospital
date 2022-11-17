import DoctorService from "../../services/doctor.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAllPatients: async (req, res) =>{
    const response = await DoctorService.getAllPatients(req.params.id);
    if (response.message === "success") {
      return httpResponse.SUCCESS(res, response.data);
    } else if (response.message === "error") {
      return httpResponse.NOT_FOUND(res, response.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, response.data);
    }
  },
  addPatient: async (req, res) =>{
    console.log("Query params >> ", req.body)
    const response = await DoctorService.addPatient(req.body);
    if (response.message === "success") {
      return httpResponse.SUCCESS(res, response.data);
    } else if (response.message === "error") {
      return httpResponse.NOT_FOUND(res, response.data);
    } else {
      return httpResponse.INTERNAL_SERVER(res, response.data);
    }
  },
  delete: async (req, res) => {
    const deleteResponse = await DoctorService.removeById(req.params.id);
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
      const data = await DoctorService.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getByAge: async (req, res) => {
    try {
      const data = await DoctorService.getByAge(req.params.age);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  updateByID: async (req, res) => {
    try {
      const data = await DoctorService.updateByID(req.params.id, req.body);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },


  getById: async (req, res) => {
    const addResponse = await DoctorService.getById(req.params.id);
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
    data.employeeID = Date.now().toString();
    console.log(data, ">>> data");
    const addResponse = await DoctorService.add(data);
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
