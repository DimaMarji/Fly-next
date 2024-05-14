import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap"
                        rel="stylesheet"/>
      <link rel='icon' href='/favicon.jpg' />
      <title>الجولات الاستشارية</title>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
