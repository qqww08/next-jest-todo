import Axios from "axios";

export const common = {
  test: () => {
    Axios.get(`${process.env.BASE_URL}/api`);
  },
};
