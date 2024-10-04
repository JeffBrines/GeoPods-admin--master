import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const DeleteUserReport = async (id, data) => {
  try {
    const response = await fetchRequest(
      `api/report/deleteUserReport?id=${id}`,
      "DELETE",
      {}
    );

    const error = responseHandler(response, "delete user report");

    if (!error) {
      console.log("all ok");
    } else {
      alert(error);
    }
  } catch (e) {
    debugger;
  }
};
