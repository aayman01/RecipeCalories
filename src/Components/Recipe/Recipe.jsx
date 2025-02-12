import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";


const Recipe = ({ recipe, handleWantCook }) => {
  // console.log(recipe)
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className="">
      <div className="bg-base-100 border-2 rounded-lg flex flex-col gap-5 justify-end items-center p-4">
        <figure>
          <img
            className="w-[330px] h-[150px] rounded-xl"
            src={recipe_image}
            alt={`Recipe Image ${recipe_name}`}
          />
        </figure>
        <div className="text-start">
          <h2 className="text-xl font-semibold">{recipe_name}</h2>
          <p className="text-[#878787] text-lg font-normal border-b-2 py-4">
            {short_description}
          </p>
          <p className="text-[#282828] text-lg font-bold mt-4">
            Ingredients: {ingredients.length}
          </p>
          <div className="border-b-2 mb-4">
            {ingredients.map((ingredient, idx) => (
              <li className="text-[#878787] text-lg font-normal" key={idx}>
                {ingredient}
              </li>
            ))}
          </div>
          <div className="flex gap-4 my-5 text-[#150B2BCC]">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} />
              <p className="flex">{preparing_time}minutes</p>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faFireFlameCurved} />
              <p>{calories}calories</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleWantCook(recipe)}
              className="btn btn-accent rounded-3xl bg-[#0BE58A]"
            >
              Want to cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleWantCook: PropTypes.func.isRequired,
};
export default Recipe;
