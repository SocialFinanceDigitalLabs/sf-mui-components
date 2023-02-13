import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { theme as SFTheme } from '../src/theme/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const CINTheme = { ...SFTheme }

const theme = createTheme(CINTheme)

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withMuiTheme]
