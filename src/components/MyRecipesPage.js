import React from 'react'

import RecipesContainer from './RecipesContainer'
import RecipeForm from './RecipeForm'

const MyRecipesPage = () => {
  return (
    <div className="container">
      <h4 className="center">My Recipes</h4>
      <RecipeForm />
    </div>
  )
} // end of MyRecipesPage()

export default MyRecipesPage
