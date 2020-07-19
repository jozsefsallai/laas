import '../styles/base.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LaTeX as a Service</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
        <meta name="title" content="LaTeX as a Service" />
        <meta name="description" content="Turn your LaTeX into SVGs or PNGs using this free API." />

        <meta property="og:title" content="LaTeX as a Service" />
        <meta property="og:description" content="Turn your LaTeX into SVGs or PNGs using this free API." />
        <meta property="og:site_name" content="LaTeX as a Service" />
        <meta property="og:url" content="https://laas.vercel.app" />
        <meta content="website" property="og:type" />
      </Head>

      <main>
        <section className="page">
          <Component {...pageProps} />
          <footer>
            <hr />
            LaaS is an open-source project by <a href="https://github.com/jozsefsallai"
            target="_blank">@jozsefsallai</a>. You can find its source code on <a
            href="https://github.com/jozsefsallai/laas" target="_blank">GitHub</a>
          </footer>
        </section>
      </main>
    </>
  );
}
