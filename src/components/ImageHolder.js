import React, { useState, useEffect } from 'react'
// import mealPicture from '../mealPicture.jpg'
import './ImageHolder.css'

const ImageHolder = ({selectedFood }) => {
  const [foodImage, setFoodImage] = useState(null)

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?query=${selectedFood}&client_id=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setFoodImage(data.urls.regular))
      .catch((error) => console.error(error))
  }, [selectedFood]);

  return (
    <div>
      <div className="container">
        <div className="meal-picture">
            <img src={foodImage} alt="Your meal should appear here!" />
        </div>
      </div>
    </div>
  )
}

export default ImageHolder
