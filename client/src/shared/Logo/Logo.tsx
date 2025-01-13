import React from 'react';
import { MdOutlineFilterVintage } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Logo ({ className = '' })  {
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 text-primary"
      to="/"
    >
      <MdOutlineFilterVintage className="text-4xl" />
      <span className={`${className} text-2xl font-bold`}>LuxLoom</span>
    </Link>
  );
};

export default Logo;
