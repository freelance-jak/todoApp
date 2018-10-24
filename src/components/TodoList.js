import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, deleteTodo } = this.props;

    const todoList = todos.map(todo => {
      return (
        <li key={todo.id}>
          #{todo.id} {todo.title}
          {"　"}
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            削除
          </button>
        </li>
      );
    });

    return (
      <div>
        <ul>
          <b>{todoList}</b>
        </ul>
      </div>
    );
  }
}
