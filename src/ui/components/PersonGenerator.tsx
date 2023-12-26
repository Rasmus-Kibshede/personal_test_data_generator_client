import axios from 'axios';
import { getPersonUrl } from '../../paths/paths';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { Person } from '../../types/types';

function PersonGenerator() {
  const [person, setPerson] = useState<Person>();

  const fetchPersonHandler = async () => {
    try {
      const { data } = await axios.get(getPersonUrl);
      setPerson(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button color="inherit" onClick={fetchPersonHandler}>
        Generate Person
      </Button>

      <h1 className='text-red-600 bg-red-500'>KAJSFHKJSDLFHJKLSFDHLKHFSD</h1>
      <Typography className='text-red-600 bg-red-500' variant="h4" gutterBottom>
            Person
          </Typography>

      {person && (
        <Box className="border border-solid bg-red-600">
          <Typography variant="h4" gutterBottom>
            Person
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.fullname}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.gender}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.dateOfBirth}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.cpr}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.phoneNumber}
          </Typography>

          <Typography variant="h4" gutterBottom>
            Address
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.address.city}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.address.postalCode}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.address.street}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {person.address.houseNumber}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default PersonGenerator;
