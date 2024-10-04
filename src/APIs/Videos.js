import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const createVideo = async (setLoading, onSuccess, data) => {
  setLoading(true);

  console.log(data.formData.get("description"));

  const response = await fetchRequest(
    `admin/uploadVideo?id=${data.id}`,
    "POST",
    data.formData,
    true
  );

  const error = responseHandler(response, "creating video");

  setLoading(false);

  if (!error) {
    onSuccess();
  } else alert(error);
};

export const getVideos = async (setLoading, setData, page = 1) => {
  setLoading(true);

  const response = await fetchRequest(
    `admin/videos?page=${page}&size=2`,
    "GET"
  );

  const error = responseHandler(response);

  setLoading(false);

  if (!error) {
    setData(response.videos, response.page);
  }
};

export const editVideo = async (setLoading, onError, onSuccess, data) => {
  setLoading(true);

  console.log(data.formData.get("video"));
  const response = await fetchRequest(
    `admin/changeVideo?id=${data.id}`,
    "PUT",
    data.formData,
    true
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

export const deleteVideo = async (setLoading, onSuccess, id) => {
  setLoading(true);

  const response = await fetchRequest(`admin/removeVideo?id=${id}`, "DELETE");

  const error = responseHandler(response);

  setLoading(false);

  if (!error) {
    alert("Successfuly deleted!");
    onSuccess();
  } else alert(error);
};
