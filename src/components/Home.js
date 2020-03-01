import React from 'react';
import { Button, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


  

const Home = () => {
    const classes = useStyles();
    return (
        <Card style={{width:"80%",textAlign:"center",margin:"auto",height:"600px",marginTop:"10%"}}>
        <CardContent>
            <h1 style={{padding:"0px 0px"}}> Home Page </h1>
            <div style={{display:"block"}}>
            <Button variant="contained" color="primary" style={{height:"75px",width:"450px",fontSize:"23px",marginTop:"3%"}}>
            View your medical records
            </Button>
            </div>
            

            <div style={{display:"flex",alignContent:"center",paddingTop:"10%",margin:"center",justifyContent:"center"}}> 
                {true
                    ? (
                        <TextField id="outlined-basic" label="Doctor" variant="outlined" />)
                    : (
                        <TextField
                            error
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue=""
                            helperText="Incorrect entry."
                        />
                    )

                }



                <Button variant="contained"color="primary" style={{paddingleft:"px"}}>
                Add doctor
                </Button>
            </div>

            <div style={{paddingTop:"10%"}}>
                <Button variant="contained" style={{margin:"auto"}} color="secondary">
                Logout
                </Button>
            </div>

            <Typography className={classes.pos} color="textSecondary" style={{marginTop:"3%"}}>
            Created by Alexander Rodgers, Andy Do, Jason Tran, and Justin Truong
            </Typography>
            



            
            
            
        </CardContent>
        </Card>
        
    )
}

export default Home;