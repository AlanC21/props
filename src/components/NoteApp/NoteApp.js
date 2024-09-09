import React, { useState } from 'react';
import styles from './NoteApp.module.css';

const NoteApp = () => {
  const [note, setNote] = useState('');
  const [savedNote, setSavedNote] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    setSavedNote(note); // Guarda la nota actual
    setStatusMessage('Guardado'); // Muestra el mensaje de guardado

    // Limpia el mensaje de estado después de 5 segundos
    setTimeout(() => {
      setStatusMessage('');
    }, 5000); // 5 segundos
  };

  return (
    <div className={styles.noteApp}>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Escribe tus notas aquí..."
        className={styles.textarea}
      />
      <div className={styles.container}>
        <div className={styles.text}>
          <label>{statusMessage}</label>
          {savedNote && <p>Nota guardada: {savedNote}</p>}
        </div>
        <button onClick={handleSave} className={styles.saveButton}>Guardar</button>
      </div>
    </div>
  );
};

export default NoteApp;
