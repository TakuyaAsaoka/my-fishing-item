import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import userPhoto from './images/user-photo.jpg';
import logo from './images/logo.png';

export default function Header(props) {
  const [searchWord, setSearchWord] = useState('');

  // 検索ワードのステート更新
  const handleSearchWord = (e) => setSearchWord(e.currentTarget.value);

  // 検索ワードのステートクリア
  const handleSearchWordClear = () => setSearchWord('');

  return (
    <header>
      <div className="header__title-wrapper">
        <div className="header__title-logo-wrapper">
          <img className="header__title-logo" src={logo} alt="ロゴ" />
        </div>
        <h1 className="header__title">My Fishing Item</h1>
      </div>
      <div className="header__search-wrapper">
        <FaSearch color="rgb(85,85,85)" size="1.2em" />
        <input
          type="text"
          className="header__search-box"
          placeholder="名前またはタグで検索"
          value={searchWord}
          onChange={handleSearchWord}
        ></input>
        {searchWord ? (
          <button className="header__search-clear" onClick={handleSearchWordClear}>
            <TiDelete color="rgb(85,85,85)" size="1.6em" />
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="header__user-wrapper">
        <div className="header__user-photo-wrapper">
          <img className="header__user-photo" src={userPhoto} alt="ユーザー写真" />
        </div>
        <span className="header__user-name">Asaokaさん</span>
      </div>
    </header>
  );
}
