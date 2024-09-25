import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Notice from "./pages/notice/Notice";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notice" element={<Notice />} />
        {/* <Route path="/listItem" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
