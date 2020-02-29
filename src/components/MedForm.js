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
            id="outlined-size-normal"
            defaultValue="24"
            variant="outlined"
         />
         <TextField
            disabled
            label="Weight"
            id="outlined-size-normal"
            defaultValue="160 lbs"
            variant="outlined"
         />
         <TextField
            disabled
            label="DOB"
            id="outlined-size-normal"
            defaultValue="Jan. 27, 1995"
            variant="outlined"
         />
         </CardContent>
         <CardContent>
            <TextField
               disabled
               label="DOB"
               multiline
               rowsMax="10"
               id="outlined-size-normal"
               defaultValue="Jan. 27, 1995"
               variant="outlined"
            />
         </CardContent>
      </Card>
   );
};

export default MedForm;