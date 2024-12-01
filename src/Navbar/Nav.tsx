import React from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { navLinks } from '@/constant/constant';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-gradient-to-t from-purple-600 to-blue-700 via-purple-900 shadow-md w-full">
  <div className="flex justify-between items-center h-full w-[90%] mx-auto">
    {/* Mobile Menu Icon */}
    <HiBars3BottomRight
      onClick={openNav}
      className="w-8 h-8 cursor-pointer text-white lg:hidden"
    />

    {/* Navigation Links */}
    <div className="hidden lg:flex space-x-8 ml-64">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className="pr-8 gap-8 items-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600 font-bold hover:scale-110 transition-transform duration-300"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
</div>

  );
};

export default Nav;
