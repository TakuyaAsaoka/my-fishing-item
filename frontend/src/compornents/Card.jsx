import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import noItemImage from './images/noitem.png';
import logo from './images/logo.png';

export default function Header(props) {
  const { itemName, categoryName, image } = props;

  const imgSrc = image ?? noItemImage;

  return (
    <div className="card">
      <div className="card__item-image-wrapper">
        <img className="card__item-image" src={imgSrc} alt="アイテム写真" />
      </div>
      <div className="card__item-name">{itemName}</div>
    </div>
  );
}
