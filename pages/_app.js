import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'

function ConciseStudio({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} variant={theme.styles}/>
    </ThemeProvider>
  )
}

export default ConciseStudio