import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

import { Button, Box } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CakeIcon from '@material-ui/icons/Cake';

function Profile() {
   const history = useHistory();
   const [profile, setProfile] = useState({
      firstName: 'habib',
      middleName: 'chawki',
      lastName: 'touati',
      address: '21 rue f bou',
      birthday: '01 / 01 / 1992',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam vero culpa similique voluptas laudantium blanditiis amet odit? Atque nesciunt fuga beatae, eum quaerat hic esse impedit consequuntur nulla soluta.',
   });

   // extract user id
   const { userId } = useParams();

   // useEffect(() => {
   //    // fetch profile by user id
   //    fetchProfile(userId).then((profile) => {
   //       // set the user profile
   //       setProfile(profile);
   //    });
   // }, [userId]);

   const handleUpdateProfile = () => {
      history.push('/profile-form');
   };

   return (
      <Box>
         {
            // determine whether the logged in user can update the profile
            userId === getUser() && (
               <Button onClick={handleUpdateProfile}>Update profile</Button>
            )
         }
         <Box>
            <h1>
               <AccountBoxIcon /> {profile.firstName} {profile.middleName}{' '}
               {profile.lastName}
            </h1>

            <h2>
               <HomeIcon /> {profile.address}
            </h2>
            <h3>
               <CakeIcon /> {profile.birthday}
            </h3>
         </Box>
         <Box>
            <h2>
               <InfoIcon /> Bio
            </h2>
            <p>{profile.bio}</p>
         </Box>

         {JSON.stringify(profile)}
      </Box>
   );
}

export default Profile;
