import React, { Component } from "react";

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from "@material-ui/core/styles";

import AppRoutes from './AppRoutes';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: "#5e92f3",
          main: "#1565c0",
          dark: "#003c8f",
          contrastText: "#fff"
        },
        secondary: {
          light: "#6abf69",
          main: "#388e3c",
          dark: "#00600f",
          contrastText: "#ffa726",
        }
      }
    });

    console.log(process.env);

    return (
      <React.Fragment>
        <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <AppRoutes/>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;