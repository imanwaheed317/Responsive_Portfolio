"use client";
import MagicButton from "@/component/ui/MagicButton";
import { TextGenerateEffect } from "@/component/ui/TextGenerateEffect"
import {Spotlight} from '@/component/ui/Spotlight' 
// import { FaArrowRight } from 'react-icons/fa';


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
   <div>
   <Spotlight className="top-40  h-64 left-20 w-64" fill="white" />
<Spotlight className="top-70 left-40 h-60 w-50" fill="purple" />
<Spotlight className="top-40 left-30 h-60 w-42" fill="blue" />
<Spotlight className="top-20 left-45 h-72 w-72" fill="green" />
    </div>
    <div>
 
    <div className="flex justify-center relative my-9 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-xs text-center text-purple-800 max-w-80">
          Dynamic web magic with Next_js
        </h2>
        <TextGenerateEffect 
        className="text-center text-[40px] md:text-5xl lg:text-6xl from-neutral-950"
        words="Hyy I am Iman Creative Technologist"
        />
        <p className="text-center md:tracking-wider mb-8 text-sm md:text-lg lg:text-2xl">This is my Portfolio</p>
        <a href="#about"></a>
        <MagicButton 
  title="Show my Work" 
/>


      </div>
    </div>
    </div>
</div>
    
  )
}
                   
export default Hero                                                            																														