import style from './Activities.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getActivities } from '../../redux/actions';

const Activities = () => {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.mainContainer}>
      <div className={style.containerActivity}>
        {allActivities
          ? allActivities.map((activity, index) => {
              return (
                <div className={style.activity} key={index}>
                  <div className={style.name}>
                    <h2>Name:</h2>
                    <h1>{activity.name}</h1>
                  </div>
                  <div className={style.dificultad}>
                    <h2>Dificultad:</h2>
                    <h1>{activity.dificultad}</h1>
                  </div>
                  <div className={style.duracion}>
                    <h2>Duracion:</h2>
                    <h1>{activity.duracion}</h1>
                  </div>
                  <div className={style.temporada}>
                    <h2>Temporada:</h2>
                    <h1>{activity.temporada}</h1>
                  </div>
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
};
export default Activities;
