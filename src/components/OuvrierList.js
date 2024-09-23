import React from 'react';

const OuvrierList = ({ ouvriers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Heure d'arrivée</th>
          <th>Heure de départ</th>
        </tr>
      </thead>
      <tbody>
        {ouvriers.map((ouvrier) => (
          <tr key={ouvrier.id}>
            <td>{ouvrier.nom}</td>
            <td>{ouvrier.heureArrivee}</td>
            <td>{ouvrier.heureDepart}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};





export default OuvrierList;

