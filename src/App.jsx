import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import ResetPage from "./pages/ResetPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/reset" element={<ResetPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
