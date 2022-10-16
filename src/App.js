import "./App.css";
import ToDoList from "./views/ToDoList";
import Header from "./components/Header";
function App() {
  return (
      <div className="App">
          <Header></Header>

        <ToDoList></ToDoList>
      </div>
  );
}

export default App;
