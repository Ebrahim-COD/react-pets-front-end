// src/App.jsx
import React from 'react';
import PetList from './components/PetList';
import * as petService from './services/petService';

import { useState, useEffect } from 'react';


const App = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const pets = await petService.index();
        // Don't forget the pass the error object to the new Error
        if (pets.error) {
          throw new Error(pets.error);
        }
  
        setPetList(pets);
      } catch (error) {
        // Log the error object
        console.log(error);
      }
    };
    fetchPets();
  }, []);

  return <h1>Hello world!</h1>;
};

export default App;