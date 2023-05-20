import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useState } from 'react';
import Paginado from '../Paginado/Paginado';
import Filter from '../Filter/Filter';

const CardsContainer = () => {
  console.log('Holas');
  const getInfo = useSelector((state) => state.allCountries);
  //*Pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  //*Paises por pagina => 10 en mi caso
  const [countryPerPage, setCountryPer] = useState(12);
  //*Indice del ultimo pais, multiplicando pagina actual * paises por pagina.
  const indexOfLastCountry = currentPage * countryPerPage;
  //*Indice del primer pais, multiplicando pagina
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const currentCountries = getInfo.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.paginado}>
          <Paginado
            countriesPerPage={countryPerPage}
            allCountries={getInfo.length}
            paginado={paginado}
          />
        </div>
        <Filter />
        <div className={style.cards}>
          {currentCountries?.map((country, index) => {
            return (
              <div key={index}>
                <Card
                  name={country.name}
                  image={country.flagImage}
                  continent={country.continent}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CardsContainer;
