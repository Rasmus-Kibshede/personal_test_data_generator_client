import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import ToogleLoginButton from './ToogleLoginButton';
import { useUserStore } from '../../store/user';

function MainMenuBar() {
  const user = useUserStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to={'/'}>Home</Link>
          </Typography>

          {user.user && (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to={'/profile'}>Profile</Link>
            </Typography>
          )}

          <ToogleLoginButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainMenuBar;
