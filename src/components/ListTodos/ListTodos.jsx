import { useSelector } from "react-redux";
import TodoCard from "../TodoCard/TodoCard";
import "./ListTodos.css";

function ListTodos() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className="list-todos">
      <h2>List Todos</h2>
      <ul className="list-todos-ul">
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default ListTodos;
