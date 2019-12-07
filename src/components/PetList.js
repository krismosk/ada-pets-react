import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

class PetList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      pets: props.pets,
      currentPet: false,
    }
  }

  listPets(pets) {
    const petElements = pets.map((pet, i) => {
      console.log("test")
      return (
        <PetCard
          key={pet.id}
          {...pet}
        />
      );
    });
    return petElements
  }

  render() {
    return (
      <div className="card-group">
        <ul>
          {this.listPets(this.state.pets)}
        </ul>
      </div>
    )
  }

}




// const PetList = (props) => {
//   const pets = props.pets;
//   // const currentPet = props.currentPet;
  
//   const petElements = pets.map((pet, i) => {
//     return (
//       <PetCard
//         key={pet.id}
//         {...pet}
//       />

//     );
//   });


//   return (
//     <div className="card-group">
//       <ul>
//         {petElements}
//       </ul>
//     </div>
//   )
// }

// Proptypes
PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;