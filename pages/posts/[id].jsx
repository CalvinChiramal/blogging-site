import Head from "next/head";

import Date from "../../components/Date";
import Layout from "../../components/Layout";
import { getPostIds, getPostData } from "../../utils/posts";

export const getStaticPaths = async () => ({
  paths: getPostIds(),
  fallback: false,
});

export const getStaticProps = async ({ params }) => ({
  props: { post: await getPostData(params.id) },
});

const Post = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article>
      <h1 className="heading-xl">{post.title}</h1>
      <div className="light-text">
        <Date dateTime={post.date} format="MMMM DD, YYYY" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  </Layout>
);

export default Post;
