import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';
import { getApi } from '../../redux/actions/index';
import { useState } from 'react';
import style from './FormCreate.module.css';
import axios from 'axios';

const FormCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const countryName = useSelector((state) => state.allCountries);
  const [names] = useState([]);
  const [form, setForm] = useState({
    name: '',
    dificultad: 0,
    duracion: 0,
    temporada: '',
    countries: [],
  });
  const [errors, setErrors] = useState({
    name: '',
    dificultad: '',
    duracion: '',
    temporada: '',
    countries: '',
  });

  const validate = (name, value) => {
    if (name === 'name' && !form.name) {
      setErrors({
        ...errors,
        name: 'Minimo 3 caracteres',
      });
    } else if (name === 'name') {
      setErrors({ ...errors, name: '' });
    }
    if (name === 'dificultad' && !form.dificultad) {
      setErrors({ ...errors, dificultad: 'La dificultad es obligatoria' });
    } else if (name === 'dificultad') {
      setErrors({ ...errors, dificultad: '' });
    }
    if (name === 'duracion' && !form.duracion) {
      setErrors({ ...errors, duracion: 'La duración es obligatoria' });
    } else if (name === 'duracion') {
      setErrors({ ...errors, duracion: '' });
    }
    if (name === 'temporada' && form.temporada === '') {
      setErrors({ ...errors, temporada: 'La temporada es obligatoria' });
    } else if (name === 'temporada') {
      setErrors({ ...errors, temporada: '' });
    }
    if (name === 'countries' && !form.countries.length) {
      setErrors({ ...errors, countries: 'Debe seleccionar mínimo 1 país' });
    }
  };

  countryName?.filter((country) =>
    country.name ? names.push(country.name) : ''
  );

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  const handleDificultyChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, dificultad: Number(value) });
  };

  const handleDurationChange = (event) => {
    const value = event.target.value;
    setForm({ ...form, duracion: Number(value) });
  };

  const handleCountrySelect = (event) => {
    const value = event.target.value;
    const updatedCountries = [...form.countries];

    if (!updatedCountries.includes(value)) {
      if (value !== '') {
        updatedCountries.push(value);
      }
    } else {
      const index = updatedCountries.indexOf(value);
      updatedCountries.splice(index, 1);
    }
    if (value === '') {
      setForm({ ...form, countries: [] });
    } else {
      setForm({ ...form, countries: updatedCountries });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/activities', form)
      .then((res) => alert('Actividad creada correctamente'));
    setForm({
      ...form,
      name: '',
      dificultad: 0,
      duracion: 0,
      temporada: '',
      countries: [],
    });
  };

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.containerButtonBack}>
        <button
          className={style.buttonBack}
          onClick={() => {
            history.push('/home');
          }}
        >
          {' '}
          ◀ Back
        </button>
      </div>
      <div className={style.mainContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h1>Formulario Creación</h1>
          <div className={style.name}>
            <label>Nombre de actividad:</label>
            <input
              className={style.input}
              name='name'
              value={form.name}
              placeholder='Nombre de la actividad'
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className={style.dificultad}>
            <label>Dificultad:</label>
            <select
              name='dificultad'
              className={style.select}
              onChange={handleDificultyChange}
            >
              {errors.temporada && <p>{errors.temporada}</p>}
              <option value=''>Seleccione temporada</option>
              <option value='1'>⭐ ☆ ☆ ☆ ☆</option>
              <option value='2'>⭐⭐ ☆ ☆ ☆</option>
              <option value='3'>⭐⭐⭐ ☆ ☆</option>
              <option value='4'>⭐⭐⭐⭐ ☆</option>
              <option value='5'>⭐⭐⭐⭐⭐</option>
            </select>
          </div>
          <div className={style.duracion}>
            <label>Duración:</label>
            <select
              name='duracion'
              className={style.select}
              onChange={handleDurationChange}
            >
              <option value=''>Seleccione</option>
              <option value='0.25'>15 minutos</option>
              <option value='0.5'>30 minutos</option>
              <option value='1'>1 hora</option>
              <option value='2'>2 horas</option>
              <option value='3'>3 horas</option>
              <option value='4'>4 horas</option>
              <option value='5'>5 horas</option>
            </select>
          </div>
          <div className={style.temporadaAndCountries}>
            <label>Temporada:</label>
            <select
              className={style.select}
              name='temporada'
              onChange={handleChange}
            >
              <option value=''>Seleccione temporada</option>
              <option value='Verano'>Verano</option>
              <option value='Otoño'>Otoño</option>
              <option value='Invierno'>Invierno</option>
              <option value='Primavera'>Primavera</option>
            </select>
          </div>
          <div className={style.temporadaAndCountries}>
            <label>Paises:</label>
            <select
              className={style.select}
              name='countries'
              onChange={handleCountrySelect}
            >
              <option value=''>-Seleciona paises-</option>
              {names?.map((name, index) => {
                return (
                  <option key={index} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
            <div className={style.selectorDePaises}>
              <p>Paises seleccionados:</p>
              <div className={style.nameCountriesSelected}>
                {form.countries.map((country, index) => (
                  <p key={index}>{country}</p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button
              disabled={
                !form.name ||
                !form.dificultad ||
                !form.duracion ||
                !form.temporada ||
                !form.countries.length
              }
            >
              Create activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormCreate;
