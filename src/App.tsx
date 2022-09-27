import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./main/MainPage";
import LoginPage from "./login/LoginPage";
import SignUpPage from "./login/SignUpPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
