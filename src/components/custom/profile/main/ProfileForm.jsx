import React, { useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';

import Experience from '../experience/Experience';
import Education from '../education/Education';
import Language from '../language/Language';
import Skills from '../skills/Skills';
import Header from '../../../common/Header';

import ProfileFormSection from './ProfileFormSection';

import { updateProfile } from '../../../../services/profile';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';

import SaveIcon from '@material-ui/icons/Save';

import {
   TextField,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
} from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
   formContainer: {
      width: '55%',
      margin: theme.spacing(3),
   },
   formField: {
      width: '100%',
   },
   formPaper: {
      padding: theme.spacing(5),
   },
   fab: {
      position: 'fixed',
      bottom: theme.spacing(3),
      right: theme.spacing(3),
   },
}));

function ProfileForm() {
   const classes = useStyles();

   // routing params
   const { state: profile } = useLocation();
   const { userId } = useParams();
   const history = useHistory();

   // form state
   const [firstName, setFirstName] = useState(profile.firstName || '');
   const [lastName, setLastName] = useState(profile.lastName || '');
   const [middleName, setMiddleName] = useState(profile.middleName || '');

   const [address, setAddress] = useState(profile.address || '');
   const [bio, setBio] = useState(profile.bio || '');

   const [gender, setGender] = useState(profile.gender || '');
   const [birthday, setBirthday] = useState(profile.birthday || null);

   const [languages, setLanguages] = useState(profile.languages || []);

   const [educations, setEducations] = useState(profile.education || []);
   const [experiences, setExperiences] = useState(profile.experience || []);

   const [skills, setSkills] = useState(
      profile.skills || { technical: [], organizational: [] }
   );

   const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
   };

   const handleLastNameChange = (event) => {
      setLastName(event.target.value);
   };

   const handleMiddleNameChange = (event) => {
      setMiddleName(event.target.value);
   };

   const handleAddressChange = (event) => {
      setAddress(event.target.value);
   };

   const handleBioChange = (event) => {
      setBio(event.target.value);
   };

   const handleGenderChange = (event) => {
      setGender(event.target.value);
   };

   const handleBirthdayChange = (date) => {
      setBirthday(date);
   };

   const handleAddLanguage = (language) => {
      setLanguages([...languages, language]);
   };

   const handleRemoveLanguage = (langToDelete) => {
      setLanguages(languages.filter((lang) => langToDelete !== lang));
   };

   const handleAddSkill = (skill) => {
      // add new skill content
      const newSkills = { ...skills };
      newSkills[skill.type].unshift(skill.content);

      // update skills list
      setSkills(newSkills);
   };

   const handleRemoveSkill = (skillType, skillIndex) => {
      // remove skill from the proper skillType array
      const newSkills = { ...skills };
      newSkills[skillType] = newSkills[skillType].filter(
         (skill, index) => skillIndex !== index
      );

      setSkills(newSkills);
   };

   const handleSaveProfile = () => {
      const updatedProfile = {
         avatar: profile.avatar,
         firstName,
         lastName,
         middleName,
         address,
         gender,
         bio,
         birthday,
         languages,
         experience: experiences,
         education: educations,
         skills,
      };

      // update user profile
      updateProfile(updatedProfile, userId)
         .then((updatedProfile) => {
            // navigate back to '/profile' upon successful profile update
            history.push(`/user/${userId}/profile`);
         })
         .catch((err) =>
            console.log(`Profile could not be updated: ${JSON.stringify(err)}`)
         );
   };

   return (
      <Box>
         <Header />
         <Box display="flex" justifyContent="center">
            {/* sets spacing between papers */}
            <Grid
               container
               className={classes.formContainer}
               direction="column"
               spacing={5}
            >
               <ProfileFormSection>
                  <Grid item>
                     <TextField
                        className={classes.formField}
                        value={firstName}
                        onChange={handleFirstNameChange}
                        label="First name"
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item>
                     <TextField
                        className={classes.formField}
                        value={middleName}
                        onChange={handleMiddleNameChange}
                        label="Middle name"
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item>
                     <TextField
                        className={classes.formField}
                        value={lastName}
                        onChange={handleLastNameChange}
                        label="Last name"
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item>
                     <TextField
                        className={classes.formField}
                        value={address}
                        onChange={handleAddressChange}
                        label="Address"
                        variant="outlined"
                     />
                  </Grid>

                  <Grid item>
                     <FormControl className={classes.formField}>
                        <InputLabel>Gender</InputLabel>
                        <Select value={gender} onChange={handleGenderChange}>
                           <MenuItem value="Male">Male</MenuItem>
                           <MenuItem value="Female">Female</MenuItem>
                           <MenuItem value="Other">Other</MenuItem>
                        </Select>
                     </FormControl>
                  </Grid>

                  <Grid item>
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                           className={classes.formField}
                           label="Birthday"
                           format="dd/MM/yyyy"
                           value={birthday}
                           onChange={handleBirthdayChange}
                        />
                     </MuiPickersUtilsProvider>
                  </Grid>

                  <Grid item>
                     <TextField
                        className={classes.formField}
                        value={bio}
                        onChange={handleBioChange}
                        label="Bio"
                        variant="outlined"
                        multiline
                        rows={8}
                     />
                  </Grid>
               </ProfileFormSection>

               <Grid item>
                  <Experience
                     experiences={experiences}
                     setExperiences={setExperiences}
                  />
               </Grid>

               <Grid item>
                  <Education
                     educations={educations}
                     setEducations={setEducations}
                  />
               </Grid>

               <Grid item>
                  <Paper className={classes.formPaper}>
                     <Grid container direction="column" spacing={3}>
                        <Grid item>
                           <Language
                              languages={languages}
                              onAddLanguage={handleAddLanguage}
                              onRemoveLanguage={handleRemoveLanguage}
                           />
                        </Grid>

                        <Grid item>
                           <Skills
                              skills={skills}
                              onAddSkill={handleAddSkill}
                              onRemoveSkill={handleRemoveSkill}
                           />
                        </Grid>
                     </Grid>
                  </Paper>
               </Grid>
            </Grid>
         </Box>
         <Fab
            color="secondary"
            variant="extended"
            size="large"
            onClick={handleSaveProfile}
            className={classes.fab}
         >
            <Box display="flex" justifyContent="space-around" width={150}>
               <SaveIcon />
               Save Profile
            </Box>
         </Fab>
      </Box>
   );
}

export default ProfileForm;
