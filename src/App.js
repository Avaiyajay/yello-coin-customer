import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { Login } from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route path="*" element={<DefaultLayout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
