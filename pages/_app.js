import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'
import dynamic from 'next/dynamic'
import Header from '../components/layout/Header'

const Footer = dynamic(() => import('../components/layout/Footer'), { ssr: false })

function ConciseStudio({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Header/>
      <Component {...pageProps} variant={theme.styles}/>
      <Footer/>
    </ThemeProvider>
  )
}

export default ConciseStudio