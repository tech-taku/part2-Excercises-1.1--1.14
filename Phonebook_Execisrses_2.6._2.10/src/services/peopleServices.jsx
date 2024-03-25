import axios from "axios";

const baseUrl = "http://localhost:3002/persons";

// Get all the persons in the db(GET)

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

// Create new persons

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

// Update the db
const update = (id, updatedObject) => {
  const request = axios.update(`${baseUrl}/${id}`, updatedObject);
  return request.then((response) => response.data);
};

//Delete an entry from the database

const deleteItem = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
}

export default { getAll, create, update, deleteItem};

 