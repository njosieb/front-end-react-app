import React from 'react'
import BreakfastBtn from './MealBtns/BreakfastBtn'
import LunchBtn from './MealBtns/LunchBtn'
import DinnerBtn from './MealBtns/DinnerBtn'
import './HomePage.css'
import spinningWheel from '../spinningWheel.png'

const HomePage = ({ dispatch }) => {

  return (
    <header className="App-header">
      <div>
        <h1>MEAL WHEEL</h1>
        <p>When you gotta eat, but just don't know what to eat</p>
      </div>
      <div>
        <img src={spinningWheel} className="App-logo" alt="logo" />
      </div>
      <div>
      <h2>Click Which Meal Type You Need to Eat!</h2>
      </div>
      <div className="btn-container">
            <BreakfastBtn dispatch={dispatch} />
            <LunchBtn dispatch={dispatch} />
            <DinnerBtn dispatch={dispatch} />
      </div>
    </header>
  )
}

export default HomePage
