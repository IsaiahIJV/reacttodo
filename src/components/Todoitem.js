import React, { Component } from "react";
import Proptypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.markComplete} />{" "}
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

//PropTypes
Todoitem.propTypes = {
  todos: Proptypes.object.isRequired
};

export default Todoitem;
