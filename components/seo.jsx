import Head from "next/head";

const SEO = ({ pageTitle,font }) => (
  <>
    <Head>
      <title>
      {pageTitle && `Royal Mulch | ${pageTitle}  - Top Mulch Supplier`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Premium Mulch Supplies near Lancaster, OH & Surrounding Regions. We have triple ground brown, black and natural mulch in bulk available for pickup or delivery. " />
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