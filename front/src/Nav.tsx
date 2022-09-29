import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 2px solid black;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
`;

const Div = styled.div`
  display: inline;
  text-align: center;
  border: 1px solid red;
`;

function Nav() {
  return (
    <Box>
      <Div>
        <Link to="/">ReCo</Link>
      </Div>
      <Div>로그인</Div>
      <Div>로그아웃</Div>
    </Box>
  );
}
export default Nav;
