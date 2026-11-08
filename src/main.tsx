import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import theme from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
