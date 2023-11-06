import { getServerSideSitemapLegacy } from "next-sitemap";
import db from "../../utils/db";
import blogItemsList from '../../data/blogs';

export const getServerSideProps = async (ctx) => {
  //connect to the mongoDB
  await db.connectDb();
  const blog = await blogItemsList.find().lean();

  // console.log(products);

  const fields = products.map((blog) => ({
    loc: `https://www.royalmulch.com/${blog.id}`,
    lastmod: product.updatedAt,
  }));
  // console.log(fields)
  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}