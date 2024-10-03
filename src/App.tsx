import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LostItem from "./pages/lostItem/LostItem";
import NewLostItem from "./pages/lostItem/NewLostItem";
import NewNotice from "./pages/notice/NewNotice";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NoticeEdit from "./pages/notice/NoticeEdit";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/newNotice" element={<NewNotice />} />
            <Route path="/noticeDetail" element={<NoticeDetail />} />
            <Route path="/noticeEdit" element={<NoticeEdit />} />
            <Route path="/lostItem" element={<LostItem />} />
            <Route path="/newLostItem" element={<NewLostItem />} />
          </Routes>
        </Router>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
