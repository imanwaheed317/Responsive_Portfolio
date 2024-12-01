import React from 'react'

const MagicButton = ({
    title
}:{
    title:string
}) => {
  return (
    <button className="p-[10px] relative m-42">
  <div className="absolute inset-1 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg" />
  <div className="px-8 py-2 bg-black rounded-[2px]  relative group transition duration-200 text-white hover:bg-transparent">
    {title}
  </div>
</button>
 
  )
}

export default MagicButton