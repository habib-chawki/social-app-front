import React, { useEffect, useState } from 'react';

// libs
import moment from 'moment';

// components
import CollapsibleSkills from '../skills/CollapsibleSkills';
import ProfileDrawer from './ProfileDrawer';
import EducationCards from '../education/EducationCards';
import ExperienceCards from '../experience/ExperienceCards';
import ProfileAppBar from './ProfileAppBar';
import Languages from '../language/Languages';

import Fallback from '../Fallback';

// router
import { useParams, useHistory } from 'react-router-dom';

// services
import { fetchProfile } from '../../../../services/profile';
import { getUser } from '../../../../services/storage';

// mui components
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Typography from '@material-ui/core/Typography';

// mui icons
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CakeIcon from '@material-ui/icons/Cake';
import WcIcon from '@material-ui/icons/Wc';
import WorkIcon from '@material-ui/icons/Work';
import TimerIcon from '@material-ui/icons/Timer';

function Profile() {
   // extract user id
   const { userId } = useParams();
   const history = useHistory();

   const [profile, setProfile] = useState({
      avatar: '',
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

   // tabs state
   const [selectedTab, setSelectedTab] = useState(0);

   const handleTabChange = (event, tabIndex) => {
      setSelectedTab(tabIndex);
   };

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
      <Box display="flex">
         <ProfileDrawer userId={userId} avatar={profile.avatar || ''}>
            <List>
               <ListItem>
                  <ListItemIcon>
                     <AccountBoxIcon fontSize="large" color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                     primary={
                        profile.firstName && (
                           <Typography variant="h6">
                              {`${profile.firstName} ${profile.middleName} ${profile.lastName}`}
                           </Typography>
                        )
                     }
                  />
               </ListItem>

               {profile.address && (
                  <ListItem>
                     <ListItemIcon>
                        <HomeIcon fontSize="large" color="secondary" />
                     </ListItemIcon>
                     <ListItemText
                        primary={
                           <Typography variant="h6">
                              {profile.address}
                           </Typography>
                        }
                     />
                  </ListItem>
               )}

               {profile.birthday && (
                  <ListItem>
                     <ListItemIcon>
                        <CakeIcon fontSize="large" color="secondary" />
                     </ListItemIcon>
                     <ListItemText
                        primary={
                           <Typography variant="h6">
                              {moment(profile.birthday).format('MMMM Do YYYY')}
                           </Typography>
                        }
                     />
                  </ListItem>
               )}

               {profile.gender && (
                  <ListItem>
                     <ListItemIcon>
                        <WcIcon fontSize="large" color="secondary" />
                     </ListItemIcon>
                     <ListItemText
                        primary={
                           <Typography variant="h6">
                              {profile.gender}
                           </Typography>
                        }
                     />
                  </ListItem>
               )}
            </List>

            {
               // determine whether the logged in user can update the profile
               userId === getUser() && (
                  <Button
                     variant="contained"
                     color="secondary"
                     onClick={handleUpdateProfile}
                     size="large"
                     style={{ borderRadius: 0 }}
                  >
                     Update profile
                  </Button>
               )
            }
         </ProfileDrawer>

         {/* tabs */}
         <Box display="flex" flexDirection="column" flexGrow={1} height="100vh">
            <ProfileAppBar
               onTabChange={handleTabChange}
               selectedTab={selectedTab}
            />

            <Box m={2} height="100%">
               {/* Bio */}
               {selectedTab === 0 &&
                  (profile.bio ? (
                     <Typography variant="body1">{profile.bio}</Typography>
                  ) : (
                     <Fallback message="Bio not provided" />
                  ))}

               {/* Experience */}
               {selectedTab === 1 && (
                  <ExperienceCards experiences={profile.experience} />
               )}

               {/* Education */}
               {selectedTab === 2 && (
                  <EducationCards educations={profile.education} />
               )}

               {/* Languages */}
               {selectedTab === 3 && (
                  <Languages languages={profile.languages} />
               )}

               {/* Skills */}
               {selectedTab === 4 &&
                  (profile.skills.organizational.length === 0 &&
                  profile.skills.technical.length === 0 ? (
                     <Fallback message="Skills not provided" />
                  ) : (
                     <List>
                        <CollapsibleSkills
                           skills={profile.skills.organizational}
                           heading="Organizational"
                           icon={<WorkIcon />}
                        />

                        <CollapsibleSkills
                           skills={profile.skills.technical}
                           heading="Technical"
                           icon={<TimerIcon />}
                        />
                     </List>
                  ))}
            </Box>
         </Box>
      </Box>
   );
}

export default Profile;
