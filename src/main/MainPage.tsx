import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button<{ bgColor?: string }>`
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 3px;
  border: 0;
  color: black;
  background-color: ${(props) => props.bgColor || "black"};
`;

const Box = styled.div<{ height?: string }>`
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  width: 1000px;
  height: ${(props) => props.height};
`;

function MainPage() {
  return (
    <Box height={"500px"}>
      <h1>커피를 추천해 드립니다.</h1>
      <h2>항상 아메리카노만 시키던 당신을 위한 퍼스널 커피 추천 사이트</h2>
      <Link to="/login">
        <Button bgColor={"skyblue"}>알아보기</Button>
      </Link>
    </Box>
  );
}
export default MainPage;
