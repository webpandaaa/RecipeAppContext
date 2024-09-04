import React from 'react'
import Recipe from './Recipe'
import  '../Components/Style/Style.css'

const Home = () => {
  return (
    <div>
      <div id='home' className=' w-full h-[400px] border-b-2 border-zinc-500  '>
        <h1 id='hometext' className='text-5xl font-serif text-zinc-700 flex items-center justify-center '>Welcome to Mrs Frost's World</h1>
        <div id="all" className='w-full h-full flex justify-between px-36  gap-10'>
          <div id="card" className='flex justify-center items-center flex-col'>
            <img className='w-52' src="https://static.wixstatic.com/media/913019_2612df7863b14dc094abc131dbfb558b~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_140,h_105,fp_2.39_1.22,q_90/913019_2612df7863b14dc094abc131dbfb558b~mv2_d_5760_3840_s_4_2.webp" alt="" />
              <h1 className='mt-5 text-zinc-700 font-serif text-xl '>Christmas</h1>
              <p>All Christmas Recipes</p>
          </div>
          <div id="card" className='flex justify-center items-center flex-col'>
            <img className='w-52' src="https://static.wixstatic.com/media/913019_5d73a5966e054947a6384441c3d4ff4f~mv2.jpg/v1/fill/w_141,h_105,q_90/913019_5d73a5966e054947a6384441c3d4ff4f~mv2.webp" alt="" />
              <h1 className='mt-5  text-zinc-700 font-serif text-xl '>Thanksgiving</h1>
              <p>All Thanksgiving Recipes</p>
          </div>
          <div id="card" className='flex justify-center items-center flex-col'>
            <img className='w-52' src="https://static.wixstatic.com/media/913019_a88035c6efe74a39ba8c21094c30661d~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_140,h_105,q_90/913019_a88035c6efe74a39ba8c21094c30661d~mv2_d_5760_3840_s_4_2.webp" alt="" />
              <h1 className='mt-5  text-zinc-700 font-serif text-xl '>Halloween</h1>
              <p>All Halloween Recipes</p>
          </div>
          <div id="card" className='flex justify-center items-center flex-col'>
            <img className='w-52' src="https://static.wixstatic.com/media/913019_b46d9b9967444ffe98b336707e08e329~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_141,h_105,q_90/913019_b46d9b9967444ffe98b336707e08e329~mv2_d_5760_3840_s_4_2.webp" alt="" />
              <h1 className='mt-5  text-zinc-700 font-serif text-xl '>Easter</h1>
              <p>All Easter Recipes</p>
          </div>
          <div id="card" className='flex justify-center items-center flex-col'>
            <img className='w-52' src="https://static.wixstatic.com/media/913019_2ef14d14b339468eb713bdaf9ab019c1~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_140,h_105,q_90/913019_2ef14d14b339468eb713bdaf9ab019c1~mv2_d_5760_3840_s_4_2.webp" alt="" />
              <h1 className='mt-5  text-zinc-700 font-serif text-xl '>4th of July</h1>
              <p>All 4th of July Recipes</p>
          </div>
        </div>

      </div>
      <div id='bottom' className='w-full h-[500px]  border-b-2 border-zinc-500 flex justify-center items-center'>
        <img className='w-[50%] ' src="/images/center.png" alt="" />
      </div>
      <div id='footer' className='border-b-2 border-zinc-500'>
        <div className='flex justify-center '>
          <img id='footerimg' className='w-[12%] m-5  ' src="/images/Recipe.png" alt="" />
        </div>
        <Recipe/>
      </div>
        

    </div>
  )
}

export default Home
