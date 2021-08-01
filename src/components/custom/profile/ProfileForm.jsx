import React, { useState } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';

import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Skills from './Skills';

import { updateProfile } from '../../../services/profile';

import {
   TextField,
   Button,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Box,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function ProfileForm() {
   const { state: profile } = useLocation();
   const { userId } = useParams();

   const history = useHistory();

   const [firstName, setFirstName] = useState(profile.firstName || '');
   const [lastName, setLastName] = useState(profile.lastName || '');
   const [middleName, setMiddleName] = useState(profile.middleName || '');

   const [address, setAddress] = useState(profile.address || '');
   const [bio, setBio] = useState(profile.bio || '');

   const [gender, setGender] = useState(profile.genre || '');
   const [birthday, setBirthday] = useState(profile.birthday || null);

   const [languages, setLanguages] = useState(profile.languages || []);

   const [experiences, setExperiences] = useState(profile.experience || []);
   const [educations, setEducations] = useState(profile.education || []);

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

   const handleAddExperience = (experience) => {
      setExperiences([...experiences, experience]);
   };

   const handleAddEducation = (education) => {
      setEducations([...educations, education]);
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
      const profile = {
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
      updateProfile(profile, userId)
         .then((updatedProfile) => {
            // navigate back to '/profile' upon successful profile update
            history.push(`/user/${userId}/profile`);
         })
         .catch((err) =>
            console.log(`Profile could not be updated: ${JSON.stringify(err)}`)
         );
   };

   return (
      <Grid container direction="column" spacing={3} alignItems="center">
         <Grid item>
            <TextField
               value={firstName}
               onChange={handleFirstNameChange}
               label="First name"
               variant="outlined"
            />
         </Grid>

         <Grid item>
            <TextField
               value={middleName}
               onChange={handleMiddleNameChange}
               label="Middle name"
               variant="outlined"
            />
         </Grid>

         <Grid item>
            <TextField
               value={lastName}
               onChange={handleLastNameChange}
               label="Last name"
               variant="outlined"
            />
         </Grid>

         <Grid item>
            <TextField
               value={address}
               onChange={handleAddressChange}
               label="Address"
               variant="outlined"
            />
         </Grid>

         <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={handleGenderChange}>
               <MenuItem value="Male">Male</MenuItem>
               <MenuItem value="Female">Female</MenuItem>
               <MenuItem value="Other">Other</MenuItem>
            </Select>
         </FormControl>

         <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
               label="Birthday"
               format="dd/MM/yyyy"
               value={birthday}
               onChange={handleBirthdayChange}
            />
         </MuiPickersUtilsProvider>

         <TextField
            value={bio}
            onChange={handleBioChange}
            label="Bio"
            variant="outlined"
            multiline
            rows={6}
         />

         <Language
            languages={languages}
            onAddLanguage={handleAddLanguage}
            onRemoveLanguage={handleRemoveLanguage}
         />

         <Experience
            experiences={experiences}
            onAddExperience={handleAddExperience}
         />
         <Education
            educations={educations}
            onAddEducation={handleAddEducation}
         />

         <Skills
            skills={skills}
            onAddSkill={handleAddSkill}
            onRemoveSkill={handleRemoveSkill}
         />

         <Button onClick={handleSaveProfile}>Save Profile</Button>
      </Grid>
   );
}

export default ProfileForm;
