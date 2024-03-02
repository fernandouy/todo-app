import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import ListTodos from "./components/ListTodos/ListTodos";

function App() {
  return (
    <>
      <Header />
      <main>
        <AddTodo />
        <ListTodos />
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
