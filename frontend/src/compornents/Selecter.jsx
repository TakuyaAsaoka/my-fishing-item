import React from 'react';

export default function Selecter(props) {
  const { tableId, setTableId } = props;

  function handleTableId(e) {
    setTableId(e.target.value);
  }

  return (
    <div className="selecter">
      <select className="selecter__select" defaultValue="" onChange={handleTableId} value={tableId}>
        <option value="" disabled>
          パターンを選択
        </option>
        <option value={1}>タイラバ</option>
        <option value={2}>アジング</option>
        <option value={3}>陸から</option>
      </select>
    </div>
  );
}
