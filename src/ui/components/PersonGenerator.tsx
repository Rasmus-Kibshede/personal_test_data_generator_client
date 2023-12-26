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

      {person && (
        <Box
          paddingLeft={10}
          paddingBottom={5}
          margin={10}
          width={'50%'}
          border={'solid 1px black'}
        >
          <Typography variant="h4" gutterBottom>
            Person
          </Typography>
          <Typography variant="h6" gutterBottom>
            Fullname: {person.fullname}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Gender: {person.gender}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Date of birth: {person.dateOfBirth}
          </Typography>
          <Typography variant="h6" gutterBottom>
            CPR: {person.cpr}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Phonenumber: {person.phoneNumber}
          </Typography>

          <Typography variant="h4" gutterBottom>
            Address
          </Typography>
          <Typography variant="h6" gutterBottom>
            City: {person.address.city}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Postal code: {person.address.postalCode}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Street: {person.address.street}
          </Typography>
          <Typography variant="h6" gutterBottom>
            House number: {person.address.houseNumber}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default PersonGenerator;
