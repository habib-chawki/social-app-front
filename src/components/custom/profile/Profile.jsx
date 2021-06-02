import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

import moment from 'moment';

import { Button, Box, Card } from '@material-ui/core';

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
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt voluptas officiis assumenda asperiores voluptate iure? Modi corporis fuga perspiciatis expedita similique dolores commodi dignissimos? Similique quasi architecto facilis ipsam asperiores, vitae saepe dolor, dignissimos explicabo nesciunt quis consequatur. Rerum quas amet consequatur inventore quisquam accusantium fugiat nemo, perferendis nesciunt iure autem modi doloremque culpa quos repudiandae aperiam sit ducimus. Praesentium deserunt nemo, aspernatur autem maiores explicabo est illum sed maxime dolorem perferendis laudantium unde numquam beatae. Facere voluptas eligendi natus tempore nulla, minus sint, harum rem, asperiores magni voluptatibus libero voluptate saepe vitae necessitatibus obcaecati odio amet temporibus optio',
      experience: [
         {
            startDate: Date.now(),
            endDate: Date.now(),
            position: 'Senior software engineer',
            company: 'google',
            description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, accusamus.',
         },
         {
            startDate: Date.now(),
            endDate: Date.now(),
            position: 'Junior software engineer',
            company: 'Microsoft',
            description:
               'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, accusamus.',
         },
      ],
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
         <Box>
            {profile.experience.map((experience) => (
               <Card key={experience.position}>
                  <h2>
                     {experience.position} - {experience.company}
                  </h2>
                  <h4>
                     {moment(experience.startDate).format('MMM YYYY')} -{' '}
                     {moment(experience.endDate).format('MMM YYYY')}
                  </h4>
                  <p>{experience.description}</p>
               </Card>
            ))}
         </Box>
      </Box>
   );
}

export default Profile;
