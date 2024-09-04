import React from 'react'

const About = () => {
  return (
    <div>
      <div className='w-full border-b-2 border-zinc-500 flex justify-center' >
        <img className='w-[13%] mb-8' src="/images/about.png" alt="" />
      </div>
      <div className='w-[100%]  flex mt-[5%] border-b-2 border-zinc-500 pb-[5%]'>
        <div className='w-[50%]  flex justify-center'>
          <img className='w-[60%]' src="https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-[50%] flex flex-col items-center p-5  '>
          <p className='w-[80%] mt-10 text-zinc-500'>A chef is a skilled culinary professional responsible for preparing, cooking, and presenting food. They typically work in restaurants, hotels, or other food service establishments. Chefs may specialize in specific cuisines or types of cooking, such as pastry, seafood, or fine dining. They often oversee kitchen staff, plan menus, order supplies, and ensure food safety and quality standards are met. </p>
          <p className='w-[80%] mt-10 text-zinc-500'>
            Becoming a chef requires formal culinary education, extensive training, and a range of essential skills including cooking proficiency, creativity, time management, attention to detail, and leadership. Chefs can advance through various positions in the culinary industry and may ultimately become head chefs,
          </p>
          <p className='w-[80%] mt-10 text-zinc-500'>
            Long Hours: Chefs often work evenings, weekends, and holidays, and long hours are common during busy periods.
            Pressure: Kitchen environments can be high-pressure, requiring chefs to work efficiently under stress.
            Physical Demands: Standing for long periods and working with heavy equipment can be physically demanding.
          </p>
        </div>
      </div>
      <div id="miss" className='w-full border-b-2 border-zinc-500 flex flex-col justify-center items-center'>
        <img className='w-[24%] m-3' src="/images/miss.png" alt="" />
        <div className='w-[100%] flex justify-center mt-5'>
        <input className='border-b border-zinc-500 p-3 w-[20%] outline-none' type="text" placeholder='Enter you email here' />
          <button className='border-2 px-10 ml-5 border-orange-500 text-orange-500'>Submit</button>
        </div>
        <img className='w-[12%] mt-10 cursor-pointer' src="/images/social.png" alt="" />
      </div>
      <h1 className='flex justify-center mt-5'>Created with ❤️ by Ankush</h1>
    </div>
  )
}

export default About
