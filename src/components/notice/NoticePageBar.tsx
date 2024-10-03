import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { Chevron } from "../../assets";

const NoticePageBar = ({ totalPage }: { totalPage: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

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

  const handlePrevPage = () => {
    if (Number(currentPage) > 1) {
      searchParams.set(
        "page",
        decodeURIComponent((Number(currentPage) - 1).toString())
      );
      setSearchParams(searchParams);
    }
  };

  const handleNextPage = () => {
    if (Number(currentPage) < totalPage) {
      searchParams.set(
        "page",
        decodeURIComponent((Number(currentPage) + 1).toString())
      );
      setSearchParams(searchParams);
    }
  };

  return (
    <Container>
      <Chevron
        style={{ transform: "rotate(180deg)", cursor: "pointer" }}
        onClick={handlePrevPage}
      />
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
      <Chevron style={{ cursor: "pointer" }} onClick={handleNextPage} />
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
