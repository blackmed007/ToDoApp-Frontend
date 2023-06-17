import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utilites/HanldeApi";



function App() {
  // State variables
  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  // Fetch all ToDo items on component mount
  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  // Function to enable update mode for a specific To-Do item
  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
       
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo Task ..."
            value={text}
            onChange={(e) => setText(e.target.value)}


          />

          <div
            className="add"
            onClick={isUpdating ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>{isUpdating ? "update" : "Add"}

          </div>

        </div>
        <div className="list">
          {toDo.map((item) => <ToDo key={item._id} text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />)

          }

        </div>


      </div>

      <h3>Done by : Abdelhamid</h3>
    </div >
  );
}

export default App;
