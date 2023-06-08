import React, { useEffect, useState } from 'react';
import noItemImage from './images/noitem.png';

export default function Header(props) {
  const { itemId, itemName, categoryName, image } = props;

  const imgSrc = image ?? noItemImage;

  return (
    <div id={`item-${itemId}`} className="card">
      <div className="card__item-image-wrapper">
        <img className="card__item-image" src={imgSrc} alt="アイテム写真" />
      </div>
      <div className="card__item-name">{itemName}</div>
    </div>
  );
}
