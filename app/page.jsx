import Link from "next/link";

import Date from "@components/Date";
import Layout from "@components/Layout";
import { getSortedPosts } from "@utils/posts";

const Home = () => {
  const posts = getSortedPosts();

  return (
    <Layout home>
      <section className="heading-md">
        <p>
          {
            "Hey, I'm a full stack developer primarily working with React and Rails. This is my first website using Next.JS."
          }
        </p>
      </section>
      <section className="heading-md pt-px">
        <h2 className="heading-lg">Blog</h2>
        <ul className="list">
          {posts.map(({ id, date, title }) => (
            <li className="list-item" key={id}>
              <Link
                className="text-blue-600 dark:text-purple-500"
                href={`/posts/${id}`}
              >
                {title}
              </Link>
              <br />
              <small>
                <Date dateTime={date} format="MMMM DD, YYYY" />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
