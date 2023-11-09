import Head from "next/head";

const SEO = ({ pageTitle,font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle} || Royal Mulch - Mulch near Columbus, OH}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Premium Mulch Supplies in Lancaster, OH & Surrounding Regions" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="qr00bVyvFKbSvY6bf_AGXAQc_eZzodLmw5REKPAgphk" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;