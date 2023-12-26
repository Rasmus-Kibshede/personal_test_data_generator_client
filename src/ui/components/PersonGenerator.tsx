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
      <Button type="button" color="inherit" onClick={fetchPersonHandler}>
        Generate Person
      </Button>

      {person && (
        <Box
          id="personBox"
          paddingLeft={10}
          paddingBottom={5}
          margin={10}
          width={'50%'}
          border={'solid 1px black'}
        >
          <Typography variant="h4">Person</Typography>
          <Typography variant="h6">Fullname: {person.fullname}</Typography>
          <Typography variant="h6">Gender: {person.gender}</Typography>
          <Typography variant="h6">
            Date of birth: {person.dateOfBirth}
          </Typography>
          <Typography variant="h6">CPR: {person.cpr}</Typography>
          <Typography variant="h6">
            Phonenumber: {person.phoneNumber}
          </Typography>

          <Typography variant="h4">Address</Typography>
          <Typography variant="h6">City: {person.address.city}</Typography>
          <Typography variant="h6">
            Postal code: {person.address.postalCode}
          </Typography>
          <Typography variant="h6">Street: {person.address.street}</Typography>
          <Typography variant="h6">
            House number: {person.address.houseNumber}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default PersonGenerator;
