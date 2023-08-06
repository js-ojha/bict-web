import React, { useState } from 'react';
import { BiSolidBookHeart } from 'react-icons/bi';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Colors from '../utils/ColorUtils';

import { Link } from 'react-router-dom';

const Header = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <header className="header flex flex-col items-center justify-between px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="flex items-center space-x-16 sm:space-x-0">
          <div className="sm:hidden">
            {showContent ? (
              <AiOutlineClose color={Colors.green} size={30} onClick={toggleContent} />
            ) : (
              <AiOutlineMenu color={Colors.green} size={30} onClick={toggleContent} />
            )}
          </div>
          <div className="flex items-center space-x-2">
            <BiSolidBookHeart color={Colors.green} size={30} />
            <h2 className="text-xl font-bold header-link">
                <Link to="/">Bict Academy</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className={`sm:flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 ${showContent ? 'block' : 'hidden'}`}>
        <p className="header-link text-center sm:text-left">
            <Link to="/about">
                About Us
            </Link>
        </p>
        <p className="header-link text-center sm:text-left">
            <Link to="/courses">Our Courses</Link>
        </p>
        <p className="header-link text-center sm:text-left">
            <Link to="/teachers">Our Teachers</Link>
        </p>
        <p className="flex items-center header-link text-center sm:text-left">
          <IoMdCall color={Colors.green} size={20} />
          <span className="ml-1">+91 8447617797</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
