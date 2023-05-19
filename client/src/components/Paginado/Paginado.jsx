import React from 'react';
import style from './Paginado.module.css';

const Paginado = ({ countriesPerPage, allCountries, paginado }) => {
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  return (
    <nav className={style.paginado}>
      <ul>
        {pageNumber &&
          pageNumber.map((number) => (
            <ul className={style.numberPerPage} key={number}>
              <a
                className={style.number}
                onClick={() => {
                  paginado(number);
                }}
              >
                {number}
              </a>
            </ul>
          ))}
      </ul>
    </nav>
  );
};

export default Paginado;
