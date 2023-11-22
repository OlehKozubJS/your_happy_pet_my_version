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
    _id: 'pet-01',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute dog looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2022-07-09',
    sex: 'female',
    name: 'Dog',
    breed: 'friendly',
    price: '0',
    favourite: true,
    description0: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'in good hands',
  },
  {
    _id: 'pet-02',
    name: 'Cat',
    breed: 'lazy',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    place: 'Lviv',
    petBirthday: '2013-04-29',
    sex: 'female',
    title: 'Сute cat looking for a home',
    category: 'lost/found',
  },
  {
    _id: 'pet-03',
    name: 'Mouse',
    breed: 'sneaky',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Khmelnytskyi',
    petBirthday: '2015-03-13',
    sex: 'female',
    title: 'Сute mouse looking for a home',
    category: 'favorite ads',
  },
  {
    _id: 'pet-04',
    name: 'Frog',
    breed: 'clumsy',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Lviv',
    petBirthday: '2019-06-06',
    sex: 'female',
    title: 'Сute frog looking for a home',
    category: 'my ads',
  },
  {
    _id: 'pet-05',
    name: 'Bat',
    breed: 'scary',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Ivano - Frankivsk',
    petBirthday: '2023-02-24',
    sex: 'male',
    title: 'Сute bat looking for a home',
    category: 'sell',
  },
  {
    _id: 'pet-06',
    name: 'Elephant',
    breed: 'big',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Ivano - Frankivsk',
    petBirthday: '2023-03-02',
    sex: 'female',
    title: 'Сute elephant looking for a home',
    category: 'in good hands',
  },
  {
    _id: 'pet-07',
    name: 'Lion',
    breed: 'brave',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Ivano - Frankivsk',
    petBirthday: '2022-04-18',
    sex: 'female',
    title: 'Сute lion looking for a home',
    category: 'lost/found',
  },
  {
    _id: 'pet-08',
    name: 'Fox',
    breed: 'cunning',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Ivano - Frankivsk',
    petBirthday: '2016-09-01',
    sex: 'male',
    title: 'Сute fox looking for a home',
    category: 'my ads',
  },
  {
    _id: 'pet-09',
    name: 'Blue Whale',
    breed: 'giant',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Chernivtsi',
    petBirthday: '2023-08-06',
    sex: 'female',
    title: 'Сute blue whale looking for a home',
    category: 'in good hands',
  },
  {
    _id: 'pet-10',
    name: 'Rabbit',
    breed: 'fast',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Ivano - Frankivsk',
    petBirthday: '2022-11-10',
    sex: 'male',
    title: 'Сute rabbit looking for a home',
    category: 'favorite ads',
  },
  {
    _id: 'pet-11',
    name: 'Hedgehog',
    breed: 'spiky',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',

    place: 'Ivano - Frankivsk',
    petBirthday: '2023-01-30',
    sex: 'female',
    title: 'Сute hedgehog looking for a home',
    category: 'in good hands',
  },
  {
    _id: 'pet-12',
    name: 'Fish',
    breed: 'floatable',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    place: 'Zaporizhzhia',
    petBirthday: '2020-12-16',
    sex: 'male',
    title: 'Сute fish looking for a home',
    category: 'lost/found',
  },
];

const NoticesPage = () => {
  /*const calcYearDifference = oldDate => {
    const newDate = new Date();
    const dateDifference = new Date(newDate - oldDate);
    const diffYears = dateDifference.getFullYear() - 1970;
    return diffYears;
  };*/

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
