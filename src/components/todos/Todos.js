import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.todos.map((todo, index) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            changeTodoDone={props.changeTodoDone}
            deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}
          />
        );
      })}
      {props.todos.length <= 0 ? (
        <div className="empty-task">
          <h1 >plese Add some task to see it here </h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Todos;
