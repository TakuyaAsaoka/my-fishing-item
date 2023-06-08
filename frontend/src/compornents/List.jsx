import React, { useState, useEffect } from 'react';
import Add from './Add';
import Card from './Card';

export default function List(props) {
  const { serverUrl, state, showModal, setShowModal } = props;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let items;
    async function fetchData() {
      const tableId = state === '' ? state : state.split('-')[1];
      const response = await fetch(`${serverUrl}/api/items/${tableId}`);
      const jsonItems = await response.text();
      items = JSON.parse(jsonItems);
      const result = items.map((item) => (
        <Card itemName={item.item_name} categoryName={item.category_name} image={item.image} />
      ));
      setCards(result);
    }
    fetchData();
  }, []);

  return (
    <div className="list">
      <Add showModal={showModal} setShowModal={setShowModal} />
      {cards}
    </div>
  );
}
