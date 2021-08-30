import axios from 'axios';

const baseUrl = '/users';

async function fetchProfile(userId) {
   try {
      const response = await axios({
         url: `${baseUrl}/${userId}/profile`,
         method: 'get',
      });

      // return user profile
      return response.data;
   } catch (e) {
      console.log('Unable to fetch user profile ' + e.message);
   }
}

async function updateProfile(profile, userId) {
   try {
      const response = await axios({
         url: `${baseUrl}/${userId}/profile`,
         method: 'put',
         data: profile,
      });

      return response.data;
   } catch (e) {
      console.log('Unable to update profile ' + e.message);
   }
}

async function uploadAvatar(userId, avatar) {
   try {
      const response = await axios({
         url: `${baseUrl}/${userId}/profile/avatar`,
         method: 'post',
         data: avatar,
      });

      return response.data;
   } catch (err) {
      console.log('Unable to upload avatar');
      throw err.response.data;
   }
}

export { fetchProfile, updateProfile, uploadAvatar };
