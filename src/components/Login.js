import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


export const Fonts = {
   MontSerrat: 'Montserrat-Regular'
}



class Login extends React.Component {

   constructor(props) {
       super(props);
       this.state = {   };
   }

   submitLogin(e){
       
   }

   render() {
       return(
          <Card style={{width:"45%", height:"100%", textAlign:"center", margin:"auto", marginTop:"15%"}}>
            <CardContent >                
            <div className="inner-container">              
                
               
               <LocalHospitalIcon style={{ fontSize: 60 }}/>
               
               <h1 style={{ fontFamily: Fonts.MontSerratBold}}>Medichain</h1>
               

             
               <div className="Login Box">
                  <TextField id="outlined-basic" label="Username" variant="outlined" />  
                  <h1 style={{/*padding: "1px 1px*/}}> </h1>
                  </div>                       
               

               

                                              
              
               

               <div className="box">
               <TextField id="outlined-basic" label="Password" variant="outlined" /> 
               <h1 style={{/*padding: "0.5px 0.5px"*/}}> </h1> 
               
               </div>

               <div className="forgotpasswordbuttons">
               <Button variant="contained" color="secondary">Forgot Password?</Button>
               <h1 style={{/*padding: "0.5px 0.5px"*/}}> </h1>    
               </div>
               <div className="loginbutton">
               <Button  variant="contained" color="primary" style={{width:"190px" }}>Login</Button>
               </div>
                  
             </div>  
             </CardContent> 
            </Card>  
         
       );
       
   }     
         


}


export default Login
