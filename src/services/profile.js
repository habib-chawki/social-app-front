import server from '../utils/server';

async function fetchProfile() {
   try {
      const response = await server({
         url: '/profile',
         method: 'get',
      });

      // return user profile
      return response.data;
   } catch (e) {
      console.log('Unable to fetch user profile ' + e.message);
   }
}

async function updateProfile(profile) {
   try {
      const response = await server({
         url: '/profile',
         method: 'put',
         data: profile,
      });

      return response.data;
   } catch (e) {
      console.log('Unable to update profile ' + e.message);
   }
}

export { fetchProfile, updateProfile };
