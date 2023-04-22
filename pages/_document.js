import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <title>Maulana Muhammad Rizky &mdash; </title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="Maulana Muhammad Rizky" />
      <meta name="keywords" content="maulana, web developer, software, programmer, engineer" />
      <meta name="author" content="Maulana Muhammad Rizky" />

      <meta property="og:title" content=""/>
      <meta property="og:image" content=""/>
      <meta property="og:url" content=""/>
      <meta property="og:site_name" content=""/>
      <meta property="og:description" content=""/>
      <meta name="twitter:title" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
      <meta name="twitter:card" content="" />

      <Head>
      <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet"/>
      <link rel="stylesheet" href="/css/icomoon.css"/>
      <script src="/js/modernizr-2.6.2.min.js"async ></script>
      <script src="/js/respond.min.js" async></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="/js/jquery.min.js"></script>
        <script async src="/js/jquery.easing.1.3.js"></script>
        <script async src="/js/bootstrap.min.js"></script>
        <script async src="/js/jquery.waypoints.min.js"></script>
        <script async src="/js/jquery.stellar.min.js"></script>
        <script async src="/js/jquery.easypiechart.min.js"></script>
        {/* <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"></script> */}
        {/* <script src="/js/google_map.js"></script> */}
        <script async src="/js/main.js"></script>
      </body>
    </Html>
  )
}
