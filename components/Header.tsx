import styled from "styled-components";
import { useRecoilState } from "recoil";
import todoState, { ITodo } from "~/recoil/TodoList";
import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [value, setValue] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [todoValue, setTodoValue] = useRecoilState<ITodo[]>(todoState);

  const handleInputChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleAllCheckChange = useCallback(() => {
    setTodoValue((prev) => {
      return prev.map((item) => ({ ...item, checked: !checked }));
    });

    setChecked((prev) => !prev);
  }, [checked]);

  const handleInputKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        setValue("");
        setTodoValue((prev) => [...prev, { id: prev.length, name: value, checked: false }]);
      }
    },
    [value],
  );

  useEffect(() => {
    const todoFilter = todoValue.filter((item) => !item.checked);
    const isChecked = todoFilter.length > 0;
    if (isChecked) {
      setChecked(false);
    }
  }, [todoValue]);

  return (
    <__Header>
      <__Title>Todo List</__Title>
      <__InputWrapper>
        <__CheckBox type="checkbox" onChange={handleAllCheckChange} checked={checked} />
        <__Input placeholder="입력" onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} />
      </__InputWrapper>
    </__Header>
  );
};

export default Header;
const __Header = styled.header`
  text-align: center;
`;
const __Title = styled.h1`
  font-size: 60px;
`;
const __InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const __CheckBox = styled.input`
  width: 50px;
  height: 50px;
`;
const __Input = styled.input`
  width: 500px;
  height: 50px;
`;
