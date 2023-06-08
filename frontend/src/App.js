import React, { useState } from 'react';
import Header from './compornents/Header';
import Sidebar from './compornents/Sidebar';
import List from './compornents/List';
import Footer from './compornents/Footer';
import Modal from './compornents/Modal';
import './App.css';
import './compornents/styles/Header.css';
import './compornents/styles/Sidebar.css';
import './compornents/styles/List.css';
import './compornents/styles/Add.css';
import './compornents/styles/Card.css';
import './compornents/styles/Footer.css';
import './compornents/styles/Modal.css';

export function App() {
  const serverUrl = 'http://localhost:8080';

  // 初期はALL選択状態
  const [state, setState] = useState('2');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Sidebar setState={setState} />
        <List
          serverUrl={serverUrl}
          state={state}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </main>
      <Footer />
      {showModal ? <Modal serverUrl={serverUrl} setShowModal={setShowModal} /> : null}
    </div>
  );
}

export default App;
