import Head from "next/head";
import Link from 'next/link';

import Date from '../components/Date';
import Layout from "../components/Layout";
import { SITE_TITLE } from "../constants";
import utilStyles from "../styles/utils.module.css";
import { getSortedPosts } from "../utils/posts";

export const getStaticProps = async () => ({
  props: { posts: getSortedPosts() },
});

const Home = ({ posts }) => {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {
            "Hey, I'm a full stack developer primarily working with React and Rails. This is my first website using Next.JS."
          }
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
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
