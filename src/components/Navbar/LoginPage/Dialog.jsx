import React from 'react';
import './Dialog.css';

function Dialog({ message, onConfirm, onCancel }) {
  return (
    <div className="dialog-backdrop">
      <div className="dialog-container">
        {/* Funny Image */}
        <div className="dialog-image">
          {/* You can replace the emoji with an actual image URL */}
          <span role="img" aria-label="sad-emoji">😭</span>
        </div>

        {/* Funny Message */}
        <p>{message}</p>

        {/* Emoji Buttons */}
        <div className="dialog-buttons">
          <button onClick={onCancel} className="cancel">😎 Stay</button>
          <button onClick={onConfirm} className="confirm">👋 Bye</button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;