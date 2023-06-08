import React from 'react';
import noItemImage from './images/noitem.png';

export default function Card(props) {
  const { itemId, itemName, categoryName, image, selectedItem, setSelectedItem } = props;

  const imgSrc = image ?? noItemImage;

  function handleSelectedItem(e) {
    const clickedItemId = Number(e.currentTarget.id.split('-')[1]);
    // ステート更新関数
    if (selectedItem.includes(clickedItemId)) {
      const result = selectedItem.filter((elm) => elm !== clickedItemId);
      setSelectedItem(result);
    } else {
      setSelectedItem([...selectedItem, clickedItemId]);
    }
    // クラスの付け替え
    if (e.target.closest('.card').classList.contains('selected')) {
      e.target.closest('.card').classList.remove('selected');
    } else {
      e.target.closest('.card').classList.add('selected');
    }
  }

  return (
    <div id={`item-${itemId}`} className="card" onClick={handleSelectedItem}>
      <div className="card__item-image-wrapper">
        <img className="card__item-image" src={imgSrc} alt="アイテム写真" />
      </div>
      <div className="card__item-name">{itemName}</div>
    </div>
  );
}
