 /** @type {import('next-sitemap').IConfig} */
 module.exports = {
    siteUrl: "https://www.royalmulch.com",
    generateRobotsTxt: true, // (optional)
    robotsTxtOptions: {
      policies: [
        // advice google to not index /admin/anything
        { userAgent: "*", disallow: "/admin" },
        // everything else is okay
        { userAgent: "*", allow: "/" },
      ],
      // this is for dynamic sitemap url's (in my case products);
    },
    // what you exclude that will not show up inside sitemap.xml
    exclude: ["/admin/*"],
    // ...other options
  };
 