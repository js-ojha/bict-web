import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../utils/ColorUtils'

const CourseCard = ({ course }) => {
    return (
        <div key={course.id} className="bg-white rounded-lg shadow-md p-4 md:p-6 m-4 md:m-0" style={{ backgroundColor: Colors.offWhite }}>
            <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-gray-600">
                <strong>Duration:</strong> {course.duration}
            </p>
            <p className="text-gray-600">
                <strong>Taught By:</strong> {course.teacher}
            </p>
            <div className="mt-4 flex justify-start">
                <Link to={`/courses/${course.id}`} className="bg-blue-50 text-blue-500 py-2 px-6 rounded-md font-semibold shadow-md hover:bg-blue-100">
                    Learn More
                </Link>
            </div>
        </div>
    )
}

export default CourseCard
