import React, { useEffect, useState } from 'react';

// libs
import moment from 'moment';

// components
import CollapsibleSkills from './skills/CollapsibleSkills';
import EducationCards from './EducationCards';

// router
import { useParams, useHistory } from 'react-router-dom';

// services
import { fetchProfile } from '../../../services/profile';
import { getUser } from '../../../services/storage';

// mui components
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
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
import CssBaseline from '@material-ui/core/CssBaseline';

// mui icons
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
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
   avatar: {
      height: 150,
      width: 150,
   },
   paper: {
      padding: 20,
   },
   paperItem: {
      marginTop: 20,
   },
   drawer: {
      width: 300,
   },
   drawerPaper: {
      width: 300,
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
      <Box display="flex">
         <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
         >
            <Box display="flex" justifyContent="center" my={5}>
               <Avatar className={classes.avatar} variant="circular" />
            </Box>

            <Divider />

            <Box display="flex" flexDirection="column" flexGrow={1}>
               <List>
                  <ListItem>
                     <ListItemIcon>
                        <AccountBoxIcon fontSize="large" color="secondary" />
                     </ListItemIcon>
                     <ListItemText
                        primary={
                           profile.firstName ? (
                              <Typography variant="h6">
                                 {`${profile.firstName} ${profile.middleName} ${profile.lastName}`}
                              </Typography>
                           ) : (
                              'Undetermined name'
                           )
                        }
                     />
                  </ListItem>

                  <ListItem>
                     <ListItemIcon>
                        <HomeIcon fontSize="large" color="secondary" />
                     </ListItemIcon>
                     <ListItemText
                        primary={
                           <Typography variant="h6">
                              {profile.address || 'Undetermined address'}{' '}
                           </Typography>
                        }
                     />
                  </ListItem>

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
               </List>
            </Box>

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
         </Drawer>

         {/* tabs */}
         <Box display="flex" flexDirection="column" flexGrow={1}>
            {/* app bar */}
            <CssBaseline />

            <AppBar position="sticky" color="default">
               <Tabs
                  value={selectedTab}
                  onChange={handleTabChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
               >
                  <Tab label="Bio" icon={<InfoIcon />} />
                  <Tab label="Experience" icon={<WorkIcon />} />
                  <Tab label="Education" icon={<SchoolIcon />} />
                  <Tab label="Languages" icon={<LanguageIcon />} />
                  <Tab label="Skills" icon={<BuildIcon />} />
               </Tabs>
            </AppBar>

            <Box m={2}>
               {/* Bio */}
               {selectedTab === 0 && (
                  <Box>
                     <Typography variant="body1">
                        {profile.bio || 'Undetermined bio'}
                     </Typography>
                  </Box>
               )}

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
                  <Box>
                     {profile.languages.length === 0 ? (
                        <Typography variant="h4">
                           Undetermined languages
                        </Typography>
                     ) : (
                        profile.languages.map((language, index) => (
                           <Chip
                              key={index}
                              label={language}
                              color="secondary"
                           />
                        ))
                     )}
                  </Box>
               )}

               {/* Skills */}
               {selectedTab === 4 && (
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
            </Box>
         </Box>
      </Box>
   );
}

export default Profile;
