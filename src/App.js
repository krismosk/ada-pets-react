import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { pets } from './data/pets.json';
import { isTSTypeParameterDeclaration } from '@babel/types';
// const pets = importData.pets;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: false,
    };
    console.log(pets);
  } 

  render () {
    // const { currentPet } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar />
        </section>
        { /* Wave 1:  Where Pet Details should appear */}
          {/* <PetDetails currentPet={this.state.currentPet} /> */}
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList pets={this.state.petList} />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
        </section>
      </main>
    );
  }
}

export default App;
