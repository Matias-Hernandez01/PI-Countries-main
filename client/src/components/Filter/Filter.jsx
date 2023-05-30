import React, { useState, useEffect } from 'react';
import { filter, getActivities, filterByActivities } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './Filter.module.css';
import { getApi } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);
  const allCountries = useSelector((state) => state.aux);
  const [nameActivity] = useState([]);

  allActivities?.filter((activity) =>
    activity ? nameActivity.push(activity.name) : ''
  );
  let values = nameActivity.filter((item, index) => {
    return nameActivity.indexOf(item) === index;
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const [value, setValue] = useState({
    oneFilter: '',
    twoFilter: '',
  });

  const handleActivitySelect = (event) => {
    const value = event.target.value;
    dispatch(filterByActivities(value));
  };

  const changeOnFilterContinent = (event) => {
    const valueFilter = event.target.value;
    setValue({ ...value, oneFilter: valueFilter });
  };

  const changeOnFilterPoblation = (event) => {
    const valueFilter = event.target.value;
    setValue({ ...value, twoFilter: valueFilter });
  };

  const filterTotal = () => {
    dispatch(filter(value.oneFilter, value.twoFilter));
  };

  const refresh = () => {
    dispatch(getApi(allCountries));
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.filterActivities}>
        <select className={style.box} onChange={handleActivitySelect}>
          <option>-Activity-</option>
          {values?.map((name, index) => {
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.filterContinent}>
        <select className={style.box} onChange={changeOnFilterContinent}>
          <option value=''>Continent:</option>
          <option value='North America'>America del Norte</option>
          <option value='South America'>America del Sur</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='Oceania'>Oceania</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antartida</option>
        </select>
        <select className={style.box} onChange={changeOnFilterPoblation}>
          <option value=''>order and population</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
          <option value='-'>Poblacion (Menor a mayor)</option>
          <option value='+'>Poblacion (Mayor a menor)</option>
        </select>
        <button
          className={style.filter}
          disabled={!value.oneFilter || !value.twoFilter}
          onClick={filterTotal}
        >
          Filter
        </button>
        <button onClick={refresh}>Refresh</button>
      </div>
    </div>
  );
};
export default Filter;
