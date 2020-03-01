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
      <div >
         <Particles 
                params={particleOpts} style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: '-100'
                }}/>
            {props.children}
      </div>
   );
};

export default Layout;