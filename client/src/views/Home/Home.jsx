import CardsContainer from '../../components/CardsContainer/CardsContainer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getApi } from '../../redux/actions/';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApi());
  }, [dispatch]);

  return (
    <>
      <CardsContainer />
    </>
  );
};
export default Home;
