import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const DeletePodcast = async (id) => {
  const response = await fetchRequest(
    `api/admin/deletePodcast?id=${id}`,
    "DELETE"
  );

  const error = responseHandler(response, "delete podcast");

  if (!error) {
    return true;
  } else alert(error);
};
