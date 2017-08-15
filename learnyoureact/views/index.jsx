import React from 'react';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList data = {this.props.data} />
        <TodoForm />
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    let todo = this.props.data.map(obj => <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>)
    return (
      <div className="todoList">
          <table style={style.tableStyle}>
              <tbody>
                {todo}
              </tbody>
          </table>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleChange(e) {
    this.setState({checked: e.target.checked})
  }

  render() {
    return (
      <tr style={this.state.checked ? style.checkedToDo : style.notCheckedToDo}>
        <td style={style.tableContent}>
            <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
        </td>
        <td style={style.tableContent}>{this.props.title}</td>
        <td style={style.tableContent}>{this.props.children}</td>
      </tr>
    )
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
}

class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
}

let style = {
  checkedToDo: {
    textDecoration: "line-through"
  },
  notCheckedToDo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  },
  tableStyle: {
    border: "2px solid black"
  }
}
