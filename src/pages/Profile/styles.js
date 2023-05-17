import styled from "styled-components";

export const Container = styled.div`
padding: 250px 150px;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`
export const Title = styled.div`

position: absolute;
width: 169px;
height: 25px;
left: 292px;
top: 86px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 25px;
letter-spacing: -0.03em;
color: #081B4E;
b{
 color:#F43724;   
}
`
export const Options = styled.div`
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
  background-color: white;
  color: #777777;
}
li a:hover {
  color: #081B4E; 
}
`