import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';
import { useState } from 'react';
import Filter from '../Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getActivities, getApi } from '../../redux/actions';
import Paginate from '../Paginate/Paginate';
import PageNumbers from '../Paginate/pageNumbers';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const dependencia = useSelector((state) => state.aux);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPage] = useState(12);
  const indexLastCountry = currentPage * countriesPage;
  const indexFirstCountry = indexLastCountry - countriesPage;
  const currentCountries = dependencia.slice(
    indexFirstCountry,
    indexLastCountry
  );
  const cantCountries = dependencia.length;

  const arrayPages = PageNumbers(countriesPage, cantCountries);
  const cantPages = arrayPages.length;

  useEffect(() => {
    dispatch(getApi());
    dispatch(getActivities());
  }, [dispatch]);

  if (currentPage > cantPages) {
    setCurrentPage(1);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.paginado}>
          <Paginate
            countriesPage={countriesPage}
            allCountries={dependencia.length}
            paginate={paginate}
            currentpage={currentPage}
          />
        </div>
        <div className={style.filterContainer}>
          <Filter />
        </div>
        <div className={style.cards}>
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
        </div>
      </div>
    </>
  );
};
export default CardsContainer;
