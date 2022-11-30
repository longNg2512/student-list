import { put, takeEvery } from "redux-saga/effects";
import * as constants from "../constant";
import studentAPI from "../API/studentAPI";
import * as actions from "../Actions/studentActions";

function* handlePaginationStudent(action) {
  try {
    const response = yield studentAPI(
      constants.HTTP_READ,
      `/student/pagination?activePage=${action.payload}&limit=${constants.LIMIT}`
    );
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
    yield studentAPI(constants.HTTP_DELETE, `/student/${action.payload.id}`);
    yield put(actions.deleteStudentSuccess());
    const res = yield studentAPI(
      constants.HTTP_READ,
      `/student/pagination?activePage=${1}&limit=${constants.LIMIT}`
    );
    yield put(actions.paginationStudentRequest(res.totalPage));
  } catch (error) {
    yield put(actions.deleteStudentFailure(error));
  }
}

function* handleSearchPaginationStudent(action) {
  try {
    const response = yield studentAPI(
      constants.HTTP_READ,
      `/student/search?textSearchName=${action.payload.textSearchName}&textSearchGender=${action.payload.textSearchGender}&activePage=${action.payload.activePage}&limit=${constants.HTTP_READ}`
    );
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
    const response = yield studentAPI(
      constants.HTTP_CREATE,
      `/student`,
      action.payload
    );
    yield new Promise((resolve, reject) => {
      setTimeout(() => resolve(response), 5000);
    });

    yield put(actions.addStudentSuccess());
    const res = yield studentAPI(
      constants.HTTP_READ,
      `/student/pagination?activePage=${1}&limit=${constants.LIMIT}`
    );
    yield put(actions.paginationStudentRequest(res.totalPage));
  } catch (error) {
    yield put(actions.addStudentFailure(error));
  }
}

function* handleUpdateStudent(action) {
  try {
    const response = yield studentAPI(
      constants.HTTP_UPDATE,
      `/student/${action.payload.id}`,
      action.payload
    );
    yield put(actions.updateStudentSuccess({message: response.message}));
    yield put(actions.paginationStudentRequest(1));
  } catch (error) {
    yield put(actions.updateStudentFailure(error));
  }
}

const studentSaga = [
  takeEvery(constants.PAGINATION_STUDENT_REQUEST, handlePaginationStudent),
  takeEvery(constants.DELETE_STUDENT_REQUEST, handleDeleteStudent),
  takeEvery(
    constants.SEARCH_PAGINATION_STUDENT_REQUEST,
    handleSearchPaginationStudent
  ),
  takeEvery(constants.ADD_STUDENT_REQUEST, handelAddStudent),
  takeEvery(constants.UPDATE_STUDENT_REQUEST, handleUpdateStudent),
];

export default studentSaga;
