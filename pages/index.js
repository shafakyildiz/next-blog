import fs from "fs";
import path from "path";
import Head from "next/head";

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
  console.log(files);
  return {
    props: {
      posts: "The Posts",
    },
  };
}
