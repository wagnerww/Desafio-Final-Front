import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
  outline:none;
}

body{
  background:#24212c;
  color:#FFF;
  text-rendering:optimizeLegibility !important;
  --webkit-font-smoothing:antialised !important;
  font-family:sans-serif;
}

`;

export default GlobalStyle;
