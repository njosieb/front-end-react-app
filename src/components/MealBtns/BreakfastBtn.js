import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../GoToWheelBtn.css'

const BreakfastBtn = ({dispatch}) => {

  const chooseBreakfast = (e) => {
      alert('You chose Breakfast! Now Spin the Wheel!')
      dispatch({type: 'pickMeal', meal: 'Breakfast'});
  }

  return (
    <div className="spacing">
      <Link to="/wheel">
        <Button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={chooseBreakfast}
        >
          Breakfast
        </Button>
      </Link>
    </div>
  )
}

export default BreakfastBtn
