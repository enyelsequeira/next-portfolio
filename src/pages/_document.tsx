import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {

  render() {
    const meta = {
      title: 'Enyel Sequeira',
      description: 'This is my personal portfolio, where you can find information about me and reach out to me if you need help or questions regarding web-development',
      image: '/images/icon.jpg'
    }
    return (
      <Html lang="en">
        <Head>
        <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          <link rel="icon" href={meta.image} sizes="32x32"/>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="max-w-screen-xl  mx-auto bg-light dark:bg-dark  ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument