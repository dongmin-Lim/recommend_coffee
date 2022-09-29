import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div<{ height?: string }>`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  border: 2px solid black;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  width: 1000px;
  height: ${(props) => props.height || "500px"};
`;

const Button = styled.button<{ bgColor?: string }>`
  padding: 6px 10px;
  font-size: 18px;
  border-radius: 3px;
  border: 0;
  color: black;
  background-color: ${(props) => props.bgColor || "lightgray"};
`;

function LoginPage() {
  return (
    <Box>
      <div>
        <div>이메일</div>
        <input></input>
      </div>
      <div>
        <div>비밀번호</div>
        <input></input>
      </div>
      <Link to="/signup">
        {/* 추후 메인페이지로 */}
        <Button>로그인</Button>
      </Link>
      <Link to="/signup">
        <Button>회원가입</Button>
      </Link>
    </Box>
  );
}
export default LoginPage;
