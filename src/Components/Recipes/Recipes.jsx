import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Wantcook from "../Wantcook/Wantcook";
import toast from "react-hot-toast";

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
        const isExist = wantCook.find(item => item.id == recipe.id);
        if(!isExist){
          setWantCook(newWantCook);
        }
        else{
          toast.error('Recipe Already Exists');
        }
    }
    const [addCook, setAddCook] = useState([]);
    const [preparingTime, setPreparingTime] = useState([]);

    const handlePreparing = (id, cook) => {
      const removeRecipe = wantCook.filter(item => item.id !=id);
      setWantCook(removeRecipe);
      const newCurrentCook = [...addCook, cook];
      wantCook.find(item => item.id == id)
      setAddCook(newCurrentCook);
      
    };
    return (
      <div className="">
        <div className="text-center mt-24">
          <h1 className="text-[#150B2B] text-4xl font-semibold mb-6">
            Our Recipes
          </h1>
          <p className="text-[#150B2B99] text-base font-normal mb-11">
            Here are some cooking recipes you can try by yourself.
          </p>
          <div className="flex gap-4">
            <div className="grid grid-cols-2 gap-3 w-1/2">
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.id}
                  recipe={recipe}
                  handleWantCook={handleWantCook}
                ></Recipe>
              ))}
            </div>
            <div className="w-1/2">
              <Wantcook
                wantCook={wantCook}
                addCook={addCook}
                handlePreparing={handlePreparing}
              ></Wantcook>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Recipes;