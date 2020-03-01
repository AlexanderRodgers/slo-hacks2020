import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { firestore } from '../base/base';
import blockchainClient from '../base/blockchainClient';
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

    const [doctor, setDoctor] = useState(null);

    async function addDoctorToBlock() {
        console.log('click');
        const [first, last] = doctor.split(' ');
        firestore.collection("Users").where('firstName', "==", first).where('lastName', '==', last).where('userType', "==", 'doctor')
            .get()
            .then(function(query) {
                query.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }

    return (
        <Card style={{width:"80%",textAlign:"center",margin:"auto",height:"600px",marginTop:"10%"}}>
        <CardContent>
            <h1 style={{padding:"0px 0px"}}> Home Page </h1>
            <div style={{display:"block"}}>

            <Link to='/medical'>
                <Button variant="contained" color="primary">
                    View your medical records
                </Button>
            </Link>

            </div>
            
            <div style={{display:"flex",alignContent:"center",paddingTop:"10%",margin:"center"}}> 
                {true
                    ? (
                        <TextField id="outlined-basic" 
                                   label="Doctor" 
                                   variant="outlined"
                                   onChange={(event) => {setDoctor(event.target.value); console.log(doctor);}} />)
                    : (
                        <TextField
                            error
                            id="standard-error-helper-text"
                            label="Doctor"
                            helperText="Incorrect entry."
                            onChange={(event) => { 
                                setDoctor(event.target.value); 
                                console.log(doctor); }}
                        />
                    )
                }
                <Button variant="contained" 
                        style={{margin:"auto"}} 
                        color="primary"
                        onClick={() => addDoctorToBlock()}>
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