import { CssBaseline, createTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { themeState as themeAtom } from '../atoms';
import { ThemeProvider } from '@emotion/react';
import useMediaQuery from '../utils/useMediaQuery';

function ThemeWrapper({ children }) {
  const themeState = useRecoilValue(themeAtom);
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => {
    let mode = themeState;
    if (themeState === 'system' && prefersDark) {
      mode = 'dark';
    } else if (themeState === 'system') {
      mode = 'light';
    }

    const newTheme = createTheme({
      palette: {
        mode,
      },
    });

    return newTheme;
  }, [themeState, prefersDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeWrapper;
