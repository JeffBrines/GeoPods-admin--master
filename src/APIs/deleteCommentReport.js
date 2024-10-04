import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const DeleteCommentReport = async (id) => {
  const response = await fetchRequest(
    `api/report/deleteReviewReport?id=${id}`,
    "DELETE"
  );
  const error = responseHandler(response, "delete podcast report");

  if (!error) {
    return true;
  } else alert(error);
};
