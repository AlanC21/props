import React, { useState } from 'react';
import styles from './NumberGuessingGame.module.css';

const NumberGuessingGame = () => {
  // Número aleatorio que el usuario debe adivinar
  const [numberToGuess, setNumberToGuess] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false); // Estado para controlar si el juego ha terminado

  // Lógica para manejar las adivinanzas
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const userGuess = parseInt(guess, 10); // Convertir la entrada del usuario a número

    // Incrementamos los intentos en cada intento fallido o correcto
    setAttempts((prevAttempts) => prevAttempts + 1);

    // Verificamos si el intento es mayor, menor o correcto
    if (userGuess > numberToGuess) {
      setMessage('Más bajo');
    } else if (userGuess < numberToGuess) {
      setMessage('Más alto');
    } else {
      setMessage(`¡Lo adivinaste en ${attempts + 1} intentos!`);
      setGameOver(true); // Marcar que el juego ha terminado
    }
  };

  // Función para reiniciar el juego
  const handleReset = () => {
    setNumberToGuess(Math.floor(Math.random() * 100) + 1); // Genera un nuevo número aleatorio
    setGuess(''); // Reinicia el campo de entrada
    setMessage(''); // Limpia el mensaje
    setAttempts(0); // Reinicia los intentos
    setGameOver(false); // Marca el juego como no terminado
  };

  return (
    <div className={styles.game}>
      <h3>Intenta adivinar el numero!!</h3>
      {message !== `¡Lo adivinaste en ${attempts} intentos!` && (
        <p className={styles.message}>Intentos: {attempts}</p>
      )}
      <form onSubmit={handleSubmit} onReset={handleReset} className={styles.inputContainer}>
        <input
          type="number"
          min={0}
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className={styles.input}
          disabled={gameOver}
        />
        <button type="submit" className={styles.submitButton}>Adivinar</button>
        {gameOver && (<button type="reset" className={styles.resetButton}>Reiniciar</button>)}

      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default NumberGuessingGame;
