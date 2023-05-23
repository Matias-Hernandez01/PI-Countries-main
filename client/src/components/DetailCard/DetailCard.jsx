import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { countryDetail } from '../../redux/actions';
import style from './DetailCard.module.css';
import flecha from '../../images/flecha.png';
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
        <img
          alt='back'
          className={style.flechaBack}
          src={flecha}
          onClick={() => history.push('/home')}
        ></img>
      </div>
      <div className={style.detailContainer}>
        <div className={style.imageContainer}>
          <img className={style.image} src={country.flagImage} alt='country' />
        </div>
        <div className={style.detailCountry}>
          <h1 className={style.name}>{country.name}</h1>
          <h3 className={style.continent}>{country.continent}</h3>
          <h3 className={style.capital}> {country.capital}</h3>
          <h3 className={style.subregion}> {country.subregion}</h3>
          <h3 className={style.area}> {country.area}</h3>
          <h3 className={style.poblacion}>{country.poblacion}</h3>
        </div>
      </div>
    </div>
  );
};
export default DetailCard;
