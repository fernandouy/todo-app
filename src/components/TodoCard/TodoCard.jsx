/* eslint-disable react/prop-types */
import "./TodoCard.css";
import TrashIcon from "../../icons/TrashIcon/TrashIcon";
import CheckIcon from "../../icons/CheckIcon/CheckIcon";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todos/todosSlice";

function TodoCard({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      <div className={todo.completed ? "checked" : ""}>{todo.text}</div>
      <div>
        <CheckIcon onClick={handleToggle} />
        <TrashIcon onClick={handleDelete} />
      </div>
    </li>
  );
}

export default TodoCard;
