import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-gray-800 text-2xl md:text-3xl lg:text-[2.5rem] font-bold'>
        Let&apos;s Work Together!
        </h1>
        <p className='text-gray-300 mt-3 lg:text-base text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod asperiores soluta cupiditate? Harum nisi corrupti eligendi perspiciatis libero exercitationem esse!</p>
        <form className='mt-8 block w-full overflow-hidden'>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <input
                 type="text"
                 placeholder='First Name'
                 className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '
                  />
           <input
                 type="text"
                 placeholder='Last Name'
                 className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '
                  />
                     </div>
   <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
                   <input
                 type="email"
                 placeholder='Email'
                 className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '
                  />
                 <input
                 type="text"
                 placeholder='Phone No'
                 className='bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full '
                  />
                  </div>
                  <div>
                    <select className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-gray-200 border-opacity-15 outline-none'>
                        <option value="" disabled>Select an Option</option>
                        <option value="Fronted">Fronted Development</option>
                        <option value="Backend">Backend Development</option>
                        <option value="Full stack">Full-Stack Development</option>
                    </select>
                  </div>
                  <textarea
          className="w-full bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md mt-5 border border-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          rows={7}
          placeholder="Message"
          ></textarea>
            <div className='mt-4'>
               <button className='px-8 py-3.5 bg-[#dd4efa9a] text-white hover:bg-[#eb62eb] transition-all duration-150 rounded-full'>Send Message</button>
                </div>
         
        </form>
    </div>
  )
}

export default ContactForm