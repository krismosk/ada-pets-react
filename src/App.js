import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  } 

  onSelectPet = (petId) => {
    const selectedPet = this.state.petList.find((pet) => {
      return pet.id === petId;
    });

    if (selectedPet) {
      this.setState({
        currentPet: selectedPet,
      });
    }
  }

  render() {
    const { currentPet } = this.state;
    // const currentPet = this.state.currentPet;
    const details = currentPet ? <PetDetails currentPet={currentPet} /> : '';


    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          {/* <SearchBar /> */}
        </section>
        { details }
        <section className="pet-list-wrapper">
          <PetList 
            pets={this.state.petList} 
            selectPetCallback={this.onSelectPet}
            />
        </section>

      </main>
    );
  }
}

export default App;
