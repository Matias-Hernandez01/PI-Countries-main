import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import style from './Bienvenida.module.css';
import video from '../../images/planeta.mp4';
const Bienvenida = () => {
  const history = useHistory();
  const nombre = localStorage.getItem('nombre');

  return (
    <div className={style.mainContainer}>
      <div className={style.bienvenida}>
        <h1 className={style.nombre}>Bienvenidx {nombre}</h1>
        <button
          className={style.button}
          onClick={() => {
            history.push('/home');
          }}
        >
          <span className={style.span}>Ingresar</span>
        </button>
      </div>
      <video muted autoPlay loop>
        <source src={video} type='video/mp4' />z
      </video>
      <div className={style.capa}></div>
    </div>
  );
};
export default Bienvenida;
