import DoctorService from "../../services/doctor.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
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
