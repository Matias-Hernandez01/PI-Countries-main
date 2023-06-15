import CardsContainer from '../../components/CardsContainer/CardsContainer';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Loading from '../../components/Loading/Loading';
import { useState } from 'react';
const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading === true ? (
        <Loading setLoading={setLoading} />
      ) : (
        <div>
          <NavBar />
          <CardsContainer />
        </div>
      )}
    </>
  );
};
export default Home;
