import React from 'react'
import heroImage from '../assets/hero_study2.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section Web */}
      <section className="py-12 flex-col md:flex-row items-center hidden lg:flex"> {/* Add items-center for horizontal alignment */}
        {/* Text Content */}
        <div className="flex-1 px-8 md:px-12 lg:px-16 flex flex-col justify-center"> {/* Add flex-1 class for equal proportions */}
          <h1 className="text-4xl font-bold mb-4">Welcome to Bict Academy</h1>
          <p className="text-lg mb-3">Journey to Excellence: Empowering Minds, Shaping Futures</p>
          <p className="text-lg mb-6">Since 1999, Bict Academy has been a beacon of trust and knowledge, offering an exceptional educational experience where students can unlock their potential and stand out from the crowd.</p>
          <button className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100">Explore Courses</button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center mt-6 md:mt-0 pr-8">
          <img src={heroImage} alt="Hero" className="w-full h-3/4" />
        </div>
      </section>

      {/* Hero Section Mobile */}
      <section
        className="my-12 flex flex-col md:flex-row items-center lg:hidden"
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Text Content */}
        <div className="flex-1 px-8 md:px-12 lg:px-16 flex flex-col justify-center bg-white bg-opacity-70">
          <h1 className="text-4xl font-bold mb-4">Welcome to Bict Academy</h1>
          <p className="text-lg mb-3">Journey to Excellence: Empowering Minds, Shaping Futures</p>
          <p className="text-lg mb-6">Since 1999, Bict Academy has been a beacon of trust and knowledge, offering an exceptional educational experience where students can unlock their potential and stand out from the crowd.</p>
          <button className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100">Explore Courses</button>
        </div>
      </section>
    </div>
  )
}

export default Home
