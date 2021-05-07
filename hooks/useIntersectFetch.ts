import { useEffect, useState } from "react";
import retry from "async-retry";
import Axios from "axios";

interface Props {
  url: string;
  params?: object;
}
interface Return<T> {
  res: { data: T[] };
  loading: boolean;
  error: boolean;
  retry: () => void;
}
/**
 *  @param ref element useRef
 *  @param url api url
 *  @param params api 파라미터
 */
export function useIntersectFetch<T>(
  ref,
  { url, params = {} }: Props
): Return<T> {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const apiFetch = async () => {
    try {
      await retry(
        async () => {
          await Axios.get(url, {
            params,
          }).then((res) => {
            setLoading(false);
            setRes(res.data.data);
            // 한번 호출 후 옵저버 제거
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
    const observer = new IntersectionObserver(([entry]) => {
      // ref 가 감지 될 경우
      if (entry.isIntersecting) {
        apiFetch();
        observer?.unobserve(ref?.current);
      }
    });
    observer?.observe(ref?.current);
    return () => {
      observer?.disconnect();
    };
  }, []);

  return {
    res,
    loading,
    error,
    retry: () => {
      setError(false);
      apiFetch();
    },
  };
}
