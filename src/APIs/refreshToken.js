//--------------Utils---------------------
import { fetchRequest } from "../utils";

//--------------Helpers--------------------
import { responseHandler } from "../helpers";

export const refreshToken = async () => {
  localStorage.setItem("accessToken", "");

  const response = await fetchRequest("admin/refreshToken", "POST");

  const error = responseHandler(response);

  console.log("refresh---->", response);

  if (!error) {
    localStorage.setItem("accessToken", response.accessToken);
    return true;
  } else {
    localStorage.removeItem("accessToken");
    window.dispatchEvent(new Event("storage"));
  }
};
