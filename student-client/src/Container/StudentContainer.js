import React, { Component } from "react";
import { connect } from "react-redux";
import StudentComponent from "../Components/StudentComponent";
import * as actions from "../Actions/studentActions";

class StudentContainer extends Component {
  componentDidMount() {
    this.props.paginationStudent(1);
  }
  render() {
    return (
      <div>
        <StudentComponent {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listStudent: state.dataStudent.listStudent,
    activePage: state.dataStudent.activePage,
    totalPage: state.dataStudent.totalPage,
    skip: state.dataStudent.skip,
    textSearchName: state.dataStudent.textSearchName,
    textSearchGender: state.dataStudent.textSearchGender,
    isLoading: state.dataStudent.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    paginationStudent: (data) => {
      dispatch(actions.paginationStudentRequest(data));
    },
    deleteStudent: (data) => {
      dispatch(actions.deleteStudentRequest(data));
    },
    searchPaginationStudent: (data) => {
      dispatch(actions.searchPaginationStudentRequest(data));
    },
    addStudent: (data) => {
      dispatch(actions.addStudentRequest(data));
    },
    updateStudent: (data) => {
      dispatch(actions.updateStudentRequest(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
