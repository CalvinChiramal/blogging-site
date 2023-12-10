import Layout from "@components/Layout";
import Date from "@components/Date";
import { getPostIds, getPostData } from "@utils/posts";

export const generateStaticParams = () => {
  const postIds = getPostIds();

  return postIds.map(id => id);
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;

  const post = await getPostData(id);

  return { title: post.title };
};

const Post = async ({ params }) => {
  const { id } = params;

  const post = await getPostData(id);

  return (
    <Layout>
      <article>
        <h1 className="heading-xl">{post.title}</h1>
        <div className="light-text">
          <Date dateTime={post.date} format="MMMM DD, YYYY" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </article>
    </Layout>
  );
};

export default Post;
