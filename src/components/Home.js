import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { firestore } from '../base/base';
import blockchainClient from '../base/blockchainClient';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCollection } from 'react-firebase-hooks/firestore';

let userABI = require('../assets/userBlockInterface.json');

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

    const [userValue, loading, error] = useCollection(
        firestore.collection('Users').doc(localStorage.getItem('config'))
     );
    const [doctor, setDoctor] = useState(null);

    async function addDoctorToBlock() {
        const [first, last] = doctor.split(' ');
        firestore.collection("Users").where('firstName', "==", first).where('lastName', '==', last).where('userType', "==", 'doctor')
            .get()
            .then(function(query) {
                while (!userValue);

                if (query.docs.length) {
                    const value = query.docs[0];

                    const doctorId = query.docs[0].id;

                    firestore.collection("Users").doc(doctorId).set({
                        Contracts: [userValue.data().Contracts[0]]
                    });
                    console.log("Updated contract list");

                    const contract = new blockchainClient.eth.Contract(userABI, userValue.data().Contracts[0]);
                    let newPermissions = [value.data().account];

                    contract.methods.setPermissionedUsers(newPermissions).call({from: userValue.data().address})
                       .then((result) => {
                          console.log('Update permissions success!');
                       })
                       .catch(err => {
                          console.log(err);
                       })
                } else {
                    console.log("No query found");
                }
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
                    {userValue.data().userType === "Doctor"
                        ? "View medical records you have access to"
                        : "View your medical records"
                    }
                </Button>
            </Link>

            </div>
            
            <div style={{display:"flex",alignContent:"center",paddingTop:"10%",margin:"center"}}> 
                {true
                    ? (
                        <TextField id="outlined-basic" 
                                   label="Doctor" 
                                   variant="outlined"
                                   onChange={(event) => setDoctor(event.target.value)} />)
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