import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useState } from 'react';
import Paginado from '../Paginado/Paginado';
import Filter from '../Filter/Filter';

const CardsContainer = () => {
  const getInfo = useSelector((state) => state.allCountries);
  const aux = useSelector((state) => state.aux);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(12);
  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  const currentCountries = getInfo.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  const currentCountriesFilter = aux.slice(
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
            allCountries={getInfo}
            aux={aux}
            paginado={paginado}
          />
        </div>
        <div className={style.filterContainer}>
          <Filter />
        </div>
        <div className={style.cards}>
          {currentCountriesFilter.length ? (
            <>
              {currentCountriesFilter.map((country, index) => (
                <div key={index}>
                  <Card
                    id={country.id}
                    name={country.name}
                    image={country.flagImage}
                    continent={country.continent}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {currentCountries.map((country, index) => (
                <div key={index}>
                  <Card
                    id={country.id}
                    name={country.name}
                    image={country.flagImage}
                    continent={country.continent}
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default CardsContainer;
