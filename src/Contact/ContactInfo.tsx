import React from 'react';
import { FaPhoneVolume, FaEnvelope } from 'react-icons/fa';
import { TiHome } from 'react-icons/ti';

type ContactData = {
  phone: number;
  email: string;
  address: string;
};

const ContactInfo = ({ contactData }: { contactData: ContactData }) => {
  return (
    <div>
      {/* Phone Section */}
      <div className="flex items-center space-x-6">
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-cyan-700 to-[#731ea5] flex items-center justify-center">
          <FaPhoneVolume className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-white">Phone</h1>
          <p className="text-base sm:text-lg text-opacity-70 text-gray-300">{contactData.phone}</p>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center space-x-6 mt-8 mb-8">
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-cyan-700 to-[#731ea5] flex items-center justify-center">
          <FaEnvelope className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-white">Email Address</h1>
          <p className="text-base sm:text-lg text-opacity-70 text-gray-300">{contactData.email}</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center space-x-6">
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-r from-cyan-700 to-[#731ea5]  flex items-center justify-center">
          <TiHome className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-white">Address</h1>
          <p className="text-base sm:text-lg text-opacity-70 text-gray-300">{contactData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
