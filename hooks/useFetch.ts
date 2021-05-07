import { useEffect, useState } from "react";
import retry from "async-retry";
import Axios from "axios";

interface Props {
  url: string;
  params?: object;
}
interface Return<T> {
  res: T;
  loading: boolean;
  error: boolean;
  retry: () => void;
}
/**
 * Date Fetch Hooks
 * @params url api 주소
 * @params params api 파라미터
 * @return res response
 * @return loading loading check
 * @return error error check
 * */
export function useFetch<T>({ url, params = {} }: Props): Return<T> {
  const [res, setRes] = useState<T>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const retryFunc = async () => {
    try {
      await retry(
        async () => {
          await Axios.get(url, { params }).then((res) => {
            setLoading(false);
            setRes(res.data.data);
          });
        },
        // 호출 실패 시 1초당 3번 시도
        { retries: 2 }
      );
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    retryFunc();
  }, []);
  return {
    res,
    loading,
    error,
    retry: () => {
      retryFunc();
      setError(false);
    },
  };
}
