import React from 'react';
import style from './Paginate.module.css';
import PageNumbers from './pageNumbers';

const Paginate = ({ countriesPage, allCountries, paginate, currentpage }) => {
  const arrayPage = PageNumbers(countriesPage, allCountries);

  return (
    <div className={style.paginate}>
      <nav>
        <ul className={style.paginate}>
          {arrayPage &&
            arrayPage.map((number) => (
              <div key={number}>
                {currentpage === number ? (
                  <button
                    className={style.numberPerPageSelected}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                ) : (
                  <button
                    className={style.numberPerPage}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </button>
                )}
              </div>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
