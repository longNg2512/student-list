import * as types from "../constant";

export function paginationStudentRequest(payload) {
  return {
    type: types.PAGINATION_STUDENT_REQUEST,
    payload,
  };
}

export function paginationStudentSuccess(payload) {
  return {
    type: types.PAGINATION_STUDENT_SUCCESS,
    payload,
  };
}

export function paginationStudentFailure(payload) {
  return {
    type: types.PAGINATION_STUDENT_FAILURE,
    payload,
  };
}

export function deleteStudentRequest(payload) {
  return {
    type: types.DELETE_STUDENT_REQUEST,
    payload,
  };
}

export function deleteStudentSuccess(payload) {
  return {
    type: types.DELETE_STUDENT_SUCCESS,
    payload,
  };
}

export function deleteStudentFailure(payload) {
  return {
    type: types.DELETE_STUDENT_FAILURE,
    payload,
  };
}

export function searchPaginationStudentRequest(payload) {
  return {
    type: types.SEARCH_PAGINATION_STUDENT_REQUEST,
    payload,
  };
}

export function searchPaginationStudentSuccess(payload) {
  return {
    type: types.SEARCH_PAGINATION_STUDENT_SUCCESS,
    payload,
  };
}

export function searchPaginationStudentFailure(payload) {
  return {
    type: types.SEARCH_PAGINATION_STUDENT_FAILURE,
    payload,
  };
}

export function addStudentRequest(payload) {
  return {
    type: types.ADD_STUDENT_REQUEST,
    payload,
  };
}

export function addStudentSuccess(payload) {
  return {
    type: types.ADD_STUDENT_SUCCESS,
    payload,
  };
}

export function addStudentFailure(payload) {
  return {
    type: types.ADD_STUDENT_FAILURE,
    payload,
  };
}

export function updateStudentRequest(payload) {
  return {
    type: types.UPDATE_STUDENT_REQUEST,
    payload,
  };
}

export function updateStudentSuccess(payload) {
  return {
    type: types.UPDATE_STUDENT_SUCCESS,
    payload,
  };
}

export function updateStudentFailure(payload) {
  return {
    type: types.UPDATE_STUDENT_FAILURE,
    payload,
  };
}

export function searchStudentRequest(payload) {
  return {
    type: types.SEARCH_STUDENT_REQUEST,
    payload,
  };
}

export function searchStudentSuccess(payload) {
  return {
    type: types.SEARCH_STUDENT_SUCCESS,
    payload,
  };
}

export function searchStudentFailure(payload) {
  return {
    type: types.SEARCH_STUDENT_FAILURE,
    payload,
  };
}
