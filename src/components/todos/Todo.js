import React from "react";
import FeatherIcon from "feather-icons-react";
function Todo(props) {
  return (
    <div className={props.todo.done ? "todos-todo done" : "todos-todo"}>
      <div
        className="todos-todo_icon"
        onClick={() => props.changeTodoDone(props.todo.id)}
      >
        <FeatherIcon icon={props.todo.done ? "check-circle" : "circle"} />
      </div>
      <div className="todos-todo_text">{props.todo.title} </div>
      <div className="todo-action">
        <div
          className="todo-action-edit"
          onClick={() => props.editTodo(props.todo)}
        >
          <FeatherIcon icon="edit" />
        </div>
        <div
          className="todo-action-delete"
          onClick={() => props.deleteTodo(props.todo.id)}
        >
          <FeatherIcon icon="trash-2" />
        </div>
      </div>
    </div>
  );
}

export default Todo;
