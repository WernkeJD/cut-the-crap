import PropTypes from 'prop-types';

function InfoComponent({ recipeData }) {
    console.log(recipeData);
    console.log(recipeData.title);
    const { title, time, servings } = recipeData;
  return (
    <div>
      <h1>{title}</h1>
      <p>{time}</p>
      <p>{servings}</p>
    </div>
  );
}

InfoComponent.propTypes = {
    recipeData: PropTypes.object.isRequired,
    };

export default InfoComponent;