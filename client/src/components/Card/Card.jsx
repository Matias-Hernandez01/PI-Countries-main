import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.image} alt={'Bandera de' + props.name} />
      <h2>{props.name}</h2>
      <h3>{props.continent}</h3>
    </div>
  );
};
export default Card;
