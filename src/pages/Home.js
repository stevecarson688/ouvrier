import React, { useState } from 'react';
import Header from '../components/Header';
import OuvrierForm from '../components/OuvrierForm';
import OuvrierList from '../components/OuvrierList';

const Home = () => {
  const [ouvriers, setOuvriers] = useState([]);

  const handleAddOuvrier = (ouvrier) => {
    setOuvriers([...ouvriers, ouvrier]);
  };

  return (
    <div>
      <Header />
      <OuvrierForm onAddOuvrier={handleAddOuvrier} />
      <OuvrierList ouvriers={ouvriers} />
    </div>
  );
};

export default Home;
