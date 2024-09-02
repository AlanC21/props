import React, { useState, useEffect } from 'react';
import styles from './NoteApp.module.css';

const NoteApp = () => {
  const [note, setNote] = useState('');
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  const handleChange = (e) => {
    setNote(e.target.value);
    if (timeoutId) clearTimeout(timeoutId);

    const newTimeoutId = setTimeout(() => {
      alert('Nota guardada automáticamente');
    }, 2000);

    setTimeoutId(newTimeoutId);
  };

  return (
    <div className={styles.noteApp}>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Escribe tus notas aquí..."
        className={styles.textarea}
      />
    </div>
  );
};

export default NoteApp;
