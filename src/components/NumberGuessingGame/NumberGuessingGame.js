import React, { useState } from 'react';
import styles from './NumberGuessingGame.module.css';

const NumberGuessingGame = () => {
  const [numberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess, 10);
    if (userGuess > numberToGuess) {
      setMessage('Más bajo');
    } else if (userGuess < numberToGuess) {
      setMessage('Más alto');
    } else {
      setMessage('¡Correcto!');
    }
  };

  return (
    <div className={styles.game}>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Adivinar</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default NumberGuessingGame;
