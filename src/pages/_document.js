import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="ko-KR">
    <Head>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="true"
        href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard-dynamic-subset.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
