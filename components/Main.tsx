import styled from "styled-components";
import { useRecoilState } from "recoil";
import todoState, { ITodo } from "~/recoil/TodoList";
import React, { useCallback } from "react";

const Main = () => {
  const [todoValue, setTodoValue] = useRecoilState<ITodo[]>(todoState);

  // 선택삭제
  const handleDeleteClick = useCallback((id: number) => {
    setTodoValue((prev) => prev.filter((i) => i.id !== id));
  }, []);

  // 선택
  const handleCheckChange = useCallback((id) => {
    setTodoValue((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return { ...item };
      });
    });
  }, []);

  return (
    <__Main>
      <__TodoList>
        {todoValue.map((item) => (
          <__TodoItem key={item.id}>
            <__Left>
              <__CheckBox type="checkbox" checked={item.checked} onChange={() => handleCheckChange(item.id)} />
              <__Name isChecked={item.checked}>{item.name}</__Name>
            </__Left>
            <__Right>
              <__DeleteBtn onClick={() => handleDeleteClick(item.id)}>X</__DeleteBtn>
            </__Right>
          </__TodoItem>
        ))}
      </__TodoList>
    </__Main>
  );
};

export default Main;
const __Main = styled.main`
  width: 565px;
`;
const __TodoList = styled.ul`
  padding: 0;
`;
const __TodoItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  list-style: none;
`;
const __Left = styled.div`
  display: flex;
  align-items: center;
`;
const __Right = styled.div``;
const __Name = styled.span<{ isChecked: boolean }>`
  font-size: 32px;
  font-weight: 700;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  opacity: ${(props) => (props.isChecked ? 0.1 : 1)};
  transition: 300ms all;
`;
const __DeleteBtn = styled.button``;
const __CheckBox = styled.input`
  width: 50px;
  height: 50px;
`;
