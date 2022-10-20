import axios from "axios";

export const getAPIData = async () => {
  return await axios.get(`${process.env.REACT_APP_URL}sale_funnels`);
}

export const getAPIStagedData = async (name) => {
  return await axios.get(`${process.env.REACT_APP_URL}sale_funnels?stage=${name}`);
}

export const deleteAPIData = async (id) => {
  return await axios.delete(`${process.env.REACT_APP_URL}people/${id}`);
}

export const updateAPIData = async (id,inputs) => {
  return await axios.put(`${process.env.REACT_APP_URL}people/${id}`,{first_name: inputs.first_name , last_name: inputs.last_name});
}

export const addToAPIData = async (inputs) => {
  return await axios.post(`${process.env.REACT_APP_URL}people`,{first_name: inputs.first_name , last_name: inputs.last_name, email: inputs.email, phone: inputs.phone_num});
}
