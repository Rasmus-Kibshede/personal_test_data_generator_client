import { Button } from '@mui/material';
import { useUserStore } from '../../store/user';
import { useSnackbarDisplay } from '../../store/snackbarDisplay';
import { useNavigate } from 'react-router-dom';

function ToogleLoginButton() {
  const user = useUserStore();
  const snackbarStore = useSnackbarDisplay();
  const navigate = useNavigate();

  const toogleLogin = () => {
    if (user.user !== null) {
      user.resetUser();
      snackbarStore.setSnackbar(true, 'Logged out', 'success');
    } else {
      user.setUser({
        name: 'Hansi Hinterseer',
        email: 'Hansi.Hinterseer@gmail.com',
        password: '12345678',
      });
      snackbarStore.setSnackbar(true, 'Logged in', 'success');
      navigate('/profile');
    }

    console.log(user.user);
  };

  return <Button color="inherit" onClick={toogleLogin}>{user.user ? 'Logout': 'Login'}</Button>;
}

export default ToogleLoginButton;
