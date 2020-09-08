import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/cards/Card';

function App() {
  const [cities, setCities] = useState([
    ['Miami', "Florida", './assets/miami.jpg'], 
    ["Los Angeles", "California", './assets/la.jpg'], 
    ["Boulder", "Colorado", './assets/boulder.jpg'], 
    ["New York", "New York", './assets/ny.jpg']]);
  const [cityImages, setCityImages] = useState(['images/miami.jpg', 'images/la.jpg', 'images/boulder.jpg', 'images/ny.jpg']);


  return (
    <div className="App">
      <header>
        <h1>City Card List</h1>
      </header>
      <div className='container'>
        {cities.map((city, index) => (
          <Card city={city[0]} state={city[1]} image={city[2]} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
