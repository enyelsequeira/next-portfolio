import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {

  render() {

    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="max-w-screen-xl border-2 border-red-400 mx-auto bg-[#FAF9FF] dark:bg-[#1d2d50]  ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument