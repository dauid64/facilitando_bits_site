import { mockPosts } from "../../../constants/posts";
import CardPost from "@/components/posts/CardPost";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();

  const posts = mockPosts;
  const postsFetch = await fetch(
    `${process.env.SERVER_URL}article?language=${locale}`
  );
  if (postsFetch.ok) {
    const posts = await postsFetch.json();
    console.log(posts);
  } else {
    console.error(postsFetch);
  }

  return (
    <div className="m-16">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
        {posts.map((post) => {
          return <CardPost post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}
