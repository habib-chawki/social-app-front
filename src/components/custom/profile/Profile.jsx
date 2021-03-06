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
   // extract user id
   const { userId } = useParams();
   const history = useHistory();

   const [profile, setProfile] = useState({
      firstName: '',
      middleName: '',
      lastName: '',
      birthday: '',
      address: '',
      gender: '',
      bio: '',
      experience: [],
      education: [],
      skills: { organizational: [], technical: [] },
      languages: [],
   });

   useEffect(() => {
      // fetch profile by user id
      fetchProfile(userId)
         .then((profile) => {
            // set the user profile
            setProfile(profile);
         })
         .catch((err) => {
            console.log('Could not fetch profile' + JSON.stringify(err));
         });
   }, [userId]);

   const handleUpdateProfile = () => {
      // navigate to the update form and supply profile data to populate it
      history.push({
         pathname: `/user/${userId}/profile-form`,
         state: profile,
      });
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
               <AccountBoxIcon />{' '}
               {profile.firstName
                  ? `${profile.firstName} ${profile.middleName} ${profile.lastName}`
                  : 'Undetermined name'}
            </h1>

            <h2>
               <HomeIcon /> {profile.address || 'Undetermined address'}
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
            <p>{profile.bio || 'Undetermined bio'}</p>
         </Box>

         {/* Experience */}
         <Box>
            <h2>
               <WorkIcon /> Exeperience
            </h2>

            {profile.experience.length === 0 ? (
               <p>Undetermined experience</p>
            ) : (
               profile.experience.map((experience) => (
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
               ))
            )}
         </Box>

         {/* Education */}
         <Box>
            <h2>
               <SchoolIcon /> Education
            </h2>
            {profile.education.length === 0 ? (
               <p>Undetermined education</p>
            ) : (
               profile.education.map((education) => (
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
               ))
            )}
         </Box>

         {/* Languages */}
         <Box>
            <h2>
               <LanguageIcon /> Languages
            </h2>

            {profile.languages.length === 0 ? (
               <p>Undetermined languages</p>
            ) : (
               profile.languages.map((language, index) => (
                  <Chip key={index} label={language}></Chip>
               ))
            )}
         </Box>

         {/* Skills */}
         <Box>
            <h2>Skills</h2>
            <h3>
               <WorkIcon /> Organizational
            </h3>
            <ul>
               {profile.skills.organizational.length === 0 ? (
                  <p>Undetermined organizational skills</p>
               ) : (
                  profile.skills.organizational.map((skill, index) => (
                     <li key={index}>{skill}</li>
                  ))
               )}
            </ul>
            <h3>
               <TimerIcon /> Technical
            </h3>
            <ul>
               {profile.skills.technical.length === 0 ? (
                  <p>Undetermined technical skills</p>
               ) : (
                  profile.skills.technical.map((skill, index) => (
                     <li key={index}>{skill}</li>
                  ))
               )}
            </ul>
         </Box>
      </Box>
   );
}

export default Profile;
