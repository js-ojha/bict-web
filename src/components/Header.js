import React, { useState } from 'react';
import { BiSolidBookHeart } from 'react-icons/bi';
import { IoMdCall } from 'react-icons/io';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Colors from '../utils/ColorUtils';

const Header = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <header className="flex flex-col items-center justify-between px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
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
            <h2 className="text-xl font-bold">Bict Academy</h2>
          </div>
        </div>
      </div>
      <div className={`sm:flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 ${showContent ? 'block' : 'hidden'}`}>
        <p className="hover:text-blue-300 text-center sm:text-left">About Us</p>
        <p className="hover:text-blue-300 text-center sm:text-left">Our Courses</p>
        <p className="hover:text-blue-300 text-center sm:text-left">Our Teachers</p>
        <p className="flex items-center hover:text-blue-300 text-center sm:text-left">
          <IoMdCall color={Colors.green} size={20} />
          <span className="ml-1">+91 8447617797</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
