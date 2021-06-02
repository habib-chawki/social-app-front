import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

import moment from 'moment';

import { Button, Box, Card, Chip } from '@material-ui/core';

import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CakeIcon from '@material-ui/icons/Cake';
import SchoolIcon from '@material-ui/icons/School';
import LanguageIcon from '@material-ui/icons/Language';
import WorkIcon from '@material-ui/icons/Work';
import TimerIcon from '@material-ui/icons/Timer';

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
      <Box>
         {
            // determine whether the logged in user can update the profile
            userId === getUser() && (
               <Button onClick={handleUpdateProfile}>Update profile</Button>
            )
         }

         {/* Basic info */}
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

         {/* Bio */}
         <Box>
            <h2>
               <InfoIcon /> Bio
            </h2>
            <p>{profile.bio}</p>
         </Box>

         {/* Experience */}
         <Box>
            <h2>
               <WorkIcon /> Exeperience
            </h2>
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

         {/* Education */}
         <Box>
            <h2>
               <SchoolIcon /> Education
            </h2>
            {profile.education.map((education) => (
               <Card key={education.major}>
                  <h2>
                     {education.major} - {education.school}
                  </h2>
                  <h4>
                     {moment(education.startDate).format('MMM YYYY')} -{' '}
                     {moment(education.endDate).format('MMM YYYY')}
                  </h4>
                  <p>{education.description}</p>
               </Card>
            ))}
         </Box>

         {/* Languages */}
         <Box>
            <h2>
               <LanguageIcon /> Languages
            </h2>

            {profile.languages.map((language, index) => (
               <Chip key={index} label={language}></Chip>
            ))}
         </Box>

         {/* Skills */}
         <Box>
            <h2>Skills</h2>
            <h3>
               <WorkIcon /> Organizational
            </h3>
            <ul>
               {profile.skills.organizational.map((skill, index) => (
                  <li key={index}>{skill}</li>
               ))}
            </ul>
            <h3>
               <TimerIcon /> Technical
            </h3>
            <ul>
               {profile.skills.technical.map((skill, index) => (
                  <li key={index}>{skill}</li>
               ))}
            </ul>
         </Box>
      </Box>
   );
}

export default Profile;
