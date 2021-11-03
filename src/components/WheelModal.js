import React, { useEffect, useState } from 'react'
import './WheelModal.css'
import GetItBtn from './GetItBtn'
import getTopPosition from '../getTopPosition'

const WheelModal = ({ mealFoodOptions, dispatch }) => {
  let radius = 105 // PIXELS
  let net = null // RADIANS

  const [rotate, setRotate] = useState(0) // DEGREES
  const [easeOut, setEaseOut] = useState(0) // SECONDS
  const [angle, setAngle] = useState(0) // RADIANS
  const [topPosition, setTopPosition] = useState([null, null]) // [INDEX, RADIANS]
  const [result, setResult] = useState(null) // INDEX
  const [spinning, setSpinning] = useState(false)

  useEffect(() => {
    const renderSector = (index, text, start, arc, color) => {
      // create canvas arc for each list element
      let canvas = document.getElementById('wheel')
      let ctx = canvas.getContext('2d')
      let x = canvas.width / 2
      let y = canvas.height / 2
      let startAngle = start
      let endAngle = start + arc
      let angle = index * arc
      let baseSize = radius * 3.33
      let textRadius = baseSize - 150
  
      ctx.beginPath()
      ctx.arc(x, y, radius, startAngle, endAngle, false)
      ctx.lineWidth = radius * 2
      ctx.strokeStyle = color
  
      ctx.font = '17px Arial'
      ctx.fillStyle = 'black'
      ctx.stroke()
  
      ctx.save()
      ctx.translate(
        baseSize + Math.cos(angle - arc / 2) * textRadius,
        baseSize + Math.sin(angle - arc / 2) * textRadius
      )
      ctx.rotate(angle - arc / 2 + Math.PI / 2)
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0)
      ctx.restore()
    }

    const getColor =() => {
      // randomly generate rbg values for wheel sectors
      let r = Math.floor(Math.random() * 255)
      let g = Math.floor(Math.random() * 255)
      let b = Math.floor(Math.random() * 255)
      return `rgba(${r},${g},${b},0.4)`
    }

    // determine number/size of sectors that need to created
    let numOptions = mealFoodOptions.length
    let arcSize = (2 * Math.PI) / numOptions
    setAngle(arcSize)

    setTopPosition(getTopPosition(numOptions, arcSize))

    // dynamically generate sectors from state list
    let angle = 0
    for (let i = 0; i < numOptions; i++) {
      let text = mealFoodOptions[i].name
      renderSector(i + 1, text, angle, arcSize, getColor())
      angle += arcSize
    }

  }, [mealFoodOptions, radius])

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500
    setRotate(randomSpin)
    setEaseOut(2)
    setSpinning(true)

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin)
    }, 2000)
  }

  const getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    let netRotation = ((spin % 360) * Math.PI) / 180 // RADIANS
    let travel = netRotation + topPosition[1]
    let count = topPosition[0] + 1
    while (travel > 0) {
      travel = travel - angle
      count--
    }
    let result
    if (count >= 0) {
      result = count
    } else {
      result = mealFoodOptions.length + count
    }

    // set state variable to display result
    setResult(result)
  }

  const reset = () => {
    // reset wheel and result
    setRotate(0)
    setEaseOut(0)
    setResult(null)
    setSpinning(false)
  }

    return (
      <div>
        <div className="App top-margin">
          <h1>Spin the Meal Wheel!</h1>
          <span id="selector">&#9660;</span>
          <canvas
            id="wheel"
            width="700"
            height="700"
            style={{
              WebkitTransform: `rotate(${rotate}deg)`,
              WebkitTransition: `-webkit-transform ${easeOut}s ease-out`,
            }}
          />

          {spinning ? (
            <button type="button" id="reset" onClick={reset}>
              reset
            </button>
          ) : (
            <button type="button" id="spin" onClick={spin}>
              spin
            </button>
          )}
          <div className="display">
          {result && (
            
            <span id="readout">
              YOUR MEAL:{'  '}
                <span id="result">{mealFoodOptions[result].name}</span>
                
                <GetItBtn foodResult={mealFoodOptions[result].name} dispatch={ dispatch }/>

              </span>
              )}
          </div>
        </div>
      </div>
    )
}

export default WheelModal
