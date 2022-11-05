import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 42rem;
    min-height: 100vh;
  }
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  body, button, input {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
  
`;

export default GlobalStyle;