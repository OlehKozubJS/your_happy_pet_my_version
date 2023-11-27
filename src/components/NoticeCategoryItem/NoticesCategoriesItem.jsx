import icons from '../../images/symbol-defs.svg';

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
  id,
  onAddToFavourite,
  onDeleteFromFavourite,
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
          <AddButton onClick={onAddToFavourite}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={`${icons}#heart`} />
            </svg>
          </AddButton>
        )}
        {isLoggedIn && (
          <RemoveButton onClick={onDeleteFromFavourite}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <use xlinkHref={`${icons}#trash-2`} />
            </svg>
          </RemoveButton>
        )}
        <PetInfoOutput>
          <PetInfoOutputItem>{location}</PetInfoOutputItem>
          <PetInfoOutputItem>{age}</PetInfoOutputItem>
          <PetInfoOutputItem>{sex}</PetInfoOutputItem>
        </PetInfoOutput>
      </CategoryItemHeader>
      <CategoryItemFooter>
        <TitleHeader>{title}</TitleHeader>
        <LearnMoreButton onClick={openModal}>
          Learn More
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <use xlinkHref={`${icons}#pawprint-1`} />
          </svg>
        </LearnMoreButton>
      </CategoryItemFooter>
    </CategoryItem>
  );
};

export { NoticesCategoriesItem };
