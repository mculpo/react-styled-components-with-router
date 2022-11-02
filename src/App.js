import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Basic from "./components/Basic";
import Menu from "./components/Menu";
import Theme from "./components/Theme";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MediaQueries from "./components/MediaQueries";
import ChildComponentChildElement from "./components/ChildComponenteChildElement";
import PseudoClass from "./components/PseudoClass";
import SiblingComponent from "./components/SiblingComponent";
import Props from "./components/Props";
const newTheme = createTheme({
  typography: {
    useNextVariants: true,
    text: {
      uppercase: 'uppercase',
      none: 'none',
      capitalize: 'capitalize'
    }
  },
  palette: {
    primary: {
      main: '#20356C'
    },
    secondary: {
      main: '#D2D7E2'
    },
    tertiary: {
      light: '#707da0',
      main: '#4D5D89',
      dark: '#35415f'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 800, // Alterado de 600 para 800
      md: 960,
      lg: 1280,
      xl: 1920
    },
  },
});
function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={newTheme}>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route exact path="basic" element={<Basic />} />
          <Route exact path="theme" element={<Theme />} />
          <Route exact path="mediaqueries" element={<MediaQueries />} />
          <Route exact path="childcomponents" element={<ChildComponentChildElement />} />
          <Route exact path="pseudoclass" element={<PseudoClass />} />
          <Route exact path="sibling" element={<SiblingComponent />} />
          <Route exact path="props" element={<Props />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
