import React from "react";
import { render } from "react-dom";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>★じゃけぇTODO★</h1>
        <InputForm addTodo={this.addTodo} />
        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }

  //TODOを追加するボタン押下時にstateを変更するFunc
  addTodo = title => {
    const { todos, nextId } = this.state;
    const upId = nextId + 1;

    this.setState({
      todos: [...todos, { id: upId, title: title }],
      nextId: upId
    });
  };

  //削除ボタン押下時にstateを変更するFunc
  deleteTodo = id => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(todos => {
        return todos.id !== id;
      })
    });
  };
}
