import { useState } from 'react';
import { Link } from 'react-router-dom';

const NoticesCategoriesItem = ({
  title,
  category,
  avatar,
  location,
  age,
  sex,
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="" />
        <div>{category}</div>
        <button onClick={onAddToFavourite}></button>
        <button onClick={onDeleteFromFavourite}></button>
        <div>
          <div>{location}</div>
          <div>{age}</div>
          <div>{sex}</div>
        </div>
      </div>
      <div>
        <h3>{description}</h3>
        <Link to="">Learn more</Link>
      </div>
    </div>
  );
};

export { NoticesCategoriesItem };
