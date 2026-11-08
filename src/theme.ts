import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// Paleta inspirada no Design System gov.br (azul institucional + amarelo de apoio)
export const govColors = {
  blue: '#1351B4',
  blueDark: '#0C326F',
  blueDarker: '#071D41',
  blueLight: '#2670E8',
  blueWash: '#D4E5FF',
  yellow: '#FFCD07',
  green: '#168821',
  surface: '#F8F9FC',
  ink: '#1B1B1B',
  inkSoft: '#555555',
} as const

let theme = createTheme({
  palette: {
    primary: {
      main: govColors.blue,
      dark: govColors.blueDark,
      light: govColors.blueLight,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: govColors.yellow,
      contrastText: govColors.blueDarker,
    },
    success: { main: govColors.green },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: govColors.ink,
      secondary: govColors.inkSoft,
    },
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, letterSpacing: '-0.01em' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          paddingInline: 24,
          paddingBlock: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
