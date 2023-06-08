import React, { useState, useEffect } from 'react';
import Add from './Add';
import Card from './Card';

export default function List(props) {
  const { serverUrl, state, selectedItem, setSelectedItem, showModal, setShowModal } = props;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let items;
    async function fetchData() {
      const response = await fetch(`${serverUrl}/api/items/${state}`);
      const jsonItems = await response.text();
      items = JSON.parse(jsonItems);
      const result = items.map((item) => (
        <Card
          itemId={item.item_id}
          itemName={item.item_name}
          categoryName={item.category_name}
          image={item.image}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ));
      setCards(result);
    }
    fetchData();
  }, [state, selectedItem, showModal]);

  return (
    <div className="list">
      <Add showModal={showModal} setShowModal={setShowModal} />
      {cards}
    </div>
  );
}
