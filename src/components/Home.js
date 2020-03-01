import React from 'react';
import { Button, CardContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Card } from '@material-ui/core';
const Home = () => {
    return (
        <Card style={{width:"60%",height:"100%",textAlign:"center",margin:"auto",marginTop:"50%"}}>
        <CardContent>
            <h1 style={{padding:"1px 1px"}}> Home Page </h1>
            <div style={{display:"block"}}>
            <Button variant="contained" color="primary">
            View your medical records
            </Button>
            </div>
            

            <div style={{display:"flex",alignContent:"center",paddingTop:"10%",margin:"center"}}> 
                {true
                    ? (
                        <TextField id="outlined-basic" label="Doctor" variant="outlined" />)
                    : (
                        <TextField
                            error
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                        />
                    )

                }



                <Button variant="contained" style={{margin:"auto"}} color="primary">
                Add doctor
                </Button>
            </div>

            <div style={{paddingTop:"10%"}}>
                <Button variant="contained" style={{margin:"auto"}} color="secondary">
                Logout
                </Button>
            </div>
            
            
        </CardContent>
        </Card>
        
    )
}

export default Home;