import styled from "styled-components";
import wrapper, { SagaStore } from "~/createStore";

export const description =
  "많은 사람들이 디지털 자산과 블록체인 시장에 참여하고 있지만 법적으로 인정정받지 못하고, 진입 장벽도 높은 사회적 모순이 존재하며...";

const Index = (props) => {
  return <__Wrapper>asd</__Wrapper>;
};

export default Index;

const __Wrapper = styled.div``;
export const getStaticProps = wrapper.getStaticProps((store: SagaStore) => async (ctx) => {
  return {
    props: {},
  };
});
