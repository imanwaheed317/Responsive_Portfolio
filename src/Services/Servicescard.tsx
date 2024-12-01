"use client";
import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image';

// define props type
type Props = {
    service: {
      id:number;
      title:string;
      description:string;
      icon:string;
    };
};


const Servicescard = ({service} :Props) => { 
  return (
   <Tilt className='shadow-2xl p-6 rounded-lg bg-[#8e77b8]'>
    <Image src={`${service.icon}`}
    alt='services.title' 
    width={50} 
    height={50} 
    />  
    <h1 className='mt-4 text-lg font-bold text-gray-300'>{service.title}</h1>
    <p className= 'text-white mt-3 text-sm text-opacity-80 '>{service.description}</p>
   </Tilt>)
  
}

export default Servicescard