import React from 'react';
import { AiFillFileAdd } from 'react-icons/ai';

export default function Register(props) {
  const { serverUrl, selectedItem, setSelectedItem, tableId } = props;

  async function handleDeleteSelectedItem(e) {
    const method = 'POST';
    const body = { selectedItem };
    const headers = {
      'Content-Type': 'application/json',
    };
    const option = { method, headers, body: JSON.stringify(body) };
    await fetch(`${serverUrl}/api/items/${tableId}`, option);
    setSelectedItem([]);
  }

  return (
    <button className="register" onClick={handleDeleteSelectedItem}>
      <AiFillFileAdd size="3em" />
    </button>
  );
}
