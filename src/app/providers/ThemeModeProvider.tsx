import {
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import type { PaletteMode } from '@mui/material';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { keyframes } from '@mui/system';

import { createAppTheme } from '@app/styles/theme';
import {
  themeTransitionDurationMs,
  themeTransitionEasing,
} from '@app/styles/transitions';
import { getThemePaletteTokens } from '@app/styles/themeTokens';

import { ThemeModeContext } from './ThemeModeContext';

const THEME_MODE_STORAGE_KEY = 'app-theme-mode';

const themeTransitionOverlayKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
    backdrop-filter: blur(0px);
  }
  18% {
    opacity: 0.14;
    transform: scale(1.006);
    backdrop-filter: blur(8px);
  }
  100% {
    opacity: 0;
    transform: scale(1.012);
    backdrop-filter: blur(0px);
  }
`;

const getInitialThemeMode = (): PaletteMode => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedMode = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
  if (savedMode === 'light' || savedMode === 'dark') {
    return savedMode;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const ThemeModeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>(getInitialThemeMode);
  const [transitionToken, setTransitionToken] = useState<number | null>(null);
  const themeTokens = getThemePaletteTokens(mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    document.body.setAttribute('data-theme', mode);
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    document.documentElement.style.removeProperty('background-color');
    document.documentElement.style.removeProperty('color');
    document.body.style.removeProperty('background-color');
    document.body.style.removeProperty('color');
    document.documentElement.classList.remove('theme-preload');

    const rafId = window.requestAnimationFrame(() => {
      document.documentElement.classList.add('theme-ready');
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (transitionToken === null) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setTransitionToken(null);
    }, themeTransitionDurationMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [transitionToken]);

  const toggleTheme = () => {
    setTransitionToken(Date.now());
    setMode((currentMode) => (currentMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createAppTheme(mode);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {transitionToken !== null ? (
          <Box
            key={transitionToken}
            sx={{
              pointerEvents: 'none',
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: themeTokens.themeTransitionOverlay,
              animation: `${themeTransitionOverlayKeyframes} ${themeTransitionDurationMs}ms ${themeTransitionEasing} forwards`,
            }}
          />
        ) : null}
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
