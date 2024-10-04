import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const ChangeUser = async (id, data) => {
  const response = await fetchRequest(`api/admin/edit-user`, "PATCH", {
    userId: id,
    data: {
      name: data.name,
      userName: data.userName,
      email: data.email,
      country: data.country,
      city: data.city,
      description: data.description,
      webUrl: data.webUrl,
      instagram: data.instagram,
      twitter: data.twitter,
      tiktok: data.tiktok,
    },
  });
  console.log("response", response);

  const error = responseHandler(response, "change user");

  if (!error) {
    return true;
  } else alert(error);
};
