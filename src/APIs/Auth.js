import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const auth = async (setLoading, onSuccess, data) => {
  setLoading(true);

  const response = await fetchRequest("admin/weblogin", "POST", data);

  const error = responseHandler(response, "login", "Wrong password or login");

  setLoading(false);

  if (!error) {
    localStorage.setItem("accessToken", response.accessToken);
    window.dispatchEvent(new Event("storage"));
    onSuccess();
  } else alert(error);
};

export const logout = async (setLoading, onSuccess) => {
  setLoading(true);

  const response = await fetchRequest("admin/weblogout", "POST");

  const error = responseHandler(response, "logout");

  setLoading(false);

  if (!error) {
    localStorage.removeItem("accessToken");
    window.dispatchEvent(new Event("storage"));
    onSuccess();
  } else alert(error);
};
