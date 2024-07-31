// eslint-disable-next-line no-unused-vars
import React from 'react'
import ProfileHeader from './ProfileHeader'
import '../styles/profile.css'
import '../styles/teacherList.css'

import Select from 'react-select'; // Import react-select for dropdown


const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className="filters">
        <Select 
          options={options} 
          isMulti 
          className="dropdown" 
          placeholder="Select options..."
        />
        {/* <div className="checkbox-menu">
          <label>
            <input type="checkbox" /> Option A
          </label>
          <label>
            <input type="checkbox" /> Option B
          </label>
          <label>
            <input type="checkbox" /> Option C
          </label>
        </div> */}
      </div>
      {/* <div className='user-profile'>
        <div className='user-courses'>
           {courses.map((courses)=> (
            // eslint-disable-next-line react/jsx-key
            <div className='course'>
              <div className='course-detail'>
                <div className='course-cover'>{courses.icon}</div>
                <div className='course-name'>
                  <h5 className='title'>{courses.title}</h5>
                </div>
              </div>
               <div className='action'>:</div>
            </div>
            
           ))}
        </div>
      </div> */}
    </div>
  )
}

export default Profile
