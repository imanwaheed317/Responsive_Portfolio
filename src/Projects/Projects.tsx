import React from 'react'
import Image from 'next/image'
 import Link from 'next/link'
 import {   projectData } from '../../data'
 import SectionHeading from '@/About/SectionHeading'

const Projects = () => {
  return (
    <div className='pt-16 pb-16 bg-[#1b1325]'>
      <SectionHeading>My Project</SectionHeading>
      <div className='w-[70%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6'>
        {projectData.map((project)=>{
          return (
            < div key={project.id} className='bg-[#141414] p-6 rounded-lg hover:scale-105 transition-all duration-300'>
            <Link href={project.url} target='_blank'>
            <Image src={project.image} alt='project' width={300} height={200} />
            <div className="absolute top-0 left-0 w-full bg-black bg-opacity-60 text-center py-2">
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </Link>
            </div>
          
            )})}
        </div>
        
      </div>
     )
}

export default Projects