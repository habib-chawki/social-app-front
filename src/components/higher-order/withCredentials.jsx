import React from 'react';

function withCredentials(Component) {
   return () => {
      return <Component />;
   };
}
