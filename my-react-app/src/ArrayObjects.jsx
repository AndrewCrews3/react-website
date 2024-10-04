import React, { useState } from 'react'

function ArrayObjects() {

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar (e) {

    const newCar = {year: carYear, make: carMake, model: carModel};

    setCars(c => [...c, newCar])
  }

  function handleRemoveCar (index) {

    setCars(cars.filter((_, i) => i !== index))
    

  }

  function handleYearChange (e) {

    setCarYear(e.target.value)

  }

  function handleMakeChange (e) {

    setCarMake(e.target.value)

  }

  function handleModelChange (e) {

    setCarModel(e.target.value)

  }


  return (
    <div>

      <h2>List Of Car Objects</h2>
      <p>My Favorite Car is a {carYear} {carMake} {carModel}</p>

      <ul>{cars.map((car, index) =>
        <li key = {index} onClick={ () => handleRemoveCar(index)}> {car.year} {car.make} {car.model}
         </li>)}
      </ul>

      <input type='number' value={carYear} onChange={handleYearChange} placeholder='' /><br/>
      <input type='text' value={carMake} onChange={handleMakeChange} placeholder='Enter Car Make'/><br/>
      <input type='text' value={carModel} onChange={handleModelChange} placeholder='Enter Car Model'/><br/>
      <button width='100px' onClick={handleAddCar}> Add Car</button>

    </div>
  )
}

export default ArrayObjects

//check 