import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { countryDetail } from '../../redux/actions';
import style from './DetailCard.module.css';
const DetailCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const country = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(countryDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style.mainContainer}>
      <div className={style.containerBack}>
        <button
          className={style.flechaBack}
          onClick={() => history.push('/home')}
        >
          ◀ Back
        </button>
      </div>
      <div className={style.detailContainer}>
        <div className={style.imageContainer}>
          <img className={style.image} src={country.flagImage} alt='country' />
        </div>
        <div className={style.detailCountry}>
          <div className={style.name}>
            <h1 className={style.name}>{country.name}</h1>
          </div>
          <div className={style.continent}>
            <h2>Continent:</h2>
            <h1>{country.continent}</h1>
          </div>
          <div className={style.capital}>
            <h2>Capital:</h2>
            <h1>{country.capital}</h1>
          </div>
          <div className={style.subregion}>
            <h2>Subregion: </h2>
            <h1>{country.subregion}</h1>
          </div>
          <div className={style.area}>
            <h2>Area: </h2>
            <h1>{country.area}</h1>
          </div>
          <div className={style.poblacion}>
            <h2>Poblacion: </h2>
            <h1>{country.poblacion}</h1>
          </div>
        </div>
        <div className={style.DetailAndActivities}>
          <div className={style.activity}>
            <h2 className={style.activities}>Activities:</h2>
            {country?.activities?.map((props) => {
              return (
                <div>
                  <h1 className={style.nameActivity}>{props.name}</h1>
                  <h1>Dificultad: {props.dificultad}</h1>
                  <h1>Duración: {props.duracion}</h1>
                  <h1>Temporada: {props.temporada}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
