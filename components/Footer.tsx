import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import todoState, { ITodo } from "~/recoil/TodoList";
import { useCallback } from "react";

const Footer = () => {
  const setTodoValue = useSetRecoilState<ITodo[]>(todoState);

  // 선택삭제
  const handleSelectDeleteClick = useCallback(() => {
    setTodoValue((prev) => {
      return prev.filter((i) => !i.checked);
    });
  }, []);

  // 전체삭제
  const handleAllDeleteClick = useCallback(() => {
    setTodoValue([]);
  }, []);

  return (
    <__Footer>
      <__SelectDeleteBtn onClick={handleSelectDeleteClick}>선택삭제</__SelectDeleteBtn>
      <__AllDeleteBtn onClick={handleAllDeleteClick}>전체삭제</__AllDeleteBtn>
    </__Footer>
  );
};

export default Footer;
const __Footer = styled.footer`
  width: 565px;
  display: flex;
  justify-content: space-between;
`;
const __SelectDeleteBtn = styled.button``;
const __AllDeleteBtn = styled.button``;
