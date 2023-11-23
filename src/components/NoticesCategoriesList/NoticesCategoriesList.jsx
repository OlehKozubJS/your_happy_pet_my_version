import { NoticesCategoriesItem } from '../../components/NoticeCategoryItem/NoticesCategoriesItem';

const NoticesCategoriesList = ({ petsData }) => {
  return (
    <div>
      {petsData.map(petData => (
        <NoticesCategoriesItem petData={petData} />
      ))}
    </div>
  );
};

export { NoticesCategoriesList };
