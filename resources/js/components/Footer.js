import React from 'react';

const Footer = () => (
  <div className="bg-gray-100 h-32 text-center">
    <div className="container mx-auto flex flex-col">
      <p className="px-4 py-8 text-gray-700 font-light text-sm">
        &copy;{(new Date()).getFullYear()}  e-hianatra
      </p>
    </div>
  </div>
);

export default Footer;
