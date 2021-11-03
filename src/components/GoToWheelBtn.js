import React from 'react'
import Button from 'react-bootstrap/Button'
import { Route } from 'react-router-dom'
import './GoToWheelBtn.css'

const GoToWheelBtn = (props) => {
  
  return (
    <div className="spacing">
      <Route to="/wheel">
        <Button
          type="button"
          className="btn btn-primary btn-lg"
        >
          Go to the Wheel!
        </Button>
      </Route>
    </div>
  )
}

export default GoToWheelBtn;
