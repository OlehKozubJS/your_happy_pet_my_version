import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';
import { CategoriesList } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ isLoggedIn, petsData }) => {
  return (
    <CategoriesList>
      {petsData.map(petData => (
        <NoticesCategoriesItem
          key={petData._id}
          id={petData._id}
          isLoggedIn={isLoggedIn}
          title={petData.title}
          category={petData.category}
          avatar={petData.avatar}
          location={petData.location}
          age={petData.age}
          sex={petData.sex}
        />
      ))}
    </CategoriesList>
  );
};

export { NoticesCategoriesList };
