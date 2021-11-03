import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './GetItBtn.css'

const GetItBtn = ({dispatch, foodResult}) => {

  const getItHandler = (e) => {
    dispatch({ type: 'pickFood', food: foodResult });
  }
  
  return (
    <div className="spacing">
      <Link to="/make">
        <Button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={getItHandler}
        >
         Now Let's Get It!
        </Button>
        </Link>
    </div>
  )
}

export default GetItBtn;