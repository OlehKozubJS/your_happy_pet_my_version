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
    price: '0$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'in good hands',
  },
  {
    _id: 'pet-02',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute cat looking for a home',
    location: 'Lviv',
    petBirthday: '2013-04-29',
    sex: 'female',
    name: 'Cat',
    breed: 'lazy',
    price: '50$',
    favourite: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'lost/found',
  },
  {
    _id: 'pet-03',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute mouse looking for a home',
    location: 'Khmelnytskyi',
    petBirthday: '2015-03-13',
    sex: 'female',
    name: 'Mouse',
    breed: 'sneaky',
    price: '100$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'favorite ads',
  },
  {
    _id: 'pet-04',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute frog looking for a home',
    location: 'Lviv',
    petBirthday: '2019-06-06',
    sex: 'female',
    name: 'Frog',
    breed: 'clumsy',
    price: '0$',
    favourite: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'my ads',
  },
  {
    _id: 'pet-05',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute bat looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2023-02-24',
    sex: 'male',
    name: 'Bat',
    breed: 'scary',
    price: '50$',
    favourite: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'sell',
  },
  {
    _id: 'pet-06',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute elephant looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2023-03-02',
    sex: 'female',
    name: 'Elephant',
    breed: 'big',
    price: '100$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'in good hands',
  },
  {
    _id: 'pet-07',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute lion looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2022-04-18',
    sex: 'female',
    name: 'Lion',
    breed: 'brave',
    price: '0$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'lost/found',
  },
  {
    _id: 'pet-08',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute fox looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2016-09-01',
    sex: 'male',
    name: 'Fox',
    breed: 'cunning',
    price: '50$',
    favourite: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'my ads',
  },
  {
    _id: 'pet-09',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute blue whale looking for a home',
    location: 'Chernivtsi',
    petBirthday: '2023-08-06',
    sex: 'female',
    name: 'Blue Whale',
    breed: 'giant',
    price: '100$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'in good hands',
  },
  {
    _id: 'pet-10',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute rabbit looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2022-11-10',
    sex: 'male',
    name: 'Rabbit',
    breed: 'fast',
    price: '0$',
    favourite: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'favorite ads',
  },
  {
    _id: 'pet-11',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute hedgehog looking for a home',
    location: 'Ivano - Frankivsk',
    petBirthday: '2023-01-30',
    sex: 'female',
    name: 'Hedgehog',
    breed: 'spiky',
    price: '50$',
    favourite: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'in good hands',
  },
  {
    _id: 'pet-12',
    avatar:
      'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    title: 'Сute fish looking for a home',
    location: 'Zaporizhzhia',
    petBirthday: '2020-12-16',
    sex: 'male',
    name: 'Fish',
    breed: 'floatable',
    price: '100$',
    favourite: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
