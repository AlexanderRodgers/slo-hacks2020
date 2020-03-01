import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../base/base';


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
      firestore.collection('Users')
      );

   return (
      <div>
         {error && <strong>Error: {JSON.stringify(error)}</strong>}
         {loading && <span>Collection: Loading...</span>}
         {/* {value && (
            value.docs.forEach((doc) => {
               console.log(doc.data());
            })
        )} */}
        {value && 
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
               defaultValue="24"
               variant="outlined"
               />
               <TextField
                  style={styles.text}
                  disabled
                  label="Weight"
                  id="patient-weight"
                  defaultValue="160 lbs"
                  variant="outlined"
               />
               <TextField
                  style={styles.text}
                  disabled
                  label="DOB"
                  id="patient-dob"
                  defaultValue="Jan. 27, 1995"
                  variant="outlined"
               />
            </CardContent>
            <CardContent style={styles.content}>
            <TextField
               style={styles.text}
               disabled
               label="Gender"
               id="patient-gender"
               defaultValue="Male"
               variant="outlined"
            />
            <TextField
               style={styles.text}
               disabled
               label="Marital Status"
               id="patient-marital-status"
               defaultValue="Married"
               variant="outlined"
            />
            <TextField
               style={styles.text}
               disabled
               label="Height"
               id="patient-height"
               defaultValue="5 ft. 9 in."
               variant="outlined"
            />
            </CardContent>
            <CardContent style={styles.content}>
            <TextField
               style={styles.text}
               disabled
               label="Language"
               id="patient-language"
               defaultValue="English"
               variant="outlined"
            />
            <TextField
               style={styles.text}
               disabled
               label="Language"
               id="patient-language"
               defaultValue="English"
               variant="outlined"
            />
            <TextField
               style={styles.text}
               disabled
               label="Insurance No."
               id="patient-insurance"
               defaultValue="93460138"
               variant="outlined"
            />
            </CardContent>
            <CardContent style={styles.content}>
            <TextField
               style={{width:"100%"}}
               disabled
               multiline
               rowsMax="10"
               label="Who has access to this content"
               id="patient-marital-status"
               defaultValue="John Taylor - Mercy Medical"
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
                  defaultValue="Peanuts, Walnuts, Almonds"
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
                  defaultValue="Tylenol - 200mg twice a day until headaches subside"
                  variant="outlined"
               />
            </CardContent>
         </Card>
         }
      </div>
   );
};

export default MedForm;