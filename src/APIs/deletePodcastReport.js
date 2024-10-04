import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const DeletePodcastReport = async (id) => {
  const response = await fetchRequest(
    `api/report/deletePodcastReport?id=${id}`,
    "DELETE"
  );

  const error = responseHandler(response, "delete podcast report");

  if (!error) {
    return true;
  } else alert(error);
};
