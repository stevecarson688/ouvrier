import React, { useState } from 'react';

const OuvrierForm = () => {
  const [nom, setNom] = useState('');
  const [heureArrivee, setHeureArrivee] = useState('');
  const [heureDepart, setHeureDepart] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enregistrer les données de l'ouvrier
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} />
      </label>
      <br />
      <label>
        Heure d'arrivée :
        <input type="time" value={heureArrivee} onChange={(event) => setHeureArrivee(event.target.value)} />
      </label>
      <br />
      <label>
        Heure de départ :
        <input type="time" value={heureDepart} onChange={(event) => setHeureDepart(event.target.value)} />
      </label>
      <br />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default OuvrierForm;
