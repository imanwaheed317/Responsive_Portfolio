import React from 'react'
import Image from 'next/image';

// define type 
type Props = {
    skill : {
    id:number;
    title: string;
    image:string;
    percent:string;
}
}

const SkillsCard = ({skill} : Props) => {
    const { title, image, percent} = skill;
  return (
    <div className='p-6 hover:bg-blue-900 duration-100 cursor-pointer transition-all text-center rounded-lg bg-gray-600'>
      <Image 
      src={image}
      alt={title}
       width={80}
        height={80}
        className='object-cover mx-auto' />
        <h1 className='text-[18px] mt-4 text-white font-[600]'>{title }</h1>
        <div className='bg-black mt-4 rounded-lg p-2 text-gray-300 '>{percent}</div>
    </div>
  )
}

export default SkillsCard