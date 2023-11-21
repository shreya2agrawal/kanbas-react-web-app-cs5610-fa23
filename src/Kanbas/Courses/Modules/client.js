import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
// const COURSES_URL = "http://localhost:4000/api/courses";
const COURSES_URL = `${API_BASE}/courses`;
export const findModulesForCourse = async (courseId) => {
  try {
    const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};
const MODULES_URL = `${API_BASE}/modules`;
export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};
export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module.id}`, module);
  return response.data;
};
