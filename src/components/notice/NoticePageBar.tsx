import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { Chevron } from "../../assets";
import { DUMMYPREVIEWPOSTS } from "../../constants/notice";

/*
    API 가 어떻게 나올지 모르겠음 페이지 전환 기능을 포함시킬 수도 있기때문에 아직 postList를 자르지 않았음.
*/

const NoticePageBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  const totalPage = DUMMYPREVIEWPOSTS.length % 6; //총 페이지 수
  const pageList = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handleSetPage = (page: number) => {
    searchParams.set("page", decodeURIComponent(page.toString()));
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!currentPage) {
      searchParams.set("page", decodeURIComponent("1"));
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, currentPage]);

  return (
    <Container>
      <Chevron style={{ transform: "rotate(180deg)", cursor: "pointer" }} />
      {pageList.map((item, index) => {
        const page = item; // 숫자 값으로 가정

        return page === Number(currentPage) ? (
          <CurrentPageText key={index} onClick={() => handleSetPage(page)}>
            {page}
          </CurrentPageText>
        ) : (
          <PageText key={index} onClick={() => handleSetPage(page)}>
            {page}
          </PageText>
        );
      })}
      <Chevron style={{ cursor: "pointer" }} />
    </Container>
  );
};

export default NoticePageBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CurrentPageText = styled.p`
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
`;
const PageText = styled.p`
  font-size: 18px;
  cursor: pointer;
  color: gray;
`;
