import "../styles/index.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../store"
import Head from "next/head"
import icon from "../public/favicon.png"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <Head>
              <link rel="icon" type="image/png"  href={icon.src} />
          </Head>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
