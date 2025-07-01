import "@/styles/globals.css";
import "@/styles/icons.css";
import type { AppProps } from "next/app";
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";

const quicksand = Quicksand({
    subsets: ['latin'],
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
    variable: '--font-lato'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <style jsx global>{`
                html {
                    font-family: ${quicksand.style.fontFamily}, sans-serif;
                    --font-lato: ${lato.style.fontFamily}, sans-serif;
                }
          `}</style>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>

  )
}
