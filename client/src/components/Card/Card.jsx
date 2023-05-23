import style from './Card.module.css';
import { Link } from 'react-router-dom';
const Card = (props) => {
  return (
    <div className={style.card}>
      <Link className={style.link} to={`/detail/${props.id}`}>
        <div className={style.containerImage}>
          <img className={style.imagen} src={props.image} alt='bandera' />
        </div>
        <h2 className={style.name}>{props.name}</h2>
        <h3 className={style.continent}>{props.continent}</h3>
      </Link>
    </div>
  );
};
export default Card;
