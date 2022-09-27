import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div>
      <div>이메일</div>
      <input></input>
      <div>비밀번호</div>
      <input></input>
      <button>로그인</button>
      <Link to="/signup">
        <button>회원가입</button>
      </Link>
    </div>
  );
}
export default LoginPage;
