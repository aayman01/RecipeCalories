import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        fetch('fakedata.json')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Recipes;