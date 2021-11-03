import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../GoToWheelBtn.css'

const DinnerBtn = ({dispatch}) => {

  const chooseDinner = (e) => {
      alert('You chose Dinner! Now Spin the Wheel!')
      dispatch({type: 'pickMeal', meal: 'Dinner'});
  }

  return (
    <div className="spacing">
      <Link to="/wheel">
        <Button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={chooseDinner}
        >
          Dinner
        </Button>
      </Link>
    </div>
  )
}

export default DinnerBtn
