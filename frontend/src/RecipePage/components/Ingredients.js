import '@fontsource/poppins';

function IngredientsComponent({ recipeData }) {
  const ingredients = recipeData.steps.map((step) => step.ingredients).flat();

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.quantity} {ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}



export default IngredientsComponent;