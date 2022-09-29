import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./main/MainPage";
import LoginPage from "./login/LoginPage";
import SignUpPage from "./login/SignUpPage";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
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
