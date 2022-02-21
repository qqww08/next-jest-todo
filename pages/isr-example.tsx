import type { GetStaticProps } from "next";
import Image from "next/image";
import { Suspense } from "react";

import { fetcher } from "~/utils/axios";
import type { IUsers } from "~/interfaces/users";

interface Props {
  userData: IUsers[];
}
const IsrExample = (props: Props) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const userData = await fetcher<IUsers[]>("https://api.github.com/users");

  return { revalidate: 3600, props: { userData } };
};
export default IsrExample;
