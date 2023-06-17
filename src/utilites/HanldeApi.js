import axios from 'axios'

// Base URL for the API
const baseUrl = 'http://localhost:4000'


//Fetches all the ToDo items from the API.
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ----> ', data);
            setToDo(data)
        })
}
//Adds a new ToDo item to the API.
const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


//Updates an existing ToDo item in the API.
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

//Deletes a ToDo item from the API.
const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

export { getAllToDo, addToDo, updateToDo, deleteToDo }