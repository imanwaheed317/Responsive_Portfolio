import React from 'react';
import SectionHeading from './SectionHeading';
import { aboutInfo } from '../../data';
import { FaCheck } from "react-icons/fa";
import Image from 'next/image';

const About = () => {
  return (
    <div className='pt-16 pb-16 bg-slate-900'>
        <SectionHeading>About Me</SectionHeading>
        <div className='w-[80%] mx-auto flex flex-col lg:flex-row gap-8 items-center mt-20'>
            <div 
            className='flex-1'>
                <h1
                 className='text_bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>{aboutInfo.title}</h1>
                <p className='mt-6 text-base text-gray-400'>{aboutInfo.description}</p>

                <div className="mt-8">
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-blue-800 flex items-center justify-center">
                            <FaCheck className="text-white" />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-400">Frontend Development</p>
                    </div>

                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-purple-500 flex items-center justify-center">
                            <FaCheck className="text-white" />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-400">Backend Development</p>
                    </div>

                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-7 h-7 bg-green-500 flex items-center justify-center">
                            <FaCheck className="text-white" />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-400">Full Stack Development</p>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div 
            className='flex-1'>
                <div data-aos="zoom-in"
        data-aos-anchor-placememt="top-center"
        data-aos-delay="150"
                className="grid grid-cols-2 gap-8">
                    {/* 1st Stat */}
                    <div className="text-center">
                        <Image
                         src="/customer.png"
                        alt="Satisfied Customers"
                         width={80}
                         height={80}
                         className="mx-auto"
                        />
                        <p className="mt-2 font-bold text-white text-xl">{aboutInfo.clients}</p>
                        <p className="text-base text-gray-400">Satisfied Customers</p>
                    </div>

                    {/* 2nd Stat */}
                    <div className="text-center">
                        <Image
                         src="/experience.png"
                         alt="Years Experience"
                          width={80}
                          height={80}
                          className="mx-auto"
                        />
                        <p className="mt-2 font-bold text-white text-xl">{aboutInfo.experience}</p>
                        <p className="text-base text-gray-400">Years Experience</p>
                    </div>

                    {/* 3rd Stat */}
                    <div className="text-center">
                        <Image
                            src="/completed.png"
                            alt="Completed Projects"
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                        <p className="mt-2 font-bold text-white text-xl">{aboutInfo.Project}</p>
                        <p className="text-base text-gray-400">Completed Projects</p>
                    </div>

                    {/* 4th Stat */}
                    <div className="text-center">
                        <Image
                            src="/rocket.png"
                            alt="Website Launched"
                            width={80}
                            height={80}
                            className="mx-auto"
                        />
                        <p className="mt-2 font-bold text-white text-xl">{aboutInfo.websites}</p>
                        <p className="text-base text-gray-400">Websites Launched</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;