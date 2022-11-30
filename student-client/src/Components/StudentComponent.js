import React, { Component } from "react";
import UpdateStudentComponent from "./UpdateStudentComponent";
import "./StudentComponent.css";

export default class StudentComponent extends Component {
  state = {
    id: "",
    name: "",
    gender: "",
  };

  handleClearState = () => {
    this.setState({
      id: "",
      name: "",
      gender: "",
    });
  };

  handleCheckGenderMale = () => {
    document.getElementById("male").checked = true;
  };

  handleCheckGenderFemale = () => {
    document.getElementById("female").checked = true;
  };

  handleCheckGenderLgbt = () => {
    document.getElementById("lgbt").checked = true;
  };

  handleLoading = () => {
    let process = 0;
    let newInterval = setInterval(frame, 50.5);
    function frame() {
      if (process >= 99) {
        clearInterval(newInterval);
      } else {
        process++;
        document.getElementById("process").innerHTML = process * 1 + "%";
      }
    }
  };

  render() {
    let dataStudent = [];
    if (this.props.listStudent) {
      dataStudent = this.props.listStudent.map((student, index) => {
        return (
          <tr
            key={student._id}
            style={{ backgroundColor: index % 2 === 0 ? "#ebf0e9" : null }}
          >
            <td>{index + 1 + this.props.skip}</td>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>
              <button
                className="btnAction"
                style={{
                  backgroundColor: index % 2 === 0 ? "#ebf0e9" : "white",
                }}
                onClick={() => {
                  this.props.deleteStudent({ id: student._id });
                }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <button
                className="btnAction"
                style={{
                  backgroundColor: index % 2 === 0 ? "#ebf0e9" : "white",
                }}
                onClick={() => {
                  this.setState({
                    id: student._id,
                    name: student.name,
                    gender: student.gender,
                  });
                  if (student.gender === "Nam") {
                    this.handleCheckGenderMale();
                  } else if (student.gender === "Nữ") {
                    this.handleCheckGenderFemale();
                  } else if (student.gender === "Đồng Tính") {
                    this.handleCheckGenderLgbt();
                  }
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
            </td>
          </tr>
        );
      });
    }

    let totalPageArray = [];
    for (let i = 1; i <= this.props.totalPage; i++) {
      totalPageArray.push(i);
    }

    return (
      <div
        className="container"
        // onWheel={() => {
        //   if (
        //     this.props.activePage >= 1 &&
        //     this.props.activePage < this.props.totalPage
        //   )
        //     this.props.paginationStudent(this.props.activePage + 1);
        // }}
      >
        <div>
          <h1>THỰC TẬP SINH F6 - ELEDEVO</h1>
        </div>
        <div
          id="myLoader"
          className="myLoader"
          style={{
            display: this.props.isLoading === false ? "none" : "flex",
          }}
        ></div>
        <div
          style={{
            display: this.props.isLoading === false ? "none" : "flex",
          }}
        >
          <div className="loader"></div>
          <p id="process" className="process">
            0%
          </p>
        </div>
        <div
          style={{
            opacity: this.props.isLoading === false ? "100%" : "0%",
          }}
        >
          <div className="methodsBar" id="methodsBar">
            <input
              className="form-input"
              type={"text"}
              placeholder=" "
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              value={this.state.name}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (this.state.name === "") {
                    this.props.paginationStudent(1);
                  } else {
                    this.props.searchPaginationStudent({
                      textSearchName: this.state.name,
                      textSearchGender: this.state.gender,
                      activePage: 1,
                    });
                  }
                }
              }}
            />
            <label className="form-label">Name</label>
            <label>
              <input
                className="male"
                id="male"
                type={"radio"}
                name={"male-female-lgbt"}
                value={"Nam"}
                onChange={(e) => {
                  this.setState({ gender: e.target.value });
                }}
              />
              Nam
            </label>
            <label>
              <input
                className="female"
                id="female"
                type={"radio"}
                name={"male-female-lgbt"}
                value={"Nữ"}
                onChange={(e) => {
                  this.setState({ gender: e.target.value });
                }}
              />
              Nữ
            </label>
            <label>
              <input
                className="lgbt"
                id="lgbt"
                type={"radio"}
                name={"male-female-lgbt"}
                value={"Đồng Tính"}
                onChange={(e) => {
                  this.setState({ gender: e.target.value });
                }}
              />
              Đồng Tính
            </label>
            <button
              className="btnAdd"
              style={{
                backgroundColor:
                  this.state.name !== "" && this.state.gender !== ""
                    ? "#70ad46"
                    : "#c5e0b5",
              }}
              onClick={() => {
                if (this.state.name !== "" && this.state.gender !== "") {
                  this.props.addStudent({
                    name: this.state.name,
                    gender: this.state.gender,
                  });
                  this.handleLoading();
                }
                // this.handleClearState();
              }}
            >
              THÊM
            </button>
            <UpdateStudentComponent {...this.props} {...this.state} />
            {/* <button
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
                this.handleClearState();
              }}
            >
              UPDATE
            </button> */}
          </div>
        </div>

        <div
          style={{
            opacity: this.props.isLoading === false ? "100%" : "0%",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>NAME</th>
                <th>GIỚI TÍNH</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>{dataStudent}</tbody>
          </table>

          <div>
            {totalPageArray.map((item, index) => {
              return (
                <button
                  className="btnActivePage"
                  key={index}
                  style={{
                    backgroundColor:
                      item === this.props.activePage ? null : "#a8d18d",
                  }}
                  onClick={() => {
                    if (
                      (this.props.textSearchName ||
                        this.props.textSearchGender) &&
                      item !== this.props.activePage
                    ) {
                      this.props.searchPaginationStudent({
                        textSearchName: this.state.name,
                        textSearchGender: this.state.textSearchGender,
                        activePage: item,
                      });
                    } else if (item !== this.props.activePage) {
                      this.props.paginationStudent(item);
                    }
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
