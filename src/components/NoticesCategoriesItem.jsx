import { useState } from 'react';
import { Link } from 'react-router-dom';

const NoticesCategoriesItem = ({ category, place, age, gender }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>{category}</div>
        <button></button>
        <button></button>
        <div>
          <div>{place}</div>
          <div>{age}</div>
          <div>{gender}</div>
        </div>
      </div>
      <div>
        <h3>Сute dog looking for a home</h3>
        <Link to="">Learn more</Link>
      </div>
    </div>
  );
};
