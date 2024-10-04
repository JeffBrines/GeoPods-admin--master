import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const getCategories = async (setLoading, setData) => {
  setLoading(true);

  const response = await fetchRequest(`admin/category`, "GET");

  const error = responseHandler(response);

  setLoading(false);

  if (!error) {
    setData(response.category);
  }
};

export const editCategory = async (setLoading, onError, onSuccess, data) => {
  setLoading(true);

  const response = await fetchRequest(
    `admin/changeCategory?id=${data.id}`,
    "PUT",
    data.body
  );

  const error = responseHandler(response);

  setLoading(false);

  if (!error) {
    alert("Successfuly edited!");
    onSuccess();
  } else {
    alert(error);
    onError();
  }
};

export const deleteCategory = async (setLoading, onSuccess, id) => {
  setLoading(true);

  const response = await fetchRequest(
    `admin/removeCategory?id=${id}`,
    "DELETE"
  );

  const error = responseHandler(response);

  setLoading(false);

  if (!error) {
    alert("Successfuly deleted!");
    onSuccess();
  } else alert(error);
};

export const createCategory = async (setLoading, onSuccess, data) => {
  setLoading(true);

  const response = await fetchRequest(`admin/addCategory`, "POST", data);

  const error = responseHandler(response);

  setLoading(false);

  if (!error) {
    alert("Successfuly created!");
    onSuccess();
  } else alert(error);
};
