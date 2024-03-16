import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Wantcook from "../Wantcook/Wantcook";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    const [wantCook, setWantCook] = useState([]);
    const handleWantCook = recipe => {
        const newWantCook = [...wantCook, recipe];
        setWantCook(newWantCook);
    }
    return (
      <div className="container mx-auto">
        <div className="text-center mt-24">
          <h1 className="text-[#150B2B] text-4xl font-semibold mb-6">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99] text-base font-normal mb-11">
            Here are some cooking recipes you can try by yourself.
          </p>
          <div className="flex gap-4">
            <div className="grid grid-cols-2 gap-3 w-2/3">
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.id}
                  recipe={recipe}
                  handleWantCook={handleWantCook}
                ></Recipe>
              ))}
            </div>
            <div className="w-1/3">
              <Wantcook wantCook={wantCook}></Wantcook>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Recipes;