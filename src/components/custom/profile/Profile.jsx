import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';

function Profile() {
   const [profile, setProfile] = useState({});

   //extract user id
   const { userId } = useParams();

   useEffect(() => {
      // TODO: fetch profile by user id
      fetchProfile(userId).then((profile) => {
         setProfile(profile);
      });
   }, []);
   return (
      <div>
         <p>Profile</p>
      </div>
   );
}

export default Profile;
