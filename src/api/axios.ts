// https://test.3scorers.com/api/v1/auth/sign-up

// import axios from "axios";

// const BASE_URL = "https://test.3scorers.com/api/v1/"


// const request = axios.create({
//     baseURL: BASE_URL
// })
// export default request;

import axios, { AxiosError } from "axios";

export const BASE_URL = "https://test.3scorers.com/api/v1/"


const customAxios = axios.create({
  baseURL: BASE_URL,
});

customAxios.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (request: any) => {
    const refreshToken = `${localStorage.getItem("refreshToken") || ""}`
    const token = `Bearer ${localStorage.getItem("accessToken") || ""}`;
    
    if (token) {
      request.headers = {
        ...request.headers,
        Authorization: token,
        'X-Refresh-Token': refreshToken,
      };
    }
    // "accessToken": "string",

    return request;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default customAxios;