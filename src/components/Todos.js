import React, { Component } from "react";
import Todoitem from "./Todoitem";
import Proptypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => <Todoitem key={todo.id} todo={todo} />);
  }
}

//PropTypes
Todos.propTypes = {
  todos: Proptypes.array.isRequired
};

export default Todos;
