import React from 'react';

function withCredentials(Component) {
   return (props) => {
      return <Component {...props} />;
   };
}

export default withCredentials;
