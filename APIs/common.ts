import Axios from 'axios';

const common = {
  test: () => {
    Axios.get(`${process.env.BASE_URL}/api`);
  },
};
export default common;
