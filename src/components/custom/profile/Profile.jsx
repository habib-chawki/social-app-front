import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

import { Button } from '@material-ui/core';

function Profile() {
   const history = useHistory();
   const [profile, setProfile] = useState({});

   // extract user id
   const { userId } = useParams();

   useEffect(() => {
      // fetch profile by user id
      fetchProfile(userId).then((profile) => {
         // set the user profile
         setProfile(profile);
      });
   }, [userId]);

   const handleUpdateProfile = () => {
      history.push('/profile-form');
   };

   return (
      <div>
         {
            // determine whether the logged in user can update the profile
            userId === getUser() && (
               <Button onClick={handleUpdateProfile}>Update profile</Button>
            )
         }
         <h1>
            {profile.firstName} {profile.middleName} {profile.lastName}
         </h1>
         <h2>{profile.address}</h2>
         <h3>{profile.birthday}</h3>

         {JSON.stringify(profile)}
      </div>
   );
}

export default Profile;
