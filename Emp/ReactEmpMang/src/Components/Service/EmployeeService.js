import axios from "axios";

const EMP_API_URL = "http://localhost:9999/employee";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMP_API_URL, employee);
  }

  getEmployees() {
    return axios.get(EMP_API_URL);
  }

  deleteEmployee(id) {
    return axios.delete(EMP_API_URL + "/" + id);
  }

  getEmployeeById(id){
    return axios.get(EMP_API_URL + "/" + id);
  }

  updateEmployee(id, employee){
    return  axios.put(EMP_API_URL + "/" + id,employee);
  }
}

export default new EmployeeService();
