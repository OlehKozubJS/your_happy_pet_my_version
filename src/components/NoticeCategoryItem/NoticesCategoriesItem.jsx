//import { useState } from 'react';
//import { Link } from 'react-router-dom';

const NoticesCategoriesItem = ({
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
    <div>
      <div>
        <img src={avatar} alt="" />
        <div>{category}</div>
        {isLoggedIn && (
          <button onClick={onAddToFavourite}>Add to favourite</button>
        )}
        {isLoggedIn && (
          <button onClick={onDeleteFromFavourite}>Remove from favourite</button>
        )}
        <div>
          <div>{location}</div>
          <div>{age}</div>
          <div>{sex}</div>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <button onClick={openModal}></button>
      </div>
    </div>
  );
};

export { NoticesCategoriesItem };
