import { Outlet } from 'react-router-dom';
import MainMenuBar from './MainMenuBar';
import CustomizedSnackbars from './CustomizedSnackbars';
import { ThemeProvider, createTheme } from '@mui/material';

function Layout() {
  return (
    <div id="wrapper" className="bg-[#D6FBE4] h-screen">
      <ThemeProvider theme={THEME}>
        <MainMenuBar />
        <CustomizedSnackbars />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default Layout;

const THEME = createTheme({
  typography: {
    body1: {
      fontFamily: `"Josefin sans", sans-serif`,
      fontSize: '20px',
      fontWeight: '500',
    },
    body2: {
      fontFamily: `"Josefin sans", sans-serif`,
      fontSize: '32px',
      fontWeight: '400',
      color: '#FFFFFF',
      marginBottom: '50px',
    },
    h1: {
      fontFamily: `"Josefin sans", sans-serif`,
      fontSize: '20px',
      fontWeight: '500',
      color: '#FFFFFF',
      marginBottom: '50px',
    },
    h4: {
      fontFamily: `"Advent Pro", sans-serif`,
      fontSize: '60px',
      marginBottom: '25px',
      marginTop: '25px',
    },
    h6: {
      fontFamily: `"Josefin sans", sans-serif`,
      fontSize: '20px',
      fontWeight: '500',
    },
  },
});
