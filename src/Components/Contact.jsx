import React from 'react'


const Contact = () => {
  return (
    <div>
      <div className='w-full border-b-2 border-zinc-500 flex justify-center' >
        <img className='w-[13%] mb-8' src="/images/touch.png" alt="" />
      </div>
      <div className='w-[100%]  flex mt-[5%] border-b-2 border-zinc-500 pb-[5%]'>
        <div className='w-[50%]  flex justify-center'>
          <img className='w-[60%] ml-40' src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='w-[50%] flex flex-col items-start p-5   '>
            <p className='text-[18px] font-serif text-zinc-500'>For Any Inquiries Contact Me</p>
            <div className='mt-10 flex'>
                <input className='border-b-2 border-zinc-500 p-3 outline-none' type="text" placeholder='First Name' />
                <input className='ml-5 border-b-2 border-zinc-500 p-3 outline-none'  type="text" placeholder='Last Name' />
            </div>
            <input className='w-[65%] mt-10 border-b-2 border-zinc-500 p-3 outline-none' type="email" placeholder='Email' />
            <textarea className='resize-none w-[65%] mt-20 border-b-2 border-zinc-500 p-3 outline-none' placeholder="Type your message"></textarea>
            <button className='absolute top-[100%] left-[71%] border-2 border-zinc-500 px-10 py-2 rounded mt-5 '>Send it</button>
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

export default Contact
