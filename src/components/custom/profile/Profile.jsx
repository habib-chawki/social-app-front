import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';

import { Button } from '@material-ui/core';

function Profile() {
   const history = useHistory();
   const [profile, setProfile] = useState({});

   // extract user id
   const { userId } = useParams();

   useEffect(() => {
      // fetch profile by user id
      fetchProfile(userId).then((profile) => {
         setProfile(profile);
      });
   }, [userId]);

   const handleUpdateProfile = () => {
      history.push('/profile-form');
   };

   return (
      <div>
         <Button onClick={handleUpdateProfile}>Update profile</Button>
         <h1>Profile</h1>
         {JSON.stringify(profile)}
      </div>
   );
}

export default Profile;
