 /** @type {import('next-sitemap').IConfig} */
 module.exports = {
    siteUrl: "https://www.royalmulch.rs",
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
      policies: [
        // advice google to not index /admin/anything
        { userAgent: "*", disallow: "/admin" },
        // everything else is okay
        { userAgent: "*", allow: "/" },
      ],
      // this is for dynamic sitemap url's (in my case products)
      // that we will implement later
      additionalSitemaps: [`${process.env.SITE_URL}/server-sitemap.xml`],
    },
    // what you exclude that will not show up inside sitemap.xml
    exclude: ["/admin/*"],
    // ...other options
  };
 