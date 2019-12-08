import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';
class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: props.pets,
    };

  }

  onDeletePet = (petId) => {
    const updatedPets = this.state.pets.filter((pet) => {
      return pet.id !== petId;
    });

    this.setState({
      pets: updatedPets,
    })
    
  }

  // consider making an arrow function?
  listPets(pets) {
    const petElements = pets.map((pet, i) => {
      return (
        <PetCard
          key={pet.id}
          {...pet}
          selectPetCallback={this.props.selectPetCallback}
          deletePetCallback={this.onDeletePet}
        />
      );
    });
    return petElements;
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


// Proptypes
PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;




// const PetList = (props) => {
//   const pets = props.pets;
//   // const currentPet = props.currentPet;
  
//   const petElements = pets.map((pet, i) => {
//     return (
//       <PetCard
//         key={pet.id}
//         {...pet}
//         selectPetCallback={props.selectPetCallback}
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