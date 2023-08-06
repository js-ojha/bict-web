import React from 'react'
import heroImage from '../assets/hero_study2.jpg';
import { Link } from 'react-router-dom';
import Colors from '../utils/ColorUtils';
import CourseCard from '../components/CourseCard';
import TeacherCard from '../components/TeacherCard';

const Home = () => {

  // Sample data for courses
  const coursesData = [
    {
      id: 1,
      title: 'Course 1',
      description: 'This is the description of Course 1',
      image: 'https://picsum.photos/200/300',
      duration: '3 Months',
      teacher: 'Rahul Sir'
    },
    {
      id: 2,
      title: 'Course 2',
      description: 'This is the description of Course 2',
      image: 'https://picsum.photos/200/300',
      duration: '2 Months',
      teacher: 'Sumit Sir'
    },
    {
      id: 3,
      title: 'Course 3',
      description: 'This is the description of Course 3',
      image: 'https://picsum.photos/200/300',
      duration: '6 Months',
      teacher: 'Rahul Sir'
    },
  ];

  const teachersData = [
    {
      id: 1,
      name: 'Rahul Sir',
      image: 'https://picsum.photos/100',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas, est a tincidunt sollicitudin, velit velit pellentesque ex, vel ultrices purus nunc vel erat.',
      coursesTaught: ['Mathematics', 'Accounts', 'Tally', 'Computer'],
      experience: '5 years',
    },
    {
      id: 2,
      name: 'Abhishek Sir',
      image: 'https://picsum.photos/100',
      bio: 'Nullam eu tellus ut justo ullamcorper elementum. In non maximus arcu. Suspendisse ac eleifend erat. Nullam fringilla, libero a congue euismod, velit nunc viverra felis.',
      coursesTaught: ['Biology', 'Chemistry'],
      experience: '3 years',
    },
    {
      id: 3,
      name: 'Sumit Sir',
      image: 'https://picsum.photos/100',
      bio: 'Aenean feugiat justo id enim tincidunt, quis vulputate mi blandit. Proin sed augue eu elit consectetur feugiat. Donec eget malesuada urna, vel blandit purus.',
      coursesTaught: ['English', 'Literature'],
      experience: '7 years',
    },
  ];

  return (
    <div>
      {/* Hero Section Web */}
      <section className="py-12 flex-col md:flex-row items-center hidden lg:flex">
        {/* Text Content */}
        <div className="flex-1 px-8 md:px-12 lg:px-16 flex flex-col justify-center">
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

      {/* Our Courses Section */}
      <section className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Our Courses Heading */}
          <h2 className="text-4xl font-bold mb-8 md:mb-0">Our Courses</h2>

          {/* View All Button (Visible in Desktop View) */}
          <Link
            to="/courses"
            className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100 hidden md:block"
          >
            View All
          </Link>
        </div>

        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Courses List */}
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Button (Visible in Mobile View) */}
        <div className="container mx-auto mt-8 md:hidden flex justify-center">
          <Link
            to="/courses"
            className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100"
          >
            View All
          </Link>
        </div>
      </section>

      {/* Our Teachers Section */}
      <section className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Our Courses Heading */}
          <h2 className="text-4xl font-bold mb-8 md:mb-0">Our Teachers</h2>

          {/* View All Button (Visible in Desktop View) */}
          <Link
            to="/teachers"
            className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100 hidden md:block"
          >
            View All
          </Link>
        </div>

        <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teachersData.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {/* View All Button (Visible in Mobile View) */}
        <div className="container mx-auto mt-8 md:hidden flex justify-center">
          <Link
            to="/teachers"
            className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100"
          >
            View All
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home
