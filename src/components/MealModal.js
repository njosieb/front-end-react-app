import React, { useState } from 'react'
import './MealModal.css'
import Button from 'react-bootstrap/Button'
import ImageHolder from './ImageHolder'

const MealModal = ({ mealPlaceOptions, selectedFood, dispatch }) => {
  const [name, setName] = useState('')
  const [selectedMealPlace, setSelectedMealPlace] = useState(null)

  const determinePlace = mealPlaceOptions.map(place => (
    <div className="restaurant" key={place.name}>
      <p>{place.name}</p>
      <div className="spacing">
        <Button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => {
            if (name.trim() === '') {
              alert('Name is required!')
            }

            if (name.trim() !== '') {
              setSelectedMealPlace(place.name)
              alert(`${name}, your order will soon be ready for pick-up at ${place.name}. Please pay upon arrival.`)
            }
          }
          }
        
        >
          Select
        </Button>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="section-header">
        <form>
          <label>
            What's Your Name?&nbsp;&nbsp;
            <input
              type="text"
              placeholder="Enter Name Here"
              required={true}
              value={name}
              name={name}
              onChange={e => setName(e.target.value)
              }
            ></input>
             {/* <div className="errorMsg">{this.state.errors.name}</div> */}
          </label>
        </form>
        <div>
          <h1>Select a Place To Order {selectedFood} From!</h1>
        </div>
        <div className="arrangement">
          
          {determinePlace}
        </div>
        <ImageHolder selectedFood={selectedFood} dispatch={dispatch} selectedMealPlace={ selectedMealPlace }/>
      </div>
    </div>
  )
}

export default MealModal
