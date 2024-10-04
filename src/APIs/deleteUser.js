import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const DeleteUser = async (id) => {
  const response = await fetchRequest(
    `api/admin/deleteUser?id=${id}`,
    "DELETE"
  );
  const error = responseHandler(response, "delete user");

  if (!error) {
    return true;
  } else alert(error);
};
