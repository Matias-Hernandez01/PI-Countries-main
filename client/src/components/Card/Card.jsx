import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.containerImage}>
        <img className={style.imagen} src={props.image} alt='bandera' />
      </div>
      <h2 className={style.name}>{props.name}</h2>
      <h3 className={style.continent}>{props.continent}</h3>
    </div>
  );
};
export default Card;
