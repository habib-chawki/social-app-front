import React from 'react';

function Profile() {
   return (
      <div>
         <label htmlFor="first-name">First name:</label>
         <input type="text" id="first-name" />

         <label htmlFor="middle-name">Middle name:</label>
         <input type="text" id="middle-name" />

         <label htmlFor="last-name">Last name:</label>
         <input type="text" id="last-name" />

         <label htmlFor="address">Address:</label>
         <input type="text" id="address" />

         <label htmlFor="birthday">Birthday:</label>
         <input type="date" id="birthday" />

         <label htmlFor="gender">Gender:</label>

         <input type="radio" id="male" name="gender" value="male" />
         <label htmlFor="male">Male</label>

         <input type="radio" id="female" name="gender" value="female" />
         <label htmlFor="female">Female</label>

         <input type="radio" id="other" name="gender" value="other" />
         <label htmlFor="other">Other</label>
         <br />
         <label htmlFor="bio">Bio:</label>
         <textarea
            name="bio"
            id="bio"
            cols="40"
            rows="5"
            placeholder="Your bio ..."
         />
      </div>
   );
}

export default Profile;
