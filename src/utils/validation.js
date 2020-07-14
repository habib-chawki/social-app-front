import isEmail from 'validator/lib/isEmail';

function isInputValid(type, content) {
   const validator = {
      email: isEmail(content),
      password: content.length >= 5,
   };

   return validator[type];
}

export default isInputValid;
