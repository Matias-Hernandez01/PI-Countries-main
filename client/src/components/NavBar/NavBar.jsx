import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import style from './NavBar.module.css';
import logo from '../../images/mundoLogo.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions/index';
import image from '../../images/lupa.png';
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('');

  const handleChangeSearch = (event) => {
    const value = event.target.value;
    setValueSearch({ ...valueSearch, valueSearch: value });
  };

  const search = () => {
    dispatch(searchByName(valueSearch));
    setValueSearch({ ...valueSearch, valueSearch: '' });
  };

  return (
    <div className={style.containerNavBar}>
      <div className={style.containerImage}>
        <img
          onClick={() => {
            history.push('/home');
          }}
          className={style.logoImage}
          src={logo}
          alt='logo'
        ></img>
      </div>
      <div className={style.containerSearchBar}>
        <div className={style.buttonAndInput}>
          <img className={style.lupa} src={image} onClick={search} />
        </div>
        <div className={style.inputSearch}>
          <input
            onChange={handleChangeSearch}
            placeholder='Search country'
          ></input>
        </div>
      </div>

      <div className={style.containerCreate}>
        <h4
          className={style.create}
          onClick={() => {
            history.push('/create');
          }}
        >
          CREATE
        </h4>
        <h4>NOMBRE</h4>
      </div>
    </div>
  );
};

export default NavBar;
