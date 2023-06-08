import React from 'react';

export default function Add(props) {
  const { showModal, setShowModal } = props;
  function handleaddItem() {
    setShowModal(!showModal);
  }

  return (
    <button className="add" onClick={handleaddItem}>
      +
    </button>
  );
}
