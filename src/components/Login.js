import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { auth } from '../base/base';
import { useAuthState } from 'react-firebase-hooks/auth';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'; 

const Login = () =>  {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [user, loading, error] = useAuthState(auth);

   const history = useHistory();

   const handleChange = (stateProp, e) => {
      switch(stateProp) {
         case 'username':
            setUsername(e.target.value);
            break;
         case 'password':
            setPassword(e.target.value);
            break;
         default:
            break;
      }
   }

   const login = () => {
      auth.signInWithEmailAndPassword(username, password).then(res => {
         console.log(res);
         localStorage.setItem('config', res.user.email);
         history.push('/home');
      });
    };

      return(
         <Card style={{width:"45%", height:"100%", textAlign:"center", margin:"auto", marginTop:"15%"}}>
         <CardContent >                
         <div className="inner-container">              
             
            
            <LocalHospitalIcon style={{ fontSize: 60 }}/>
            
            <h1 style={{ fontFamily: "MontSerratBold"}}>MediLink</h1>
            
         </div>
            
            <div className="Login Box">
               <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => handleChange('username', e)} value={username}/>  
               <h1 style={{/*padding: "1px 1px*/}}> </h1>
               </div>                       


            <div className="box">
            <TextField id="outlined-basic" label="Password" type="password" variant="outlined" onChange={(e) => handleChange('password', e)} value={password} /> 
            <h1 style={{/*padding: "0.5px 0.5px"*/}}> </h1> 
            
            </div>

            <div className="forgotpasswordbuttons">
            <Button variant="contained" color="secondary">Forgot Password?</Button>
            <h1 style={{/*padding: "0.5px 0.5px"*/}}> </h1>    
            </div>
            <div className="loginbutton">
            <Button  variant="contained" color="primary" style={{width:"190px" }} onClick={() => login()}>Login</Button>
            </div>
               
            </CardContent> 
         </Card>         
      );
}
export default Login;
