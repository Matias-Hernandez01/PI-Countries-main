import styles from './Landing.module.css';
import { useState } from 'react';
import argentina from '../../images/argentina.jpg';
import brazil from '../../images/brazil.jpg';
import uruguay from '../../images/uruguay.png';
import chile from '../../images/chile.png';
import colombia from '../../images/colombia.jpg';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
  });
  const [errors, setErrors] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
  });

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [name]: value,
    });
    validate(name, value);
  };

  const validate = (name, value) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regexContraseña = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (name === 'nombre' && value.length < 3) {
      setErrors({
        ...errors,
        nombre: 'El nombre debe contener mínimo 3 caracteres',
      });
    } else if (name === 'nombre') {
      setErrors({
        ...errors,
        nombre: '',
      });
    }
    if (name === 'correo' && !regexEmail.test(value)) {
      setErrors({
        ...errors,
        correo: 'El correo ingresado no es válido',
      });
    } else if (name === 'correo') {
      setErrors({
        ...errors,
        correo: '',
      });
    }
    if (name === 'contraseña' && !regexContraseña.test(value)) {
      setErrors({
        ...errors,
        contraseña:
          'La contraseña debe contener minimo 8 caracteres, 1 letra y un numero',
      });
    } else if (name === 'contraseña') {
      setErrors({ ...errors, contraseña: '' });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setForm({ ...form, nombre: '', correo: '', contraseña: '' });
    history.push('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerForms}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>Explora la tierra</h1>
        </div>
        <form onSubmit={handleOnSubmit} className={styles.forms}>
          <div>
            <label className={styles.label} htmlFor='nombre'>
              Nombre
            </label>
            <input
              className={styles.input}
              placeholder='Ingrese su nombre'
              type='text'
              name='nombre'
              value={form.nombre}
              onChange={handleOnChange}
            />
            {errors.nombre && <p>{errors.nombre}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor='correo'>
              Correo electrónico
            </label>
            <input
              className={styles.input}
              type='text'
              placeholder='Ingrese su correo electrónico'
              name='correo'
              value={form.correo}
              onChange={handleOnChange}
            />
            {errors.correo && <p>{errors.correo}</p>}
          </div>
          <div>
            <label className={styles.label} htmlFor='contraseña'>
              Contraseña
            </label>
            <input
              className={styles.input}
              type='password'
              placeholder='Ingrese su contraseña'
              name='contraseña'
              value={form.contraseña}
              onChange={handleOnChange}
            />{' '}
            {errors.contraseña && <p>{errors.contraseña}</p>}
          </div>
          <button
            disabled={
              !form.correo ||
              !form.contraseña ||
              !form.nombre ||
              errors.contraseña ||
              errors.nombre ||
              errors.correo
            }
          >
            Iniciar sesión
          </button>
        </form>
      </div>
      <div className={styles.containerSection}>
        <section className={styles.section}>
          <img src={argentina} alt='Argentina'></img>
          <img src={brazil} alt='Brazil'></img>
          <img src={uruguay} alt='Uruguay'></img>
          <img src={chile} alt='Chile'></img>
          <img src={colombia} alt='Perú'></img>
        </section>
      </div>
    </div>
  );
};
export default Landing;