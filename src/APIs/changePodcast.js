import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const ChangePodcast = async (id, data) => {
  const response = await fetchRequest(`api/admin/editPodcast?id=${id}`, "PUT", {
    name: data.name,
    description: data.description,
    author: data.author,
    priority: data.priority,
    url: data.url,
    location: data.location,
  });
  console.log("response", response);

  const error = responseHandler(response, "creating video");

  if (!error) {
    return true;
  } else alert(error);
};
