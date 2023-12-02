import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import PropTypes from 'prop-types';
import { getPost } from '../utils/posts';
import Heading from '../components/heading';
import dayjs from 'dayjs';
import Link from 'next/link';

const renderers = {
  h1: (props) => {
    console.log(props);
    return <Heading level={1} {...props} />;
  },
};

const Post = ({ slug, title, date, content }) => {
  // Validate date with dayjs.
  const parsedDate = dayjs(date, 'YYYY-MM-DD');

  // If the date is not valid, throw an error.
  if (!parsedDate.isValid()) {
    throw new Error(`${slug}.md: date must be a string in format yyyy-mm-dd.`);
  }

  return (
    <>
      <Heading level={1} isForSection={false}>
        {title}
      </Heading>
      <Heading level={2} isForSection={false}>
        By <Link href="https://twitter.com/revcd">Charlie Revett</Link> on{' '}
        {parsedDate.format('MMMM D, YYYY')}.
      </Heading>
      <ReactMarkdown components={renderers}>{content}</ReactMarkdown>;
    </>
  );
};

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const getStaticPaths = async () => {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return { paths, fallback: false };
};

const getStaticProps = async ({ params }) => {
  const post = getPost(params.slug);

  return {
    props: post,
  };
};

export default Post;
export { getStaticPaths, getStaticProps };
