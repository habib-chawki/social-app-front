import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../../services/profile';

function Profile() {
   const [profile, setProfile] = useState({});

   useEffect(() => {
      (async () => {
         const userProfile = await fetchProfile();
         console.log(userProfile);
         setProfile(userProfile);
      })();
   }, []);

   return (
      <div>
         <p>First name: {profile.firstName} </p>
         <p>Middle name: {profile.middleName} </p>
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
