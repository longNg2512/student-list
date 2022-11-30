import { LIMIT } from "../constant";

export function paginationStudent(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/student/pagination?activePage=${data}&limit=${LIMIT}`;
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function deleteStudent(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/student/${data.id}`;
    fetch(url, { method: "DELETE" })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function searchPaginationStudent(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/student/search?textSearchName=${data.textSearchName}&textSearchGender=${data.textSearchGender}&activePage=${data.activePage}&limit=${LIMIT}`;
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function addStudent(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/student`;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function updateStudent(data) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:5000/student/${data.id}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
