import React, { useState } from "react";
import TodoForm from "../components/todos/TodoForm";
import Todos from "../components/todos/Todos";
const ToDoList = () => {
  // const initialState = [
  //   { id: 1, title: "task1", done: false },
  //   { id: 2, title: "task2", done: false },
  //   { id: 3, title: "task3", done: false },
  //   { id: 4, title: "task4", done: false },
  //   { id: 5, title: "task5", done: false },
  // ];
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, settodos] = useState(initialState);
  const [activeTodo, setactiveTodo] = useState({});
  //mode =>Add | not-done | edit
  const [mode, setmode] = useState("Add");
  const setToLocalStorege = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const changeTodoDone = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });
    setToLocalStorege(newTodos);
    settodos(newTodos);
  };
  const addTodo = (title) => {
    if (mode !== "edit") {
      const newTodo = {
        id: Math.random(),
        title: title,
        done: false,
      };
      const newTodos = [...todos, newTodo];
      setToLocalStorege(newTodos)
      settodos(newTodos);
    } else {
      const curTodo = [...todos];
      const newTodos = curTodo.map((todo) => {
        if (todo.id === activeTodo.id) {
          todo.title = title;
          return todo;
        }
        return todo;
      });
      setToLocalStorege(newTodos)
      settodos(newTodos);
      setactiveTodo({});
      setmode("Add");
    }
  };
  const deleteTodo = (id) => {
    const curTodos = [...todos];
    const newTodos = curTodos.filter((todo) => todo.id !== id);
    setToLocalStorege(newTodos)
    settodos(newTodos);
  };
  const showUncompleteTask = () => {
    if (mode === "not-done") {
      setmode("Add");
    } else {
      setmode("not-done");
    }
  };
  let curentTodo = [...todos];
  if (mode === "not-done") {
    curentTodo = curentTodo.filter((todo) => todo.done === false);
  }
  const editTodo = (todo) => {
    setmode("edit");
    setactiveTodo(todo);
  };
  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodoForm
            addTodo={addTodo}
            showUncompleteTask={showUncompleteTask}
            todos={mode !== "edit" ? curentTodo : [activeTodo]}
            mode={mode}
          />
          <Todos
            todos={mode !== "edit" ? curentTodo : [activeTodo]}
            changeTodoDone={changeTodoDone}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </main>
  );
};

export default ToDoList;
