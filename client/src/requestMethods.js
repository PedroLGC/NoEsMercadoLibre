import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2YxMDMyOTAwODhmYTEzOWY1YWNjNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzA2NTkxMSwiZXhwIjoxNjUzMzI1MTExfQ.cHnYcIKuZKCHVAU55nHKx4loz15X-g0Zaf1T_1kMrkk";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
