import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
   //extract user id
   const { userId } = useParams();

   useEffect(() => {
      // TODO: fetch profile by user id
   }, []);
   return (
      <div>
         <p>Profile</p>
      </div>
   );
}

export default Profile;
