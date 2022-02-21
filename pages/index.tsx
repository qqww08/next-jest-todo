import styled from "styled-components";

import Link from "next/link";

const Index = () => {
  return (
    <__Wrapper>
      <Link href="/ssr-example">SSR Page</Link>
      <Link href="/ssg-example">SSG Page</Link>
    </__Wrapper>
  );
};

export default Index;

const __Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
