import React from 'react';
import style from './Paginado.module.css';

const Paginado = ({ countriesPerPage, allCountries, aux, paginado }) => {
  const pageNumber = [];
  const result = aux.length ? aux : allCountries;

  for (let i = 0; i <= Math.ceil(result.length / countriesPerPage); i++) {
    if (i === Math.ceil(result.length / countriesPerPage) - 1) {
      pageNumber.push(i + 1);
      break;
    } else {
      pageNumber.push(i + 1);
    }
  }

  return (
    <nav className={style.paginado}>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <li className={style.numberPerPage} key={number}>
              <a
                className={style.number}
                onClick={() => {
                  paginado(number);
                }}
              >
                {number}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
