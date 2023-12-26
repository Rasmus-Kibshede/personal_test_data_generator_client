import axios from 'axios';
import { getPersonUrl } from '../../paths/paths';
import { Button } from '@mui/material';

function PersonGenerator() {
  const fetchPersonHandler = async () => {
    const { data } = await axios.get(getPersonUrl);
    console.log(data);

  };

  return (
    <Button color="inherit" onClick={fetchPersonHandler}>
      Generate Person
    </Button>
  );
}

export default PersonGenerator;
