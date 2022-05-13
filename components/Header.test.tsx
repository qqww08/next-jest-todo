import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Header from "./Header";

describe("Home", () => {
  test("render", () => {
    const { container } = render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>,
    );

    expect(container).toMatchSnapshot();
  });
  test("input tag 에 입력한 값을 제대로 가지고 오고 있는지 체크", () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>,
    );

    const targetValue = "todo list";
    fireEvent.change(screen.getByTestId("test-input"), { target: { value: targetValue } });
    const input: HTMLInputElement = screen.getByDisplayValue(targetValue);
    expect(input.value).toEqual(targetValue);
  });

  test("엔터를 눌렀을때 recoil setter 가 정상적으로 작동하는지 test", () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>,
    );
  });
});
