import React from 'react'
import { Link } from 'react-router-dom'
import Colors from '../utils/ColorUtils'

const TeacherCard = ({teacher}) => {
    return (
        <div key={teacher.id} className="bg-white rounded-lg shadow-md p-4 md:p-6" style={{ backgroundColor: Colors.offWhite }}>
            <div className="flex items-center mb-6">
                <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-16 h-16 object-cover rounded-full mr-4"
                />
                <div>
                    <h3 className="text-xl font-semibold">{teacher.name}</h3>
                    <p className="text-gray-600">
                        <span className="font-bold">Experience:</span> {teacher.experience}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-bold">Courses Taught:</span>{' '}
                        {teacher.coursesTaught.join(', ')}
                    </p>
                </div>
            </div>
            <p className="text-gray-600 mb-4">{teacher.bio}</p>
        </div>
    )
}

export default TeacherCard
