import { BASE_URL } from "../config";
import { refreshToken } from "../APIs/refreshToken";
import { getToken, removeToken } from "../utils/localStorage";

const fetchRequest = async (url, method, body, formData = false) => {
  let token = getToken("accessToken") ?? null;

  let headers = {};

  try {
    if (formData === true) {
      headers = {};
    } else {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }

    if (token) headers.Authorization = `Bearer ${token}`;
    console.log(token, "ddd");

    const response = await fetch(`${BASE_URL}/${url}`, {
      method: method.toUpperCase(),
      headers: headers,
      body: formData === true ? body : JSON.stringify(body),
      // body: JSON.stringify(body),
    });

    if (response.status === (200 || 201)) {
      const data = await response.json();
      return { ...data, status: response.status };
    } else if (response.status === 400) {
      const data = await response.json();
      return { ...data, status: response.status };
    } else if (response.status === 401) {
      removeToken("accessToken");
      // if (localStorage.getItem("accessToken")) {
      //   const refreshed = await refreshToken();
      //   if (refreshed === true) {
      //     const newResponse = fetchRequest(url, method, body);
      //     return newResponse;
      //   } else {
      //     removeToken("accessToken");
      //     alert("Time of your working session is out, please login again.");
      //   }
      // }
      const data = await response.json();
      return { ...data, status: response.status };
    } else if (response.status === (403 || 404)) {
      const data = await response.json();
      return { ...data, status: response.status };
    } else if (response.status === 409) {
      const data = await response.json();
      return { ...data, status: response.status };
    } else if (response.status === 500) {
      alert("Sorry the server is not available right now please try later");
    }
  } catch (e) {
    console.log(e);
  }
};

export default fetchRequest;
