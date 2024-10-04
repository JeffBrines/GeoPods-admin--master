import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const deleteAdmin = async (id) => {
  console.log("adminId", id);
  const response = await fetchRequest(
    `api/admin/deleteAdmin?id=${id}`,
    "DELETE"
  );
  const error = responseHandler(response, "admin user");

  if (!error) {
    return true;
  } else alert(error);
};
