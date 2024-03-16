import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
      <div className="container mx-auto">
        <div className="text-center mt-24">
          <h1 className="text-[#150B2B] text-4xl font-semibold mb-6">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99] text-base font-normal mb-11">
            Here are some cooking recipes you can try by yourself.
          </p>
          <div className="grid grid-cols-2">
            {recipes.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Recipes;