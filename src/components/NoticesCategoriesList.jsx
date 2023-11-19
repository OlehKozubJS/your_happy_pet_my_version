import { NoticesCategoriesItem } from './NoticesCategoriesItem';

const NoticesCategoriesList = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <NoticesCategoriesItem />
      ))}
    </div>
  );
};
