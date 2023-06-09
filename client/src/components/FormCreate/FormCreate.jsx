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
    let error = '';

    if (name === 'name') {
      if (!value) {
        error = 'El nombre es obligatorio';
      } else if (value.length < 3) {
        error = 'Debe tener al menos 3 caracteres';
      }
    } else if (name === 'dificultad') {
      if (value < 1) {
        error = 'La dificultad es obligatoria';
      }
    } else if (name === 'duracion') {
      if (value === 'Seleccione') {
        error = 'La duración es obligatoria';
      }
    } else if (name === 'temporada') {
      if (value === '') {
        error = 'La temporada es obligatoria';
      }
    } else if (name === 'countries') {
      if (!value) {
        error = 'Debe seleccionar al menos un país';
      }
    }

    setErrors({ ...errors, [name]: error });
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
    const name = event.target.name;
    setForm({ ...form, dificultad: Number(value) });
    validate(name, value);
  };

  const handleDurationChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setForm({ ...form, duracion: Number(value) });
    validate(name, value);
  };

  const handleCountrySelect = (event) => {
    const value = event.target.value;
    const name = event.target.name;
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
    validate(name, value);
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

  const deletedCountry = (value) => {
    form.countries.filter((country) => country !== value);
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
            {errors.name && <p className={style.error}>{errors.name}</p>}
          </div>
          <div className={style.dificultad}>
            <label>Dificultad:</label>
            <select
              name='dificultad'
              className={style.select}
              onChange={handleDificultyChange}
            >
              <option value=''>Seleccione dificultad</option>
              <option value='1'>⭐ ☆ ☆ ☆ ☆</option>
              <option value='2'>⭐⭐ ☆ ☆ ☆</option>
              <option value='3'>⭐⭐⭐ ☆ ☆</option>
              <option value='4'>⭐⭐⭐⭐ ☆</option>
              <option value='5'>⭐⭐⭐⭐⭐</option>
            </select>
            {errors.dificultad && (
              <p className={style.error}>{errors.dificultad}</p>
            )}
          </div>
          <div className={style.duracion}>
            <label>Duración:</label>
            <select
              name='duracion'
              className={style.select}
              onChange={handleDurationChange}
            >
              <option value='Seleccione'>Seleccione</option>
              <option value='0.25'>15 minutos</option>
              <option value='0.5'>30 minutos</option>
              <option value='1'>1 hora</option>
              <option value='2'>2 horas</option>
              <option value='3'>3 horas</option>
              <option value='4'>4 horas</option>
              <option value='5'>5 horas</option>
            </select>
            {errors.duracion && (
              <p className={style.error}>{errors.duracion}</p>
            )}
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
            {errors.temporada && (
              <p className={style.error}>{errors.temporada}</p>
            )}
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
            {errors.countries && (
              <p className={style.error}>{errors.countries}</p>
            )}
            <p className={style.selectedPaises}>Paises seleccionados:</p>
            <div className={style.selectorDePaises}>
              <div className={style.nameCountriesSelected}>
                {form.countries.map((country, index) => (
                  <p className={style.nombrePaises} key={index}>
                    {country}
                    <button onClick={() => deletedCountry(country)}>x</button>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            {!form.name ||
            !form.dificultad ||
            !form.duracion ||
            !form.temporada.length ||
            form.name.length < 3 ||
            !form.countries.length ? (
              <button disabled={true}>Create Activity</button>
            ) : (
              <button className={style.buttonOk}>Create Activity</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormCreate;
