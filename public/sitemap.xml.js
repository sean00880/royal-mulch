import {blogItemsList} from '../data/blogs';

const URL = "https://royalmulch.com";
 
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>${URL}</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
           <url>
               <loc>${`${URL}/blog-details/${id}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}
 
export async function getServerSideProps({ res }) {
  const posts = blogItemsList();
 
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts);
 
  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();
 
  return {
    props: {},
  };
}
 
export default function SiteMap() {}