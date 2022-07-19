import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    accept: "application/json",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3BlemNhbnFvcHdnenR6eW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNDgwNTksImV4cCI6MTk3MjkyNDA1OX0.xcmHxepkSt8oG5-a3vr8R8vB4rVxxqL_yS8il1HwDEY",
    Authorization: "Bearer VCcK26hV70FYHIsD2h2spA",
    "Content-Type": "application/json",
    "content-type": "application/json",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getEmployees = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://dhiwise-team.freshteam.com/api/employees`,
    method: "get",
    params,
    headers,
    data,
  });
};
