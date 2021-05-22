import React, { useState } from 'react';
import localData from './api/localData';
//import localStorage from './api/localData'

function App() {
const [shoots, setShoots] = useState(localData.getAllShoots());

const testAdd = () => {
const newShoots = localData.addShoot({

    name: 'dfghhmj',
    surname: 'fgthjkk', 
    date: 'fghgjhj', 
    location: 'gfhdjkgj', 
    price: 'fhghj', 
    expenses: 'edfgkhj',
  })
  setShoots(newShoots);
};

const testUpdate = (id) => {
  const newShoots =  localData.updateShoot(id, "name", "Thato");
  setShoots(newShoots);
};

const testDelete = (id) => {
const newShoots =  localData.removeShoot(id);
setShoots(newShoots)
};


  return(
    <div>
      <button onClick = {testAdd}>ADD Shoot</button>     
      <div>
      {shoots.map(({ name, id }) => (
      <div>{name} <button onClick = { () => testUpdate(id)}>Update Shoot</button>
      <button onClick = {() => testDelete(id)}>Delete Shoot</button>
      </div>
      ))}</div>

      </div>
  );
}
export default App;
