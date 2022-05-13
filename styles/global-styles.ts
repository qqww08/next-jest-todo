import reset from 'styled-reset';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    font-family: "Noto Sans CJK KR", sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  input, button {
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
  }
  input, textarea{
    user-select: text;
  }
`;
export const OneLine = css`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const TwoLine = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Threeline = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
export default GlobalStyle;
