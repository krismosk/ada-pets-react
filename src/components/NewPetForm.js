import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      location: '',
      about: '',
      species: '',
      images: '',
    };

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange = (event) => {
    let value = event.target.value
    const name = event.target.name

    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    // call the callback function to create a new pet
    event.preventDefault();
    const { name, location, about, species, images } = this.state;
    
    // const newPet = {
    //   name: this.state.name,
    //   location: this.state.location,
    //   about: this.state.about,
    //   species: this.state.species,
    //   images: this.state.images,
    // }; 

    this.setState({
      name: '',
      location: '',
      about: '',
      species: '',
      images: '',
    });

    const pet = this.state;
    pet.images = [this.state.image];
    this.props.addPetCallback(pet);

    // console.log('successful submit!')    
    // console.log(this.state.name)    
    // console.log(this.state.location) 
    // console.log(this.state.about) 
    // console.log(this.state.species) 

    // this.props.addPetCallback(newPet);
  }
  
  render() {
    return (
      <form className="new-pet-form">
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            onChange={this.onFormChange}
            value={this.state.name}
            name="name" 
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input 
            onChange={this.onFormChange}
            value={this.state.location}
            name="location" 
          />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <input 
            onChange={this.onFormChange}
            value={this.state.about}
            name="about" 
          />
        </div> 
        <div>
          <label htmlFor="species">Species:</label>
          <input 
            onChange={this.onFormChange}
            value={this.state.species}
            name="species" 
          />
        </div> 
        <div>
          <label htmlFor="images">Images:</label>
          <input 
            onChange={this.onFormChange}
            value={this.state.images}
            name="images" 
          />
        </div> 
        <input onClick={this.onFormSubmit} className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;