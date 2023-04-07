import Layout from '../../components/layout';
import { getPostIds, getPostData } from '../../utils/posts';

export const getStaticPaths = async () =>
  ({ paths: getPostIds(), fallback: false });

export const getStaticProps = async ({ params }) => ({ props: { post: getPostData(params.id) } })

const Post = ({ post }) => (
  <Layout>
    {post.title}
    <br />
    {post.id}
    <br />
    {post.date}
  </Layout>
);

export default Post;
