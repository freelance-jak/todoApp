import React from "react";

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.clickSubmit}>
          <input value={this.state.inputTitle} onChange={this.inputChange} />
          {"　"}
          <input type="submit" value="TODOを追加する" />
        </form>
      </div>
    );
  }

  //テキストボックスの入力値を常にsateに持つためのFunc
  inputChange = event => {
    const inputTitle = event.target.value;
    this.setState({ inputTitle: inputTitle });
  };

  //追加押下時にpropsで渡されたFuncを実行する
  clickSubmit = event => {
    this.props.addTodo(this.state.inputTitle);
    this.setState({ inputTitle: "" });

    //画面遷移しないように記述
    event.preventDefault();
  };
}
