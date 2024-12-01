import React from 'react';
import { navLinks } from '@/constant/constant';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ showNav, closeNav }: Props) => {
  return (
    <div
      className={`fixed inset-0 bg-blue-950 z-50 transition-transform duration-300 ${
        showNav ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button onClick={closeNav} className="text-white">Close Menu</button>
      <ul className="text-white">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
