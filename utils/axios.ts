import axios from "axios";
import axiosRetry from "axios-retry";

const instance = axios.create({
    timeout: 30000,
});

axiosRetry(instance, {
    retries: 1,
    retryDelay: (retryCount) => {
        return retryCount * 3000;
    },
});

export default instance;
