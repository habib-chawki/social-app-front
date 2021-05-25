import React, { useState } from 'react';

import Experience from './Experience';
import Education from './Education';
import Language from './Language';
import Skills from './Skills';

import {
   TextField,
   Button,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Box,
} from '@material-ui/core';

import {
   KeyboardDatePicker,
   MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';

function ProfileForm() {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [middleName, setMiddleName] = useState('');

   const [address, setAddress] = useState('');
   const [bio, setBio] = useState('');

   const [gender, setGender] = useState('');
   const [birthday, setBirthday] = useState();

   const [languages, setLanguages] = useState([]);

   const [experiences, setExperiences] = useState([]);
   const [educations, setEducations] = useState([]);

   const [skills, setSkills] = useState([]);

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
      setLanguages(languages.filter((lang) => langToDelete.key !== lang.key));
   };

   const handleAddExperience = (experience) => {
      console.log(`Experience added ${JSON.stringify(experience)}`);
      setExperiences([...experiences, experience]);
   };

   const handleAddEducation = (education) => {
      console.log(`Education added ${JSON.stringify(education)}`);
      setEducations([...educations, education]);
   };

   const handleAddSkill = (skill) => {
      console.log(`Skill added ${JSON.stringify(skill)}`);
      setSkills([...skills, skill]);
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
         experiences,
         educations,
      };

      // TODO: call backend service, save user profile
      console.log(JSON.stringify(profile));
   };

   return (
      <Box display="flex" flexDirection="column" mx={20} my={5}>
         <TextField
            value={firstName}
            onChange={handleFirstNameChange}
            label="First name"
            variant="outlined"
         />
         <TextField
            value={middleName}
            onChange={handleMiddleNameChange}
            label="Middle name"
            variant="outlined"
         />
         <TextField
            value={lastName}
            onChange={handleLastNameChange}
            label="Last name"
            variant="outlined"
         />
         <TextField
            value={address}
            onChange={handleAddressChange}
            label="Address"
            variant="outlined"
         />

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

         <Skills skills={skills} onAddSkill={handleAddSkill} />

         <Button onClick={handleSaveProfile}>Save Profile</Button>
      </Box>
   );
}

export default ProfileForm;
