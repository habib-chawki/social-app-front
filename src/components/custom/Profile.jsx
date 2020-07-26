import React, { useState, useEffect } from 'react';
// import { fetchProfile, updateProfile } from '../../services/profile';

const useEdit = ({ type, label, options = [] }) => {
   const [edit, setEdit] = useState(false);
   const [content, setContent] = useState();

   const handleEdit = () => {
      setEdit(!edit);
   };

   const handleContent = (event) => {
      setContent(event.target.value);
   };

   const defaultProps = { value: content, onChange: handleContent };
   const input = {
      text: <input type="text" {...defaultProps} />,
      textarea: <textarea cols="50" rows="10" {...defaultProps} />,
      select: (
         <select {...defaultProps}>
            {options.map((value) => (
               <option key={value} value={value}>
                  {value}
               </option>
            ))}
         </select>
      ),
   };

   return (
      <div>
         {edit ? (
            input[type]
         ) : (
            <p>
               {label}: {content}
            </p>
         )}
         <button onClick={handleEdit}>{!edit ? 'edit' : 'save'}</button>
      </div>
   );
};

function Profile() {
   // const [profile, setProfile] = useState({
   //    firstName: 'habib',
   //    middleName: 'chawki',
   // });

   // fetch user profile
   // useEffect(() => {
   //    (async () => {
   //       const userProfile = await fetchProfile();
   //       setProfile(userProfile);
   //    })();
   // }, []);

   // const handleProfileUpdate = () => {
   //    updateProfile(profile);
   // };

   return (
      <div>
         {useEdit({ type: 'text', label: 'First name' })}
         {useEdit({ type: 'textarea', label: 'Bio' })}
         {useEdit({
            type: 'select',
            label: 'Gender',
            options: ['Male', 'Female', 'Other'],
         })}
         {/*{isEditFirstName ? (
            <input type="text" value={firstName} onChange={handleFirstName} />
         ) : (
            <p>First name: {firstName} </p>
         )}
         <button onClick={handleEditFirstName}>
            {!isEditFirstName ? 'edit' : 'save'}
         </button>

         {isEditMiddleName ? (
            <input type="text" value={middleName} onChange={handleMiddleName} />
         ) : (
            <p>Middle name: {middleName} </p>
         )}
         <button onClick={handleEditMiddleName}>
            {!isEditMiddleName ? 'edit' : 'save'}
         </button>

         <p>Last name: {profile.lastName} </p>
         <p>Address: {profile.address} </p>
         <p>Birthday: {profile.birthday} </p>
         <p>Gender: {profile.gender} </p>
         <p>Bio: {profile.bio} </p>
         <div>
            <p>Experience: </p>
            {profile.experience.map((item) => (
               <ul>
                  {item.startDate} - {item.endDate}
                  <li>position: {item.postition}</li>
                  <li>company: {item.company}</li>
                  <li>descritption: {item.description}</li>
               </ul>
            ))}
         </div>
         <div>
            <p>Education: </p>
            {profile.education.map((item) => (
               <ul>
                  {item.startDate} - {item.endDate}
                  <li>major: {item.major}</li>
                  <li>school: {item.school} </li>
                  <li>description: {item.description} </li>
               </ul>
            ))}
         </div>
         <div>
            <p>Skills</p>
            <ul>
               <li>Technical</li>
               <ul>
                  {profile.skills.technical.map((item) => (
                     <li>{item}</li>
                  ))}
               </ul>
               <li>organizational</li>
               <ul>
                  {profile.skills.organizational.map((item) => (
                     <li>{item}</li>
                  ))}
               </ul>
            </ul>
         </div>
         <div>
            <p>Languages</p>
            <ul>
               {profile.languages.map((item) => (
                  <li>{item}</li>
               ))}
            </ul>
         </div> */}
         {/* <button onClick={handleProfileUpdate}>Save</button> */}
      </div>
   );
   //    <div>
   //       <button>Edit</button>
   //       <div>
   //          <label htmlFor="first-name">First name:</label>
   //          <input type="text" id="first-name" />

   //          <label htmlFor="middle-name">Middle name:</label>
   //          <input type="text" id="middle-name" />

   //          <label htmlFor="last-name">Last name:</label>
   //          <input type="text" id="last-name" />

   //          <label htmlFor="address">Address:</label>
   //          <input type="text" id="address" />

   //          <label htmlFor="birthday">Birthday:</label>
   //          <input type="date" id="birthday" />

   //          <label htmlFor="gender">Gender:</label>

   //          <input type="radio" id="male" name="gender" value="male" />
   //          <label htmlFor="male">Male</label>

   //          <input type="radio" id="female" name="gender" value="female" />
   //          <label htmlFor="female">Female</label>

   //          <input type="radio" id="other" name="gender" value="other" />
   //          <label htmlFor="other">Other</label>
   //          <br />
   //          <label htmlFor="bio">Bio:</label>
   //          <textarea
   //             name="bio"
   //             id="bio"
   //             cols="40"
   //             rows="5"
   //             placeholder="Your bio ..."
   //          />
   //       </div>
   //    </div>
}

export default Profile;
