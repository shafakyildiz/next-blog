import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Safak Blog</title>
      </Head>
      <h2>Hello</h2>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    console.log(markdownWithMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts,
    },
  };
}
