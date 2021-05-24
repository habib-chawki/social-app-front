import React, { useState } from 'react';

function Education() {
   const [educationList, setEducationList] = useState([]);

   const [startDate, setStartDate] = useState();
   const [endDate, setEndDate] = useState();
   const [major, setMajor] = useState('');
   const [school, setSchool] = useState('');
   const [description, setDescription] = useState('');

   const handleStartDateChange = (startDate) => {
      setStartDate(startDate);
   };

   const handleEndDateChange = (endDate) => {
      setEndDate(endDate);
   };

   const handleMajorChange = (event) => {
      setMajor(event.target.value);
   };

   const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
   };

   const handleSchoolChange = (event) => {
      setSchool(event.target.value);
   };

   const addEducation = () => {
      const education = {
         startDate,
         endDate,
         major,
         school,
         description,
      };
      console.log(`Experience added ${JSON.stringify(education)}`);
      setEducationList([...educationList, education]);
   };
}

export default Education;
