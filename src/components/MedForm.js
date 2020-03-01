import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../base/base';
import blockchainClient from '../base/blockchainClient';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

let userABI = require('../assets/userBlockInterface.json');

const useStyles = makeStyles({
   root: {
     margins:"10px",width:"100%",height:"670px"
   },
 });

const styles = {
   text: {
      margin: '0 10px 0 10px',
      flexGrow: 1
   },
   content: {
      display: 'flex',
      justifyContent: 'center'
   }
}

const MedForm = () => {
   const [value, loading, error] = useCollection(
      firestore.collection('Users').doc(localStorage.getItem('config'))
   );

   const [userBlock, setUserBlock] = useState(null);

   useEffect(() => {
      if (!value) {
         return;
      }

      if (!value.data().Contracts[0]) {
         return;
      }

      const contract = new blockchainClient.eth.Contract(userABI, value.data().Contracts[0]);

      // contract.methods.getPatient().call({from: value.data().address})
      contract.methods.getPatient().call({from: '0x55e7e72467BFA687e32eAa224F15c2a30Acb7dB7'})
         .then((result) => {
            setUserBlock(result);
         })
         .catch(err => {
            console.log(err);
         })

   }, [value]);
   const classes = useStyles();


   return (
      <div>
         {userBlock 
            ? (
               <Card style={{margin: "10px"}}>
                  <CardContent>
                     <Typography>Medical History</Typography>
                  </CardContent>
                  <CardContent style={styles.content}>
                     <TextField
                     style={styles.text}
                     disabled
                     label="Age"
                     id="patient-age"
                     defaultValue={userBlock.age}
                     variant="outlined"
                     />
                     <TextField
                        style={styles.text}
                        disabled
                        label="Weight"
                        id="patient-weight"
                        defaultValue={userBlock.weight + 'lbs'}
                        variant="outlined"
                     />
                     <TextField
                        style={styles.text}
                        disabled
                        label="DOB"
                        id="patient-dob"
                        defaultValue={userBlock.dob}
                        variant="outlined"
                     />
                  </CardContent>
                  <CardContent style={styles.content}>
                  <TextField
                     style={styles.text}
                     disabled
                     label="Gender"
                     id="patient-gender"
                     defaultValue={userBlock.gender}
                     variant="outlined"
                  />
                  <TextField
                     style={styles.text}
                     disabled
                     label="Marital Status"
                     id="patient-marital-status"
                     defaultValue={userBlock.maritalStatus}
                     variant="outlined"
                  />
                  </CardContent>
                  <CardContent style={styles.content}>
                  <TextField
                     style={styles.text}
                     disabled
                     label="Primary Language"
                     id="patient-language"
                     defaultValue={userBlock.primaryLanguage}
                     variant="outlined"
                  />
                  <TextField
                     style={styles.text}
                     disabled
                     label="Insurance No."
                     id="patient-insurance"
                     defaultValue={userBlock.insuranceNum}
                     variant="outlined"
                  />
                  </CardContent>
                  <CardContent style={styles.content}>
                  <TextField
                     style={{width:"100%"}}
                     disabled
                     multiline
                     rowsMax="10"
                     label="Other entities with access to this content"
                     id="patient-permissions"
                     defaultValue={userBlock.permissionedUsers.length 
                        ? userBlock.permissionedUsers 
                        : "None"}
                     variant="outlined"
                  />
                  </CardContent>
                  <CardContent style={styles.content}>
                     <TextField
                        style={{width:"100%"}}
                        disabled
                        multiline
                        rowsMax="10"
                        label="Allergies"
                        id="patient-allergies"
                        defaultValue={userBlock.allergies.length 
                           ? userBlock.allergies
                           : "None"}
                        variant="outlined"
                     />
                  </CardContent>
                  <CardContent style={styles.content}>
                     <TextField
                        style={{width:"100%"}}
                        disabled
                        multiline
                        rowsMax="10"
                        label="Current Prescriptions"
                        id="patient-prescriptions"
                        defaultValue={userBlock.currentPrescriptions.length  
                           ? userBlock.currentPrescriptions
                           : "None"}
                        variant="outlined"
                     />
                  </CardContent>
                  <CardContent style={styles.content}>
                     <TextField
                        style={{width:"100%"}}
                        disabled
                        multiline
                        rowsMax="10"
                        label="Immunization Records"
                        id="patient-immunization"
                        defaultValue={userBlock.immunizationRecord.length  
                           ? userBlock.immunizationRecord
                           : "None"}
                        variant="outlined"
                     />
                  </CardContent>
               </Card>
            )
            : (
               <div >
                  <Card style={{margin: "10px"}}>
                     <CardContent>
                        <Typography>Medical History</Typography>
                     </CardContent>
                     <CardContent>
                        <Typography>No records!</Typography>
                     </CardContent>
                  </Card>
               </div>
            )
            }
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {/* {loading && <Card style={{margin:"10px",height:"65%"}}> 
            {<Skeleton variant="rect" style={{margin:"10px",width:"100%"}} height={660} /> }</Card> }  */}
            </div>
   );
};

export default MedForm;