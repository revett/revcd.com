import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';

function getPost(slug) {
  // Read the file.
  const fileContent = fs.readFileSync(path.join('posts', `${slug}.md`)).toString();

  // Convert to frontmatter and content.
  const { data, content } = matter(fileContent);

  // Validate date with dayjs.
  const date = dayjs(data.date, 'YYYY-MM-DD');

  // If the date is not valid, throw an error.
  if (!date.isValid()) {
    throw new Error(`${slug}.md: date must be a string in format yyyy-mm-dd.`);
  }

  return {
    slug: slug,
    title: data.title,
    date: date.format('YYYY-MM-DD'),
    content: content,
  };
}

export { getPost };
