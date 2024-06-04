import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FuseSvgIcon from '../FuseSvgIcon';

export default function FormPropsTextFields() {

    return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
        <TextField
          id="project_name"
          label="Project Name"
        />
          <div>
          <TextField
            id="project_location"
            label="Project Location"
          />
          </div>
          <div>
          <TextField
            id="project_type"
            label="Project Type"
          />
          </div>
          <div>
          <TextField
            id="owner"
            label="Owner"
          />
          </div>
          <div>
          <TextField
            id="contractor"
            label="Contractor"
          />
          </div>
          <div>
          <TextField
            id="subcontractor"
            label="SubContractor"
          />
          </div>
      </div>
                <div>
                <Button variant="contained" color="secondary" startIcon={<FuseSvgIcon>heroicons-outline:plus</FuseSvgIcon>}>
                        Save
                </Button>
                </div>
    </Box>
  );
}
