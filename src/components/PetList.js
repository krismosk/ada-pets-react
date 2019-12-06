import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => {
  const pets = props.pets;
  
  const petElements = pets.map((pet, i) => {
    return (
      <PetCard
        key={pet.id}
        {...pet}
      />

    );
  });


  return (
    <div className="card-group">
      <ul>
        {petElements}
      </ul>
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
