import exp from "constants";
import { Link } from "react-router-dom";
function MainPage() {
  return (
    <div>
      <div>커피를 추천해 드립니다.</div>
      <div>항상 아메리카노만 시키던 당신을 위한 퍼스널 커피 추천 사이트</div>
      <Link to="/login">
        <button>알아보기</button>
      </Link>
    </div>
  );
}
export default MainPage;
