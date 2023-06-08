import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';

export default function Delete(props) {
  const { serverUrl, selectedItem, setSelectedItem } = props;

  async function handleDeleteSelectedItem(e) {
    const method = 'DELETE';
    const body = { selectedItem };
    const headers = {
      'Content-Type': 'application/json',
    };
    const option = { method, headers, body: JSON.stringify(body) };
    console.log(body);
    await fetch(`${serverUrl}/api/items`, option);
    setSelectedItem([]);
  }

  return (
    <button className="delete" onClick={handleDeleteSelectedItem}>
      <BsFillTrash3Fill size="3em" />
    </button>
  );
}
