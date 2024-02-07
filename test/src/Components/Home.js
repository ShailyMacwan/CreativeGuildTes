import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/data/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profileData && (
        <div>
          <img src={profileData.profilePicture} alt="Profile" />
          <h3>{profileData.fullName}</h3>
          <p>{profileData.bio}</p>
        
        </div>
)}</div>)}
          
        
            
