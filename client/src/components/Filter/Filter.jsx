import { useState } from 'react';
import { filter } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    oneFilter: '',
    twoFilter: '',
  });

  console.log('Me renderizé');
  const changeOnFilterContinent = (event) => {
    const valueFilter = event.target.value;
    setValue({ ...value, oneFilter: valueFilter });
  };

  const changeOnFilterPoblation = (event) => {
    const valueFilter = event.target.value;
    setValue({ ...value, twoFilter: valueFilter });
  };

  const filterTotal = () => {
    console.log(value.oneFilter, value.twoFilter);
    dispatch(filter(value.oneFilter, value.twoFilter));
    setValue({ ...value, oneFilter: '', twoFilter: '' });
  };

  return (
    <div>
      <div>
        <select onChange={changeOnFilterContinent}>
          <option>Continent:</option>
          <option value='North America'>America del Norte</option>
          <option value='South America'>America del Sur</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='Oceania'>Oceania</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antartida</option>
          <option value='Activity'>Activity</option>
        </select>
        <select
          disabled={value.oneFilter === 'Activity' ? true : ''}
          onChange={changeOnFilterPoblation}
        >
          <option>order and population</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
          <option value='-'>Poblacion (Menor a mayor)</option>
          <option value='+'>Poblacion (Mayor a menor)</option>
        </select>
        <button
          disabled={!value.oneFilter && !value.twoFilter}
          onClick={filterTotal}
        >
          Filter
        </button>
      </div>
    </div>
  );
};
export default Filter;
