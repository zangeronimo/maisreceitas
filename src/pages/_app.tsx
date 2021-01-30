import Hooks from '@/hooks';
import GlobalStyles from '@/styles/GlobalStyles';
import { Router } from 'next/router';
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Hooks><Component {...pageProps} /></Hooks>
    </>
  )
}

export default MyApp
