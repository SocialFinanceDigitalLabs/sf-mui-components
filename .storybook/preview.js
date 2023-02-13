import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../src/theme/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const withMuiTheme = (Story) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withMuiTheme]
