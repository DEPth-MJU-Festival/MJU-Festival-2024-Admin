import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postItem } from "../../api/item";
import { NaviTapType } from "../../types/lostItem/lostItem";
import { mapToItemCategory } from "../../utils/mapToItemCategory";

const NewLostItem: React.FC = () => {
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [itemName, setItemName] = useState<string>("");
  const [category, setCategory] = useState<NaviTapType>("기타");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const navigator = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImageFile(file);
    }
  };

  const handlePlaceholderClick = () => {
    fileInputRef.current?.click();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value as NaviTapType);
  };

  const handleSubmit = async () => {
    if (selectedImageFile && itemName) {
      try {
        const formData = new FormData();
        formData.append("image", selectedImageFile);

        const createItemReq = {
          title: itemName,
          category: mapToItemCategory(category),
        };
        formData.append(
          "createItemReq",
          new Blob([JSON.stringify(createItemReq)], {
            type: "application/json",
          })
        );

        console.log(createItemReq);
        await postItem(formData);
        alert("분실물이 성공적으로 게시되었습니다.");
        navigator("/lostItem");
      } catch (error) {
        console.error("Error posting item:", error);
        alert("게시하는 중 오류가 발생했습니다.");
      }
    } else {
      alert("이미지와 분실물 이름을 입력해주세요.");
    }
  };

  return (
    <Container>
      <ImageContainer onClick={handlePlaceholderClick}>
        {selectedImageFile ? (
          <Image src={URL.createObjectURL(selectedImageFile)} alt="Selected" />
        ) : (
          <Placeholder>사진을 선택하세요</Placeholder>
        )}
      </ImageContainer>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <NameTitle>분실물 이름</NameTitle>
      <NameInput
        type="text"
        placeholder="분실물 이름을 입력하세요"
        value={itemName}
        onChange={handleNameChange}
      />
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySelect value={category} onChange={handleCategoryChange}>
        <option value="의류">의류</option>
        <option value="소지품">소지품</option>
        <option value="전자기기">전자기기</option>
        <option value="기타">기타</option>
      </CategorySelect>
      <Button onClick={handleSubmit}>게시</Button>
    </Container>
  );
};

export default NewLostItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
`;

const Placeholder = styled.p`
  color: #b0b0b0;
  font-size: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const NameTitle = styled.label`
  margin-top: 10px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const NameInput = styled.input`
  margin-top: 5px;
  padding: 8px;
  width: 400px;
  height: 40px;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 16px;
`;

const CategoryTitle = styled.label`
  margin-top: 15px;
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const CategorySelect = styled.select`
  margin-top: 5px;
  padding: 8px;
  width: 400px;
  height: 40px;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
`;

const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
