import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';

function Profile() {
   const [profile, setProfile] = useState({});

   //extract user id
   let { userId } = useParams();

   useEffect(() => {
      // fetch profile by user id
      fetchProfile(userId).then((profile) => {
         setProfile(profile);
      });
   }, [userId]);
   return (
      <div>
         <h1>Profile</h1>
         {JSON.stringify(profile)}
      </div>
   );
}

export default Profile;
