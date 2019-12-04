import React, { Component } from 'react';
import axios from 'axios';

import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: [],
      currentPet: undefined,
      fullList: [],
    };
  }

  componentDidMount () {
    axios.get('http://localhost:3000/pets')
      .then((response) => {
        this.setState({
          petList: response.data,
          fullList: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        })
      });
  }

  selectPet = (petId) => {
    const { petList } = this.state;

    const currentPet = petList.find((pet) => {
      return pet.id === petId;
    });

    this.setState({ currentPet, });
  }

  deletePet = (petId) => {
    axios.delete(`http://localhost:3000/pets/${ petId }`)
      .then((response) => {
        const petList = this.state.fullList.filter((pet) => {
          return pet.id !== petId;
        });

        this.setState({
          petList,
          fullList: petList,
        });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
  }

  addPet = (pet) => {
    axios.post('http://localhost:3000/pets', pet)
      .then((response) => {
        // We can update the state so we don't need to make another GET request
        let updatedData = this.state.fullList;
        updatedData.push(response.data);
        this.setState({
          petList: updatedData,
          fullList: updatedData,
          error: '',
        });
      })
      .catch((error) => {
        // Use the same idea we had in our GET request
        this.setState({ error: error.message });
      });
  }

  filterPets = (filterTerm) => {
    const petList = this.state.fullList.filter((pet) => {
      const text = (pet.name + ' ' + pet.about + ' ' + pet.location + ' ' + pet.species).toUpperCase();

      return text.includes(filterTerm.toUpperCase());
    });

    this.setState({ petList, });
  }


  render () {
    const { currentPet, petList, error } = this.state;

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
          <p>{error ? `There is an error: ${ error }` : ''}</p>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */}
          <SearchBar searchChangeCallback={this.filterPets} />
        </section>
        { /* Wave 2:  Where Pet Details should appear */}
        {currentPet ? <PetDetails currentPet={currentPet} /> : ''}
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */}
          <PetList
            pets={petList}
            selectPetCallback={this.selectPet}
            deletePetCallback={this.deletePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */}
          <NewPetForm addPetCallback={this.addPet} />
        </section>
      </main>
    );
  }
}

export default App;
