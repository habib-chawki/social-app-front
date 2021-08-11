import React, { useEffect, useState } from 'react';

// libs
import moment from 'moment';

// components
import CollapsibleSkills from './skills/CollapsibleSkills';

// router
import { useParams, useHistory } from 'react-router-dom';

// services
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

// mui components
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// mui icons
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CakeIcon from '@material-ui/icons/Cake';
import WcIcon from '@material-ui/icons/Wc';
import SchoolIcon from '@material-ui/icons/School';
import LanguageIcon from '@material-ui/icons/Language';
import BuildIcon from '@material-ui/icons/Build';
import WorkIcon from '@material-ui/icons/Work';
import TimerIcon from '@material-ui/icons/Timer';

// styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   paper: {
      padding: 20,
   },
   paperItem: {
      marginTop: 20,
   },
});

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

   // tabs state
   const [selectedTab, setSelectedTab] = useState(0);

   // styling
   const classes = useStyles();

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
      <Box>
         {/* <Drawer variant="permanent" anchor="left">
            <Divider />
            <List>
               <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText />
               </ListItem>
            </List>
         </Drawer> */}

         {/* tabs */}
         <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
         >
            <Tab label="General" icon={<AccountBoxIcon />} />
            <Tab label="Bio" icon={<InfoIcon />} />
            <Tab label="Experience" icon={<WorkIcon />} />
            <Tab label="Education" icon={<SchoolIcon />} />
            <Tab label="Languages" icon={<LanguageIcon />} />
            <Tab label="Skills" icon={<BuildIcon />} />
         </Tabs>
         <Box>
            {/* Basic info */}
            {selectedTab === 0 && (
               <Box>
                  <Typography variant="h4" gutterBottom>
                     <AccountCircleIcon />
                     {profile.firstName
                        ? `${profile.firstName} ${profile.middleName} ${profile.lastName}`
                        : 'Undetermined name'}
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                     <HomeIcon /> {profile.address || 'Undetermined address'}
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                     <CakeIcon />{' '}
                     {moment(profile.birthday).format('MMMM Do YYYY')}
                  </Typography>

                  <Typography variant="h5" gutterBottom>
                     <WcIcon /> {profile.gender}
                  </Typography>
               </Box>
            )}

            {/* Bio */}
            {selectedTab === 1 && (
               <Box>
                  <Typography variant="body1">
                     {profile.bio || 'Undetermined bio'}
                  </Typography>
               </Box>
            )}

            {/* Experience */}
            {selectedTab === 2 && (
               <Box>
                  {profile.experience.length === 0 ? (
                     <p>Undetermined experience</p>
                  ) : (
                     profile.experience.map((experience) => (
                        <Paper
                           className={`${classes.paper} ${classes.paperItem}`}
                           key={experience.position}
                           elevation="3"
                        >
                           <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                           >
                              <Typography variant="h4">
                                 {experience.company}
                              </Typography>

                              <Typography
                                 variant="subtitle1"
                                 color="textSecondary"
                              >
                                 {moment(experience.startDate).format(
                                    'MMMM YYYY'
                                 )}{' '}
                                 -{' '}
                                 {moment(experience.endDate).format(
                                    'MMMM YYYY'
                                 )}
                              </Typography>
                           </Box>

                           <Typography
                              variant="h5"
                              className={classes.paperItem}
                           >
                              {experience.position}
                           </Typography>

                           <Divider className={classes.paperItem} />

                           <Typography
                              variant="body1"
                              className={classes.paperItem}
                           >
                              {experience.description}
                           </Typography>
                        </Paper>
                     ))
                  )}
               </Box>
            )}

            {/* Education */}
            {selectedTab === 3 && (
               <Box>
                  {profile.education.length === 0 ? (
                     <p>Undetermined education</p>
                  ) : (
                     profile.education.map((education) => (
                        <Paper
                           className={`${classes.paper} ${classes.paperItem}`}
                           key={education.major}
                           elevation="3"
                        >
                           <Box
                              display="flex"
                              justifyContent="space-between"
                              alignItems="center"
                           >
                              <Typography variant="h4">
                                 {education.school}
                              </Typography>

                              <Typography
                                 variant="subtitle1"
                                 color="textSecondary"
                              >
                                 {moment(education.startDate).format(
                                    'MMMM YYYY'
                                 )}{' '}
                                 -{' '}
                                 {moment(education.endDate).format('MMMM YYYY')}
                              </Typography>
                           </Box>

                           <Typography
                              variant="h5"
                              className={classes.paperItem}
                           >
                              {education.major}
                           </Typography>

                           <Divider className={classes.paperItem} />

                           <Typography
                              variant="body1"
                              className={classes.paperItem}
                           >
                              {education.description}
                           </Typography>
                        </Paper>
                     ))
                  )}
               </Box>
            )}

            {/* Languages */}
            {selectedTab === 4 && (
               <Box>
                  {profile.languages.length === 0 ? (
                     <Typography variant="h4">
                        Undetermined languages
                     </Typography>
                  ) : (
                     profile.languages.map((language, index) => (
                        <Chip key={index} label={language} color="secondary" />
                     ))
                  )}
               </Box>
            )}

            {/* Skills */}
            {selectedTab === 5 && (
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
            )}
            {
               // determine whether the logged in user can update the profile
               userId === getUser() && (
                  <Button onClick={handleUpdateProfile}>Update profile</Button>
               )
            }
         </Box>
      </Box>
   );
}

export default Profile;
