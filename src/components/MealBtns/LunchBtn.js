import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../GoToWheelBtn.css'

const LunchBtn = ({dispatch}) => {

  const chooseLunch = (e) => {
      alert('You chose Lunch! Now Spin the Wheel!')
      dispatch({type: 'pickMeal', meal: 'Lunch'});
  }

  return (
    <div className="spacing">
      <Link to="/wheel">
        <Button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={chooseLunch}
        >
          Lunch
        </Button>
      </Link>
    </div>
  )
}

export default LunchBtn
