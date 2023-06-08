import React from 'react';

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <nav>
        <h2 className="sidebar__title">パターン</h2>
        <ul>
          <li>ALL</li>
          <li>タイラバ</li>
          <li>アジング</li>
          <li>陸から</li>
        </ul>
      </nav>
    </div>
  );
}
