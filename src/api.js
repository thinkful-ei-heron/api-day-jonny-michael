const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mikirsch';
const ctypeHeader = new Headers({
    'Content-Type': 'application/json'
});
const getItems = function() {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  const newItem = JSON.stringify({name});
  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: ctypeHeader,
    body: newItem
  })
};

const updateItem = function(id, updateData) {
  const update = JSON.stringify(updateData);
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: ctypeHeader,
    body: update
  })
};

const deleteItem = function(id) {
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: ctypeHeader
  })
};
const listApiFetch = function(...args) {
    let error;
    return fetch(...args).then(res => {
        if (!res.ok) {
            error = {code: res}
        }
        return res.json();
    })
       .then(data => {
        if(error) {
            error.message = data.message;
            return Promise.reject(error);
        }
        return data;
    });
};
export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};