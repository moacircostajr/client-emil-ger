import React from 'react';
import './App.css';

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { indigo } from '@material-ui/core/colors'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './app/pages/Home';
import Login from './app/pages/Login';
import Principal from './app/pages/Principal';
import Empresas from './app/pages/Empresas';
import Clientes from './app/pages/Clientes';
import Dispositivos from './app/pages/Dispositivos';
import Usuarios from './app/pages/Usuarios';
import MenuPrincipal from './app/components/MenuPrincipal';
import FormularioEmpresa from './app/components/FormularioEmpresa';
import FormularioCliente from './app/components/FormularioCliente';
import FormularioDispositivo from './app/components/FormularioDispositivo';
import FormularioUsuario from './app/components/FormularioUsuario';


function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'light' : 'dark',
          primary: {
            // Purple and green play nicely together.
            // main: purple[500],
            main: indigo[900],
          }
          /*
          secondary: {
            // This is green.A700 as hex.
            main: '#ECECEC',
          },
          inherit: {
            // This is green.A700 as hex.
            main: '#FFF',
          },
          */
        },
      }),
    [prefersDarkMode],
  )


  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Switch>
            <Route path="/usuario/:uuid">
              <MenuPrincipal>
                <FormularioUsuario />
              </MenuPrincipal>
            </Route>
            <Route path="/usuario">
              <MenuPrincipal>
                <FormularioUsuario />
              </MenuPrincipal>
            </Route>
            <Route path="/usuarios">
              <MenuPrincipal>
                <Usuarios />
              </MenuPrincipal>
            </Route>
            <Route path="/dispositivo/:uuid">
              <MenuPrincipal>
                <FormularioDispositivo />
              </MenuPrincipal>
            </Route>
            <Route path="/dispositivo">
              <MenuPrincipal>
                <FormularioDispositivo />
              </MenuPrincipal>
            </Route>
            <Route path="/dispositivos">
              <MenuPrincipal>
                <Dispositivos />
              </MenuPrincipal>
            </Route>
            <Route path="/cliente/:uuid">
              <MenuPrincipal>
                <FormularioCliente />
              </MenuPrincipal>
            </Route>
            <Route path="/cliente">
              <MenuPrincipal>
                <FormularioCliente />
              </MenuPrincipal>
            </Route>
            <Route path="/clientes">
              <MenuPrincipal>
                <Clientes />
              </MenuPrincipal>
            </Route>
            <Route path="/empresas">
              <MenuPrincipal>
                <Empresas />
              </MenuPrincipal>
            </Route>
            <Route path="/empresa/:uuid">
              <MenuPrincipal>
                <FormularioEmpresa />
              </MenuPrincipal>
            </Route>
            <Route path="/empresa">
              <MenuPrincipal>
                <FormularioEmpresa />
              </MenuPrincipal>
            </Route>
            <Route path="/principal">
              <MenuPrincipal>
                <Principal />
              </MenuPrincipal>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
