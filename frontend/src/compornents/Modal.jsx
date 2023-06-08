import React, { useState } from 'react';
import noItemImage from './images/noitem.png';
import { TiDelete } from 'react-icons/ti';

export default function Modal(props) {
  const { serverUrl, setShowModal } = props;

  const [categoryId, setCategoryId] = useState();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  // ステート更新関数
  const handleCategory = (e) => setCategoryId(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleQuantity = (e) => setQuantity(e.target.value);
  const handleCloseModal = () => setShowModal(false);

  // 新規アイテム追加
  async function postNewItem() {
    const method = 'POST';
    const body = {
      categoryId,
      name,
      quantity,
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    const option = { method, headers, body: JSON.stringify(body) };
    await fetch(`${serverUrl}/api/items`, option);
    setCategoryId('');
    setName('');
    setQuantity(0);
  }

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__button-clear" onClick={handleCloseModal}>
          <TiDelete color="rgb(85,85,85)" size="2em" />
        </button>
        <div className="modal__image-wrapper">
          <img className="modal__image" src={noItemImage} alt="新規アイテム" />
        </div>
        <div className="modal__content-input-wrapper">
          <label>カテゴリー</label>
          <select
            className="modal__category"
            defaultValue=""
            onChange={handleCategory}
            value={categoryId}
          >
            <option value="" disabled>
              カテゴリーを選択してください
            </option>
            <option value={1}>ロッド</option>
            <option value={2}>リール</option>
            <option value={3}>ルアー</option>
            <option value={4}>ウキ</option>
            <option value={5}>おもり</option>
            <option value={6}>ライン</option>
            <option value={7}>針</option>
            <option value={8}>その他</option>
          </select>
          <label>名前</label>
          <input
            type="text"
            placeholder="名前を入力してください"
            onChange={handleName}
            value={name}
          />
          <label>数量</label>
          <input type="number" onChange={handleQuantity} value={quantity} />
          <button className="modal__button" onClick={postNewItem}>
            アイテムを登録する
          </button>
        </div>
      </div>
    </div>
  );
}
