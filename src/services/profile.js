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
function updateProfile() {}

export { fetchProfile, updateProfile };
