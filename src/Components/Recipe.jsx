import React, { useContext } from "react";
import Card from "../Components/Card";
import { Link, useLocation } from "react-router-dom";
import { Recipecontext } from "../Context/RecipeContext";
const Recipes = () => {
  const [recipes, setrecipes] = useContext(Recipecontext);
  const { pathname } = useLocation();
  console.log(recipes);
  return (
    <div id="RecipePage" className=" ">
      <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
      <p id="heading" className="text-center text-zinc-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        aperiam?
      </p>
      <div id="RecipeCards" className="recipe-cards flex">
        {recipes.length > 0 ? (
          recipes.map((r) => <Card key={r.id} recipe={r} />)
        ) : (
          <h1 className="w-full text-orange-600 text-3xl font-extrabold text-center mt-10">
            No Recipe Found
          </h1>
        )}
      </div>
      {pathname === "/recipe" && (
        <Link
          to="/create-recipe"
          className="cursor-pointer rounded-md absolute top-[20%] py-2 px-5 left-[10%] border-2 border-orange-500 gap-x-3 flex items-center"
        >
          <i className="text-3xl text-orange-600 ri-add-box-line"></i>
          Create Recipe
        </Link>
      )}
    </div>
  );
};

export default Recipes;