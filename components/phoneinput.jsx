"use client";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const countryLabels = {
  af: 'Afghanistan',
  al: 'Albania',
  dz: 'Algeria',
  // Add more countries as needed
  in: 'India',
  us: 'United States',
  // Continue for other countries
};

const PhoneInputComponent = () => {
  const [user, setUser] = useState({ Number: '' });

  return (
    <div className="pt-2">
      <div className="relative flex w-full">
        <PhoneInput
          country={'in'}
          onlyCountries={Object.keys(countryLabels)} // Only show countries in the custom label mapping
          localization={countryLabels} // Use the custom label mapping
          value={user.Number}
          onChange={value => setUser({ ...user, Number: value })}
          inputProps={{
            name: 'Number',
            required: true,
            autoFocus: false
          }}
          className="border-b-2 w-full peer-placeholder-shown:text-blue-gray-500 custom-phone-input"
          containerStyle={{ width: '100%' }}
          inputStyle={{ width: '100%', border: 'none' }}
          buttonStyle={{ border: 'none', background: 'transparent' }}
        />
      </div>
    </div>
  );
};

export default PhoneInputComponent;
