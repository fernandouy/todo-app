import { useDispatch } from "react-redux"
import "./AddTodo.css"

const AddTodo = () => {
  const dispatch = useDispatch()

  return (
    <div className="add-todo">
      <input className="add-todo-input" type="text" placeholder="Add Todo" />
      <button className="add-todo-btn" onClick={() => dispatch({ type: "ADD_TODO" })}>Add</button>
    </div>
  )
}

export default AddTodo