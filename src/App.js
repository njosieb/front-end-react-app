import React, {useReducer} from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
// import axios from 'axios'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

import './App.css'
import WheelModal from './components/WheelModal'
import MealModal from './components/MealModal'

console.log(process.env.REACT_APP_API_KEY)

const HomeRoute = withRouter(HomePage)
const WheelRoute = withRouter(WheelModal)
const MealRoute = withRouter(MealModal)

function App() {
  const initialAppState = {
    selectedMeal: '',
    selectedFood: '',
    selectedPlace: ''
  }
  const [state, dispatch] = useReducer(function (state, action) {
    switch (action.type) {
      case 'pickMeal':
        return { ...state, selectedMeal: action.meal }
      case 'pickFood':
        return { ...state, selectedFood: action.food }
      case 'pickPlace':
        return { ...state, selectedPlace: action.place }
      default:
        return state
    }
  }, initialAppState)

  const foodList = [
    {
      name: 'Pizza',
      meals: ['Lunch', 'Dinner']
    },
    {
      name: 'Meatballs',
      meals: ['Dinner']
    },
    {
      name: 'Chicken',
      meals: ['Dinner']
    },
    {
      name: 'Quesadilla',
      meals: ['Dinner']
    },
    {
      name: 'Nachos',
      meals: ['Lunch', 'Dinner']
    },
    {
      name: 'Steak',
      meals: ['Dinner']
    },
    {
      name: 'Burger',
      meals: ['Lunch', 'Dinner']
    },
    {
      name: 'Fish',
      meals: ['Dinner']
    },
    {
      name: 'Pasta',
      meals: ['Lunch', 'Dinner']
    },
    {
      name: 'Cereal',
      meals: ['Breakfast']
    },
    {
      name: 'Sausage',
      meals: ['Breakfast']
    },
    {
      name: 'Eggs',
      meals: ['Breakfast']
    },
    {
      name: 'Oatmeal',
      meals: ['Breakfast']
    },
    {
      name: 'Toast',
      meals: ['Breakfast']
    },
    {
      name: 'Smoothie',
      meals: ['Breakfast']
    },
    {
      name: 'Bagel',
      meals: ['Breakfast']
    },
    {
      name: 'Muffin',
      meals: ['Breakfast']
    },
    {
      name: 'Yogurt',
      meals: ['Breakfast']
    },
    {
      name: 'Salad',
      meals: ['Lunch']
    },
    {
      name: 'Sandwich',
      meals: ['Lunch']
    },
    {
      name: 'Wrap',
      meals: ['Lunch']
    },
    {
      name: 'Burrito',
      meals: ['Lunch']
    },
    {
      name: 'Rice',
      meals: ['Lunch']
    }
  ]

  const placeList = [
    {
      name: 'CoderGirl Cafe',
      food: ['Pizza', 'Meatballs', 'Chicken', 'Quesadilla', 'Nachos', 'Steak', 'Burger', 'Fish', 'Pasta', 'Cereal', 'Sausage', 'Eggs']
    },
    {
      name: 'React Restaurant',
      food: ['Pizza', 'Meatballs', 'Chicken', 'Quesadilla', 'Nachos', 'Steak', 'Burger', 'Fish', 'Pasta', 'Cereal', 'Sausage', 'Eggs']
    },
    {
      name: 'Midwestern Munchies',
      food: ['Pizza', 'Meatballs', 'Chicken', 'Quesadilla', 'Nachos', 'Steak', 'Burger', 'Fish', 'Pasta', 'Cereal', 'Sausage', 'Eggs']
    },
    {
      name: 'Eat Rite',
      food: ['Oatmeal', 'Toast', 'Smoothie', 'Bagel', 'Muffin', 'Yogurt', 'Salad', 'Sandwich', 'Wrap', 'Burrito', 'Rice']
    },
    {
      name: 'Mom & Pop Shop',
      food: ['Oatmeal', 'Toast', 'Smoothie', 'Bagel', 'Muffin', 'Yogurt', 'Salad', 'Sandwich', 'Wrap', 'Burrito', 'Rice']
    },
    {
      name: 'Some Yum Yum',
      food: ['Oatmeal', 'Toast', 'Smoothie', 'Bagel', 'Muffin', 'Yogurt', 'Salad', 'Sandwich', 'Wrap', 'Burrito', 'Rice']
    }
  ]

  const selectedMealFoods = foodList.filter(food => food.meals.includes(state.selectedMeal))

  const placeOptions = placeList.filter(place => place.food.includes(state.selectedFood))

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomeRoute dispatch={dispatch} />
          </Route>
          <Route path="/wheel">
            <WheelRoute dispatch={dispatch} mealFoodOptions={selectedMealFoods} />
          </Route>
          <Route path="/make" >
            <MealRoute dispatch={dispatch} mealPlaceOptions={placeOptions} selectedFood={state.selectedFood}/>
          </Route>
        </Switch>
        </Router>
      </div>
  )
}

export default App
