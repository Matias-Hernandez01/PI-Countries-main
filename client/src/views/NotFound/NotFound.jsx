import notFound from '../../images/notFound.png';
import style from './NotFound.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NotFound = () => {
  const history = useHistory();
  return (
    <div>
      <h1 className={style.notFound}>Not Found</h1>
      <div>
        <img className={style.image} src={notFound} alt='mundo'></img>
      </div>
      <button
        className={style.volverAlHome}
        onClick={() => {
          history.push('/home');
        }}
      >
        Volver al home
      </button>
    </div>
  );
};
export default NotFound;
