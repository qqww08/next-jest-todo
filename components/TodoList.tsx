import styled from "styled-components";
import Header from "~/components/Header";
import Main from "~/components/Main";
import Footer from "~/components/Footer";

const TodoList = () => {
  return (
    <__TodoList>
      <Header />
      <Main />
      <Footer />
    </__TodoList>
  );
};

export default TodoList;
const __TodoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
