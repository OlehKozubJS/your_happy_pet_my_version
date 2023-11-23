import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';

const NoticesCategoriesList = ({ petsData }) => {
  return (
    <div>
      {petsData.map(petData => (
        <NoticesCategoriesItem
          title={petData.title}
          category={petData.category}
          avatar={petData.avatar}
          location={petData.location}
          age={petData.age}
          sex={petData.sex}
        />
      ))}
    </div>
  );
};

export { NoticesCategoriesList };
