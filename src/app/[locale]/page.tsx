import { mockPosts } from "../../../constants/posts";
import CardPost from "@/components/posts/CardPost";

export default function Home() {
  const posts = mockPosts;

  return (
    <div className="m-16">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
          <CardPost posts={posts} />
      </div>
    </div>
  );
}
