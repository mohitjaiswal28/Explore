import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import Vector1 from "../assets/Vector/1.png";
import data from "../pages/data.json";

const Explore = () => {
  const [profileData, setProfileData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setProfileData(data);
  }, []);

  const filteredProfileDetails = profileData.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <section id='home'>
      <img src={Vector1} alt="Vector1" className="Vector1" />
      <h1 className='d-flex justify-content-center'>Explore People here</h1>
      <div className='d-flex justify-content-center align-items-center m-5'>
        <input 
          type="search" 
          name="" 
          id="" 
          className='h-25 rounded-3 w-50 fs-6' 
          placeholder="Search people with their name" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className='d-flex justify-content-center align-items-center m-lg-5'>
        {filteredProfileDetails.length > 0 ? (
          <table className='custom-table' style={{backgroundColor: '#C5EBAA', border: '1px solid #c0f1e6'}}>
            <thead>
              <tr>
                <th>Profile</th>
                <th>View</th>
                <th>Address on Map</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredProfileDetails.map((profile, index) => (
                <tr key={index}>
                  <td>
                    <div className='flex justify-content-center align-items-center'>

                      <div className='col-lg-12'>
                        <ProfileCard 
                        name={profile.name}
                        age={profile.age}
                        location={profile.location}
                        occupation={profile.occupation}
                        interests={profile.interests}
                        address={profile.address}
                        image={profile.image}
                        instagram={profile.instagram}
                        linkedin={profile.linkedin}
                        />
                      </div>

                    </div>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <Link to={profile.id}>
                      <button className='btn btn-primary'>View</button>
                    </Link>
                  </td>

                  <td style={{textAlign: 'center'}}>
                  <Link 
                      to={`https://www.google.com/maps/search/?api=1&query=${profile.address}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <button className='btn btn-warning'>Open Map</button>
                    </Link>
                  </td>

                  {/* <td style={{textAlign: 'center'}}>
                    <button className='btn btn-danger'>Open Map</button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No people found with name</p>
        )}
      </div>
    </section>
  );
};

export default Explore;
