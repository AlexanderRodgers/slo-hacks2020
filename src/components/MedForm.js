import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const MedForm = () => {
   return (
      <Card>
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
            defaultValue="Male"
            variant="outlined"
         />
         </CardContent>
      </Card>
   );
};

export default MedForm;