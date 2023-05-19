import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import style from './NavBar.module.css';
import logo from '../../images/mundoLogo.png';
const NavBar = () => {
  const history = useHistory();

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
          <button>Search</button>
          <input></input>
        </div>
      </div>

      <div className={style.containerCreate}>
        <h4
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
