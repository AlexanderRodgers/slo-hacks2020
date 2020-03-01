import React from 'react';
import Particles from 'react-particles-js';

const particleOpts = {
   particles: {
      number: {
         value: 150,
         density: {
            enable: true,
            value_area: 800
         }
      }
   }
}

const Layout = (props) => {
   document.body.style.background = "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)";
   return (
      <div>
         {props.children}
         <Particles 
                params={particleOpts} />
      </div>
   );
};

export default Layout;