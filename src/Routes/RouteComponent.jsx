import React from 'react'
import { Route , Routes } from 'react-router-dom';

import Home from "../Components/Home";
import About from "../Components/About";
import Recipe from "../Components/Recipe";
import Contact from "../Components/Contact";
import Create from '../Components/Create';
import Details from '../Components/Details';
import Update from '../Components/Update';

const RouteComponent = () => {
  return (
    <div id='route' className='p-10'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes/:id" element={<Details />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="/update-recipe/:id" element={<Update />} />

      </Routes>
    </div>
  )
}

export default RouteComponent
