import { fetchDataFormBackend } from "./url";
import { DASHBOARD_APIS } from "../Constants/APIConstants";

export const fetchGithubLists = (formData) => {
  return fetchDataFormBackend(
    `${DASHBOARD_APIS.GET_GITHUB_LIST}?page=${formData.page}&search=${formData.search}&type=${formData.type}`,
    "POST",
    {},
    false,
  );
  // return fetchDataFormBackend(`api/test/`, "GET", {}, false);
};
