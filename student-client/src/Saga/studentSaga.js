import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constant";
import * as API from "../API/fetchAPI";
import * as actions from "../Actions/studentActions";

function* handlePaginationStudent(action) {
  try {
    const response = yield API.paginationStudent(action.payload);
    yield put(
      actions.paginationStudentSuccess({
        listStudent: response.listStudent,
        activePage: response.activePage,
        totalPage: response.totalPage,
        skip: response.skip,
      })
    );
  } catch (error) {
    yield put(actions.paginationStudentFailure(error));
  }
}

function* handleDeleteStudent(action) {
  try {
    yield API.deleteStudent(action.payload);
    yield put(actions.deleteStudentSuccess());
    const res = yield API.paginationStudent(1);
    yield put(actions.paginationStudentRequest(res.totalPage));
  } catch (error) {
    yield put(actions.deleteStudentFailure(error));
  }
}

function* handleSearchPaginationStudent(action) {
  try {
    const response = yield API.searchPaginationStudent(action.payload);
    console.log(response, "saga");
    yield put(
      actions.searchPaginationStudentSuccess({
        listStudent: response.listStudent,
        activePage: response.activePage,
        totalPage: response.totalPage,
        skip: response.skip,
        textSearchName: response.textSearchName,
        textSearchGender: response.textSearchGender,
      })
    );
  } catch (error) {
    yield put(actions.searchPaginationStudentFailure(error));
  }
}

function* handelAddStudent(action) {
  try {
    const response = yield API.addStudent(action.payload);
    yield new Promise((resolve, reject) => {
      setTimeout(() => resolve(response), 10000);
    });

    yield put(actions.addStudentSuccess());
    const res = yield API.paginationStudent(1);
    yield put(actions.paginationStudentRequest(res.totalPage));
  } catch (error) {
    yield put(actions.addStudentFailure(error));
  }
}

function* handleUpdateStudent(action) {
  try {
    yield API.updateStudent(action.payload);
    yield put(actions.updateStudentSuccess());
    yield put(actions.paginationStudentRequest(1));
  } catch (error) {
    yield put(actions.updateStudentFailure(error));
  }
}

const studentSaga = [
  takeEvery(types.PAGINATION_STUDENT_REQUEST, handlePaginationStudent),
  takeEvery(types.DELETE_STUDENT_REQUEST, handleDeleteStudent),
  takeEvery(
    types.SEARCH_PAGINATION_STUDENT_REQUEST,
    handleSearchPaginationStudent
  ),
  takeEvery(types.ADD_STUDENT_REQUEST, handelAddStudent),
  takeEvery(types.UPDATE_STUDENT_REQUEST, handleUpdateStudent),
];

export default studentSaga;
