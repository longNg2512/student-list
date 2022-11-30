import * as constants from "../constant";

export default function studentAPI(method, path, data) {
  let objFetch = {};
  if (method === constants.HTTP_READ || method === constants.HTTP_DELETE) {
    objFetch = {
      method,
    };
  } else {
    objFetch = {
      method,
      headers: constants.HTTP_HEADER_JSON,
      body: JSON.stringify(data),
    };
  }
  return new Promise((resolve, reject) => {
    const url = constants.DOMAIN + path;
    fetch(url, objFetch)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
