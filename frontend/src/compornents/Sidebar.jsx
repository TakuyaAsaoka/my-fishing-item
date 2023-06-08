import React from 'react';

export default function Sidebar(props) {
  const { setState } = props;

  const handleState = (e) => setState(e.target.value);

  return (
    <div className="sidebar">
      <nav>
        <h2 className="sidebar__title">~ List ~</h2>
        <ul>
          <li>
            <button className="sidebar__button" value={''} onClick={handleState}>
              ALL
            </button>
          </li>
          <li>
            <button className="sidebar__button" value={1} onClick={handleState}>
              タイラバ
            </button>
          </li>
          <li>
            <button className="sidebar__button" value={2} onClick={handleState}>
              アジング
            </button>
          </li>
          <li>
            <button className="sidebar__button" value={3} onClick={handleState}>
              陸から
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
