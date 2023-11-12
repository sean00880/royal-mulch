import blogItemsList from '../../data/blogs';

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

export default function Site() {}