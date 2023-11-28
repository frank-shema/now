//base url
export const API_URL = "http://localhost:8000";

//retrieve token from local storage
export const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
};