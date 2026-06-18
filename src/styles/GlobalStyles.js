import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial, Helvetica, sans-serif;
  background:#f5f7fa;

  color:#1f2937;

  line-height:1.5;
}

a{
  text-decoration:none;
  color:white;
}

button{
  cursor:pointer;
}

.gridTreinos{

  display:grid;

  grid-template-columns:
  repeat(auto-fit,minmax(250px,1fr));

  gap:20px;

}

@media(max-width:768px){

  .gridTreinos{
    grid-template-columns:1fr;
  }

}

`;

export default GlobalStyles;