import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?(page:JSX.Element): JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

//* Todas las pages pasan por aqui
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //si getLayout esta definido en la page
  //getLayout -> Metodo definido en la page de About || retorna el mismo pagina ()
  const getLayout = Component.getLayout || ((page) => page);

  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />);
}

export default MyApp
