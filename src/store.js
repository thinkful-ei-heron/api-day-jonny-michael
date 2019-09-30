const items = [];
let hideCheckeditems = false;
let error = {flag: false};

const findById = function (id) {
    return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
    this.items.push(item);
};

const findAndDelete = function (id) {
    this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
};
const findAndUpdate = function (id, newData) {
    const item = this.items.find(cur => cur.id === id);
    Object.assign(item, newData);
};
const setError = function (err) {
    error.flag = true;
    Object.assign(error, err);
};
export default {
    items,
    error,
    hideCheckeditems,
    findById,
    addItem,
    findAndUpdate,
    findAndDelete,
    setError,
    toggleCheckedFilter
};