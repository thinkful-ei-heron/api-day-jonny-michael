const BASE_URL = 'https://thinkful-list-api.herokuapp.com/mikirsch';
const ctypeHeader = new Headers({
  'Content-Type': 'application/json'
});

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
}

const createItem = function(name) {
  const newItem = JSON.stringify({name});
  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: ctypeHeader,
    body: newItem
  })
}

const updateItem = function(id, updateData) {
  const update = JSON.stringify(updateData);
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: ctypeHeader,
    body: update
  })
}

const deleteItem = function(id) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: ctypeHeader
  })
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};