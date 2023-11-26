//import { useState } from 'react';
//import { Link } from 'react-router-dom';

import {
  CategoryItem,
  CategoryItemHeader,
  CategoryItemFooter,
  CategoryItemImage,
  CategoryOutput,
  AddButton,
  RemoveButton,
  PetInfoOutput,
  PetInfoOutputItem,
  LearnMoreButton,
  TitleHeader,
} from './NoticesCategoriesItem.styled';

const NoticesCategoriesItem = ({
  isLoggedIn,
  title,
  category,
  avatar,
  location,
  age,
  sex,
}) => {
  const onAddToFavourite = () => {
    console.log('added to favourite');
  };

  const onDeleteFromFavourite = () => {
    console.log('removed from favourite');
  };

  const openModal = () => {
    console.log('modal opened');
  };

  return (
    <CategoryItem>
      <CategoryItemHeader>
        <CategoryItemImage src={avatar} alt="" />
        <CategoryOutput>{category}</CategoryOutput>
        {isLoggedIn && (
          <AddButton onClick={onAddToFavourite}>Add to favourite</AddButton>
        )}
        {isLoggedIn && (
          <RemoveButton onClick={onDeleteFromFavourite}>
            Remove from favourite
          </RemoveButton>
        )}
        <PetInfoOutput>
          <PetInfoOutputItem>{location}</PetInfoOutputItem>
          <PetInfoOutputItem>{age}</PetInfoOutputItem>
          <PetInfoOutputItem>{sex}</PetInfoOutputItem>
        </PetInfoOutput>
      </CategoryItemHeader>
      <CategoryItemHeader>
        <TitleHeader>{title}</TitleHeader>
        <LearnMoreButton onClick={openModal}>Learn More</LearnMoreButton>
      </CategoryItemHeader>
    </CategoryItem>
  );
};

export { NoticesCategoriesItem };
