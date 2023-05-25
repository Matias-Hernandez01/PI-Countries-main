import notFound from '../../images/notFound.png';
import style from './NotFound.module.css';
const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <div>
        <img src={notFound} alt='mundo'></img>
      </div>
    </div>
  );
};
export default NotFound;
