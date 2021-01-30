import Hooks from '@/hooks';
import GlobalStyles from '@/styles/GlobalStyles';
import { Router } from 'next/router';
import * as gtag from '../lib/gtag'
import * as ads from '../lib/ads';
import { useEffect } from 'react';

useEffect(() => {
  ads.load();
}, []);

const routeChanged = (url: any) => {
  gtag.pageview(url);
  ads.load();
}

Router.events.on('routeChangeComplete', (url) => routeChanged(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Hooks><Component {...pageProps} /></Hooks>
    </>
  )
}

export default MyApp
