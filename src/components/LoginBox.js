import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class LoginBox extends React.Component {

   constructor(props) {
       super(props);
       this.state = {   };
   }

   submitLogin(e){
       
   }

   render() {
       return(
      
           <div className="inner-container">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
               <div className='header'>
                 Login  
               </div>

               <div className="box">
                   <div className="input-group">
                       <label htmlFor="username">Username</label>
                       <input type="text" name="username" className="login-input" placeholder="Username"/>
                   </div>
                   <div className="input-group">
                       <label htmlFor="password">Password</label>
                       <input type="password" name="password" className="login-input" placeholder="Password"/>
                   </div>
                   <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
               </div>
           </div>    
       );
       
   }      
       


}
