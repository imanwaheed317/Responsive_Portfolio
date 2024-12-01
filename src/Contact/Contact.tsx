import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

type CountryData = {  // Define the type
  phone: string;
  email: string;
  address: string;
};

const countryData: CountryData = {  // Define the variable with CountryData type
  phone: '000-123-987',
  email: 'info@info.com',
  address: 'Sindh, PAKISTAN',
};

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#191a19]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center mt-10 gap-10">
        {/* CONTACT FORM */}
        <div>
          <ContactForm />
        </div>
        {/* CONTACT INFO */}
        <div className="xl mx-auto">
          <ContactInfo contactData={countryData} /> {/* Pass countryData to the component */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
