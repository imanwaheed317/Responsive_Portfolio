import SectionHeading from '@/About/SectionHeading'
import React from 'react'
import { servicesData } from '../../data'
import Servicescard from './Servicescard'

const Services = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading>Services</SectionHeading>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
        {servicesData.map((service) => {
          return <div key={service.id}>
         <Servicescard service={service} />
          </div>
          
 
        })}
      </div>
    </div>
  )
}

export default Services