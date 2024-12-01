import React , {ReactNode} from 'react';

type Props  = {
  children:ReactNode
}
const SectionHeading = ({children}:Props) => {
    return(
        <div className="bg-gradient-to-r from-blue-800 via-purple-600 to-gray-900 w-fit text-center px-6 py-4 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase transform rotate-2 shadow-lg rounded-lg">
         {children}
      </div>
      
          
    
    )};
    export default SectionHeading