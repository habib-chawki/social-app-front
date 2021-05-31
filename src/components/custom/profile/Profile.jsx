import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

import { Button } from '@material-ui/core';

function Profile() {
   const history = useHistory();
   const [profile, setProfile] = useState({});
   const [allowUpdate, setAllowUpdate] = useState(false);

   // extract user id
   const { userId } = useParams();

   useEffect(() => {
      // fetch profile by user id
      fetchProfile(userId).then((profile) => {
         // set the user profile
         setProfile(profile);

         // determine whether the logged in user can update the profile
         setAllowUpdate(userId === getUser());
      });
   }, [userId]);

   const handleUpdateProfile = () => {
      history.push('/profile-form');
   };

   return (
      <div>
         {allowUpdate && (
            <Button onClick={handleUpdateProfile}>Update profile</Button>
         )}
         <h1>Profile</h1>
         {JSON.stringify(profile)}
      </div>
   );
}

export default Profile;
