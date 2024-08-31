import { CssBaseline, ThemeProvider } from "@mui/material";
import * as React from 'react';
import theme from "./theme";

export default function withRoot<P extends JSX.IntrinsicAttributes>(
    Component: React.ComponentType<P>,
  ) {
    function WithRoot(props: P) {
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...props} />
        </ThemeProvider>
      )
    }
  
    return WithRoot;
  }
  