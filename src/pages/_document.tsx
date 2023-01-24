import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {' '}
        <meta
          name="description"
          content="Make Plant Care Easy"
        />
        <meta
          http-equiv="Content-Type"
          content="text/html;charset=UTF-8"
        />
        <meta
          name="keywords"
          content="plant planner care reminder"
        />
        <link
          rel="shortcut icon"
          href="favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
