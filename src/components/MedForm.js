import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../base/base';


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
            <CardContent>
               <TextField
               disabled
               label="Age"
               id="patient-age"
               defaultValue="24"
               variant="outlined"
            />
            <TextField
               disabled
               label="Weight"
               id="patient-weight"
               defaultValue="160 lbs"
               variant="outlined"
            />
            <TextField
               disabled
               label="DOB"
               id="patient-dob"
               defaultValue="Jan. 27, 1995"
               variant="outlined"
            />
            </CardContent>
            <CardContent>
            <TextField
               disabled
               label="Gender"
               id="patient-gender"
               defaultValue="Male"
               variant="outlined"
            />
            <TextField
               disabled
               label="Marital Status"
               id="patient-marital-status"
               defaultValue="Married"
               variant="outlined"
            />
            </CardContent>
            <CardContent>
            <TextField
               style={{width:"100%"}}
               disabled
               multiline
               rowsMax="10"
               label="Who has access to this content"
               id="patient-marital-status"
               defaultValue="Hello"
               variant="outlined"
            />
            </CardContent>
         </Card>
         }
      </div>
   );
};

export default MedForm;