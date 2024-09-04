import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { Recipecontext } from "../Context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [recipes, setrecipes] = useContext(Recipecontext);
  const Navigate = useNavigate();

  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [ingredients, setingredients] = useState("");
  const [instructions, setinstructions] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients,
      instructions,
    };
    setrecipes([...recipes, newRecipe]);

    // sets the data in the local Storage of browser;
    localStorage.setItem(
      "recipes",
      JSON.stringify([...recipes, newRecipe])
    );
    toast.success("Recipe Created Successfully!");
    Navigate("/recipe");

  };
  return (
    <div>
      <h1 className='text-4xl text-orange-500'>Create Recipe</h1>
      <form onSubmit={SubmitHandler} id="create" className='flex justify-center flex-col items-center' >
        <h1 className='text-2xl text-orange-500'>Create New Recipe</h1>
        <input
          className='w-[40%] mt-5 border-2 rounded px-5 py-2'
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Recipe Name" />
         <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-[40%] mt-5 border-2 rounded px-5 py-2"
                placeholder="Recipe Image URL"
            />
        <textarea
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className="w-[40%] mt-5 border-2 rounded-md px-6 py-3 text-lg mb-5 resize-none"
          placeholder="recipe description..."
        ></textarea>
        <textarea
          onChange={(e) => setingredients(e.target.value)}
          value={ingredients}
          className="w-[40%]  border-2 rounded-md px-6 py-3 text-lg mb-5 resize-none"
          placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
        ></textarea>
        <textarea
          onChange={(e) => setinstructions(e.target.value)}
          value={instructions}
          className="w-[40%]  border-2 rounded-md px-6 py-3 text-lg mb-5 resize-none"
          placeholder="recipe instructions -> 'use dot to seperate instructions'..."
        ></textarea>
        <button className='mt-8 px-5 py-2 border-2 rounded bg-orange-300'>Publish Recipe</button>

      </form>


    </div>
  )
}

export default Create
