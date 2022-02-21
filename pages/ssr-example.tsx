import type { GetServerSideProps } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { fetcher } from "~/utils/axios";
import type { IUsers } from "~/interfaces/users";

interface Props {
  userData: IUsers[];
}
const SsrExample = (props: Props) => {
  const { userData } = props;

  return (
    <Suspense fallback={<div>...loading</div>}>
      <section>
        {userData.map((item) => (
          <div key={item.id}>
            <p>id {item.id}</p>
            <Image src={item.avatar_url} width={50} height={50} alt={item.login} />
          </div>
        ))}
      </section>
    </Suspense>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const userData = await fetcher<IUsers[]>("https://api.github.com/users");

  return { props: { userData } };
};
export default SsrExample;
