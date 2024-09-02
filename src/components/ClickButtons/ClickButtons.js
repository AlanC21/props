import React from 'react';
import styles from './ClickButtons.module.css';

const ClickButtons = () => {
  const handleClick = () => {
    alert('Botón clickeado!');
  };

  const handleDoubleClick = () => {
    alert('Botón doble clickeado!');
  };

  return (
    <div className={styles.container}>
      <button onClick={handleClick} onDoubleClick={handleDoubleClick} className={styles.button}>
        Haz clic o doble clic
      </button>
    </div>
  );
};

export default ClickButtons;
