import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NewNotice from "./pages/notice/NewNotice";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NoticeEdit from "./pages/notice/NoticeEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/newNotice" element={<NewNotice />} />
        <Route path="/noticeDetail" element={<NoticeDetail />} />
        <Route path="/noticeEdit" element={<NoticeEdit />} />
        {/* <Route path="/listItem" element={<HomePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
