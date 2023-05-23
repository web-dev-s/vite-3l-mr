import 'styled-components'

type Palette = {
  main: string
  dark?: string
  light?: string
}
type Font = {
  fontSize: number
  lineHeight: number
}
declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      heading: {
        fontFamily: string
      }
      h1: Font
      h2: Font
      h3: Font
      h4: Font
      h5: Font
      paragraph: {
        fontFamily: string
      }
      p1: Font
      p2: Font
      p3: Font
    }
    palette: {
      primary: Palette
      secondary: Palette
      error: Palette
      warning: Palette
      success: Palette
      info: Palette
      textPrimary: Palette
      textSecondary: Palette
      highlighted: Palette
      unfocused: Palette
      background: Palette
      white: Palette
      black: Palette
    }
  }
}
