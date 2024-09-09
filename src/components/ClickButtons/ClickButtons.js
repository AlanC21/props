import React from 'react';
import styles from './ClickButtons.module.css';

const ClickButtons = () => {
  // Manejadores de eventos, solo con alertas
  const handleClick = () => {
    alert('Evento onClick: Botón clickeado!');
  };

  const handleDoubleClick = () => {
    alert('Evento onDoubleClick: Botón doble clickeado!');
  };

  const handleFocus = (e) => {
    alert('Evento onFocus: El botón tiene el foco!');
    e.target.blur();
  };

  const handleMouseEnter = () => {
    alert('Evento onMouseEnter: El mouse está sobre el botón!');
  };

  const handleMouseLeave = () => {
    alert('Evento onMouseLeave: El mouse salió del botón!');
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Previene el menú contextual
    alert('Evento onContextMenu: Se hizo clic derecho en el botón!');
  };

  return (
    <div className={styles.wrapper}>
      {/* Botón para onClick */}
      <div className={styles.box}>
        <button className={styles.button} onClick={handleClick}>
          Boton un Click
        </button>
      </div>

      {/* Botón para onDoubleClick */}
      <div className={styles.box}>
        <button className={styles.button} onDoubleClick={handleDoubleClick}>
          Boton Doble Click
        </button>
      </div>

      {/* Botón para onFocus */}
      <div className={styles.box}>
        <button className={styles.button} onFocus={handleFocus}>
          Boton con Focus
        </button>
      </div>

      {/* Botón para onMouseEnter */}
      <div className={styles.box}>
        <button className={styles.button} onMouseEnter={handleMouseEnter}>
          Mouse Enter
        </button>
      </div>

      {/* Botón para onMouseLeave */}
      <div className={styles.box}>
        <button className={styles.button} onMouseLeave={handleMouseLeave}>
          Mouse Leave
        </button>
      </div>

      {/* Botón para onContextMenu */}
      <div className={styles.box}>
        <button className={styles.button} onContextMenu={handleContextMenu}>
          Boton Click Derecho
        </button>
      </div>
    </div>
  );
};

export default ClickButtons;