export const fetchDataFormBackend = async (url, type, formData, isPost) => {
  var headers = new Headers();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  headers.append("Accept", "application/json");
  headers.append("X-GitHub-Api-Version", process.env.X_GITHUB_API_VERSION);
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-control-allow-credentials", "*");

  var requestOptions = {
    method: type,
    headers: headers,
    mode: "no-cors",
  };

  if (isPost) requestOptions.body = JSON.stringify(formData);

  try {
    const res = await fetch(baseUrl + url, requestOptions);
    let result = {};
    const json = await res.json();
    result.data = json;
    return result;
  } catch (error) {
    return console.log(error);
  }
};
