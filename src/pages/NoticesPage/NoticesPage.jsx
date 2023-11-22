/*import { ModalNotice } from '../../components/ModalNotice/ModalNotice';
import { ModalNoticeMore } from '../../components/ModalNotice/ModalNoticeMore';
import { ModalNoticeRemove } from '../../components/ModalNotice/ModalNoticeRemove';
import { Link } from 'react-router-dom';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';*/
import { NoticesFilters } from '../../components/NoticesFilters/NoticesFilters';
//import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';

const petsData = [
  {
    id: 'pet-01',
    name: 'Dog',
    type: 'friendly',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'in good hands',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2022-07-09',
    gender: 'female',
    description: 'Сute dog looking for a home',
  },
  {
    id: 'pet-02',
    name: 'Cat',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'lost/found',
    place: 'Lviv',
    dateOfBirth: '2013-04-29',
    gender: 'female',
    description: 'Сute cat looking for a home',
  },
  {
    id: 'pet-03',
    name: 'Mouse',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'favorite ads',
    place: 'Khmelnytskyi',
    dateOfBirth: '2015-03-13',
    gender: 'female',
    description: 'Сute mouse looking for a home',
  },
  {
    id: 'pet-04',
    name: 'Frog',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'my ads',
    place: 'Lviv',
    dateOfBirth: '2019-06-06',
    gender: 'female',
    description: 'Сute frog looking for a home',
  },
  {
    id: 'pet-05',
    name: 'Bat',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'sell',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2023-02-24',
    gender: 'male',
    description: 'Сute bat looking for a home',
  },
  {
    id: 'pet-06',
    name: 'Elephant',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'in good hands',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2023-03-02',
    gender: 'female',
    description: 'Сute elephant looking for a home',
  },
  {
    id: 'pet-07',
    name: 'Lion',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'lost/found',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2022-04-18',
    gender: 'female',
    description: 'Сute lion looking for a home',
  },
  {
    id: 'pet-08',
    name: 'Fox',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'my ads',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2016-09-01',
    gender: 'male',
    description: 'Сute fox looking for a home',
  },
  {
    id: 'pet-09',
    name: 'Blue Whale',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'in good hands',
    place: 'Chernivtsi',
    dateOfBirth: '2023-08-06',
    gender: 'female',
    description: 'Сute blue whale looking for a home',
  },
  {
    id: 'pet-10',
    name: 'Rabbit',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'favorite ads',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2022-11-10',
    gender: 'male',
    description: 'Сute rabbit looking for a home',
  },
  {
    id: 'pet-11',
    name: 'Hedgehog',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'in good hands',
    place: 'Ivano - Frankivsk',
    dateOfBirth: '2023-01-30',
    gender: 'female',
    description: 'Сute hedgehog looking for a home',
  },
  {
    id: 'pet-12',
    name: 'Fish',
    imageLink:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    category: 'lost/found',
    place: 'Zaporizhzhia',
    dateOfBirth: '2020-12-16',
    gender: 'male',
    description: 'Сute fish looking for a home',
  },
];

const NoticesPage = () => {
  const calcYearDifference = oldDate => {
    const newDate = new Date();
    const dateDifference = new Date(newDate - oldDate);
    const diffYears = dateDifference.getFullYear() - 1970;
    return diffYears;
  };

  return (
    <div>
      <h2>Find your favorite pet</h2>

      <div>
        <NoticesFilters onChange={data => console.log(data)} />
      </div>
    </div>
  );
};
/*
<NoticesSearch />
<NoticesCategoriesList data={petsData} />
<NoticesCategoriesNav />
<Link to="">Add pet</Link>
*/
export { NoticesPage };
