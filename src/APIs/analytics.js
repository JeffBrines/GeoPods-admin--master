import { responseHandler } from "../helpers";
import fetchRequest from "../utils/fetchRequest";

export const GetAnalytics = async () => {
  const response = await fetchRequest(
    `api/admin/getUserAnalytics`,
    "GET",
    true
  );

  const error = responseHandler(response, "with analytics");

  if (!error) {
    console.log("all ok");
  } else alert(error);
};
