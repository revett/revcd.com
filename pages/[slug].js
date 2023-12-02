import React from 'react';
import dayjs from 'dayjs';
import fs from 'fs';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Heading from '../components/heading';
import Link from '../components/link';
import Paragraph from '../components/paragraph';
import Section from '../components/section';
import { getPost } from '../utils/posts';
import Footer from '../components/footer';

const renderers = {
  a: ({ href, children }) => {
    return <Link href={href} text={children}></Link>;
  },
  // TODO: blockquote: () => {},
  h1: ({ children }) => {
    return (
      <Section>
        <Heading level={1}>{children}</Heading>
      </Section>
    );
  },
  h2: ({ children }) => {
    return (
      <Section>
        <Heading level={2}>{children}</Heading>
      </Section>
    );
  },
  h3: ({ children }) => {
    return (
      <Section>
        <Heading level={3}>{children}</Heading>
      </Section>
    );
  },
  // TODO: img: () => {},
  // TODO: li: () => {},
  // TODO: ol: () => {},
  p: ({ children }) => {
    return <Paragraph>{children}</Paragraph>;
  },
  // TODO: ul: () => {},
};

// TODO: Set metadata.

const Post = ({ slug, title, date, content }) => {
  // Validate date with dayjs.
  const parsedDate = dayjs(date, 'YYYY-MM-DD');

  // If the date is not valid, throw an error.
  if (!parsedDate.isValid()) {
    throw new Error(`${slug}.md: date must be a string in format yyyy-mm-dd.`);
  }

  return (
    <>
      {/* TODO: Add breadcrumb. */}
      {/* TODO: Add cover. */}
      {/* TODO: Add ToC. */}
      <Heading level={1} isForSection={false}>
        {title}
      </Heading>
      <Heading level={2} isForSection={false}>
        By <NextLink href="https://twitter.com/revcd">Charlie Revett</NextLink> on{' '}
        {parsedDate.format('MMMM D, YYYY')}.
      </Heading>
      <ReactMarkdown components={renderers}>{content}</ReactMarkdown>
      {/* TODO: Add recent posts. */}
      <Footer includeSocialLinks />
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
