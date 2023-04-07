import Head from 'next/head';

import Date from '../../components/Date';
import Layout from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import { getPostIds, getPostData } from '../../utils/posts';

export const getStaticPaths = async () =>
  ({ paths: getPostIds(), fallback: false });

export const getStaticProps = async ({ params }) =>
  ({ props: { post: await getPostData(params.id) } });

const Post = ({ post }) => (
  <Layout>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article>
      <h1 className="utilStyles.headingXl">{post.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateTime={post.date} format="MMMM DD, YYYY" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </article>
  </Layout>
);

export default Post;
