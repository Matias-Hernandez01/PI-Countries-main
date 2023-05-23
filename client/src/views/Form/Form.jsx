import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getApi } from '../../redux/actions/index';
import { useState } from 'react';
import style from './Form.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = () => {
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

  countryName?.filter((country) => {
    if (country.name) {
      names.push(country.name);
    }
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
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
      if (value !== '-Seleciona paises-') {
        updatedCountries.push(value);
      }
    } else {
      const index = updatedCountries.indexOf(value);
      updatedCountries.splice(index, 1);
    }

    setForm({ ...form, countries: updatedCountries });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/activities', form)
      .then((res) => alert('Actividad creada correctamente'));
  };

  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
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
          ></input>
        </div>
        <div className={style.dificultad}>
          <label>Dificultad:</label>
          <select className={style.select} onChange={handleDificultyChange}>
            <option value='1'>⭐ ☆ ☆ ☆ ☆</option>
            <option value='2'>⭐⭐ ☆ ☆ ☆</option>
            <option value='3'>⭐⭐⭐ ☆ ☆</option>
            <option value='4'>⭐⭐⭐⭐ ☆</option>
            <option value='5'>⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div className={style.duracion}>
          <label>Duración:</label>
          <select className={style.select} onChange={handleDurationChange}>
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
            <option value='Verano'>Verano</option>
            <option value='Otoño'>Otoño</option>
            <option value='Invierno'>Invierno</option>
            <option value='Primavera'>Primavera</option>
          </select>
        </div>
        <div className={style.temporadaAndCountries}>
          <label>Paises:</label>
          <select className={style.select} onChange={handleCountrySelect}>
            <option>-Seleciona paises-</option>
            {names?.map((name, index) => {
              return (
                <option key={index} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <button
            onClick={() => {
              history.push('/home');
            }}
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
  );
};
export default Form;
