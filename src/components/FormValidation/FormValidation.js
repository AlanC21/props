import React, { useState } from 'react';
import styles from './FormValidation.module.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && value.trim() === '') {
      error = 'El nombre es obligatorio.';
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Correo electrónico no válido.';
    }
    if (name === 'password' && value.length < 6) {
      error = 'La contraseña debe tener al menos 6 caracteres.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  return (
    <form className={styles.form}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className={styles.error}>{errors.password}</span>}
      </div>
    </form>
  );
};

export default FormValidation;
