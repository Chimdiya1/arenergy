import axios from "axios";

const baseUrl = `https://shrouded-spire-57909.herokuapp.com/https://wakatime.com/api/v1/`;

const api = {
  getLeaders: () => {
    return axios.get(
      `${baseUrl}/leaders/?api_key=b123ca6d-f283-411d-b2a2-034d2b3b0dc0`
    );
  },
};
export default api;
