import React, { Component } from "react";

export default class UpdateStudentComponent extends Component {
  state = {
    id: "",
    name: "",
    gender: "",
  };

  componentDidUpdate() {
    if (
      this.props.id !== this.state.id ||
      this.props.name !== this.state.name ||
      this.props.gender !== this.state.gender
    ) {
      this.setState({
        id: this.props.id,
        name: this.props.name,
        gender: this.props.gender,
      });
    }
  }

  render() {
    return (
      <div>
        <button
          className="btnUpdate"
          onClick={() => {
            if (
              this.state.name !== "" &&
              this.state.gender !== "" &&
              this.state.id !== ""
            )
              this.props.updateStudent({
                id: this.state.id,
                name: this.state.name,
                gender: this.state.gender,
              });
            this.props.handleClearState();
          }}
        >
          UPDATE
        </button>
      </div>
    );
  }
}
