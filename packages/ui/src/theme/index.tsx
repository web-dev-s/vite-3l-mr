import _ from 'lodash'
import { FC, PropsWithChildren } from 'react'
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider as SThemeProvider
} from 'styled-components'
import Colors from './colors'

const GlobalCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    background: none;
    border: none;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${Colors.white};
    width: calc(100% - 20px);
  }
  input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: transparent !important;
  }
  input {
    outline: none;
  }
`

const defaultDarkTheme: DefaultTheme = {
  typography: {
    heading: {
      fontFamily: `'Barlow Condensed', sans-serif`
    },
    h1: {
      fontSize: 56,
      lineHeight: 64
    },
    h2: {
      fontSize: 48,
      lineHeight: 56
    },
    h3: {
      fontSize: 40,
      lineHeight: 48
    },
    h4: {
      fontSize: 32,
      lineHeight: 40
    },
    h5: {
      fontSize: 20,
      lineHeight: 28
    },
    paragraph: {
      fontFamily: `'Inter', sans-serif`
    },
    p1: {
      fontSize: 20,
      lineHeight: 28
    },
    p2: {
      fontSize: 16,
      lineHeight: 24
    },
    p3: {
      fontSize: 12,
      lineHeight: 20
    }
  },
  palette: {
    primary: {
      main: Colors.monorepo,
      dark: Colors.monorepoDark,
      light: Colors.monorepoLight
    },
    secondary: {
      main: Colors.dust,
      light: Colors.dustLight
    },
    error: {
      main: Colors.error
    },
    warning: {
      main: Colors.warning
    },
    success: {
      main: Colors.success
    },
    info: {
      main: Colors.sky
    },
    textPrimary: {
      main: Colors.white
    },
    textSecondary: {
      main: Colors.whiteEthereal
    },
    highlighted: {
      main: Colors.white
    },
    unfocused: {
      main: Colors.whiteEthereal
    },
    background: {
      main: Colors.dust
    },
    white: {
      main: Colors.white,
      light: Colors.whiteGhost,
      dark: Colors.whiteEthereal
    },
    black: {
      main: Colors.black,
      light: Colors.blackGhost,
      dark: Colors.blackWannabe
    }
  }
}

const defaultLightTheme: DefaultTheme = {
  ...defaultDarkTheme,
  palette: {
    ...defaultDarkTheme.palette,
    secondary: {
      main: Colors.white,
      light: Colors.whiteEthereal
    },
    textPrimary: {
      main: Colors.dust
    },
    textSecondary: {
      main: Colors.dustLight
    },
    highlighted: {
      main: Colors.dust
    },
    unfocused: {
      main: Colors.dustLight
    },
    background: {
      main: Colors.white
    },
    white: {
      main: Colors.black,
      light: Colors.blackGhost,
      dark: Colors.blackWannabe
    },
    black: {
      main: Colors.white,
      light: Colors.whiteGhost,
      dark: Colors.whiteEthereal
    }
  }
}

export const defaultTheme = {
  dark: defaultDarkTheme,
  light: defaultLightTheme
}

export type ThemeProviderProps = {
  mode?: 'light' | 'dark'
  theme?: DeepPartial<DefaultTheme>
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  mode = 'dark',
  theme,
  children
}) => {
  return (
    <SThemeProvider theme={_.merge(defaultTheme[mode], theme)}>
      <GlobalCSS />
      {children}
    </SThemeProvider>
  )
}

export { default as Colors } from './colors'
