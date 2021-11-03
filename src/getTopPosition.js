// get index of starting position of selector
export default function getTopPosition(num, angle) {
  // set starting index and angle offset based on list length
  // works upto 9 options
  let topSpot = null
  let degreesOff = null
  if (num === 9) {
    topSpot = 7
    degreesOff = Math.PI / 2 - angle * 2
  } else if (num === 8) {
    topSpot = 6
    degreesOff = 0
  } else if (num <= 7 && num > 4) {
    topSpot = num - 1
    degreesOff = Math.PI / 2 - angle
  } else if (num === 4) {
    topSpot = num - 1
    degreesOff = 0
  } else if (num <= 3) {
    topSpot = num
    degreesOff = Math.PI / 2
  }
  return [topSpot - 1, degreesOff]
}