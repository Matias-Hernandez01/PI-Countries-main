import loading from '../../images/loading.gif';
import style from './Loading.module.css';
const Loading = ({ setLoading }) => {
  return (
    <div className={style.mainContainer}>
      <img className={style.logo} src={loading} alt='logo'></img>
      <div>
        {setTimeout(() => {
          setLoading(false);
        }, 1000)}
      </div>
    </div>
  );
};
export default Loading;
