import React from 'react';

const AdditionalFeature = props => {

  const addFeature = e => {
    e.preventDefault();
    props.addFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
