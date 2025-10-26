import React, { useState } from "react";
import "./ModalExample.css"; // CSS faylini import qilamiz

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false); // modal holati

  return (
    <div className="App">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Modalni ochish
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Modal oynasi</h2>
            <p>Salom, bu modal oynasi!</p>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalExample;
