// import Link from "next/link";

import FeaturedPost from "./_components/posts/featuredPost";
import LatestPosts from "./_components/posts/latestPosts";
import AllPosts from "./_components/posts/posts";

// import { CreatePost } from "@/app/_components/create-post";
// import { getServerAuthSession } from "@/server/auth";
// import { api } from "@/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <div className="mx-auto max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1080px] 2xl:max-w-[1280px]">
      {/* Featured Post */}
      <FeaturedPost />
      {/* Latest Posts */}
      <LatestPosts />
      {/* Categories */}
      {/* Posts */}
      <AllPosts />
      {/* Sidebar - More Posts */}
    </div>
  );
}

// async function CrudShowcase() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;
//
//   const latestPost = await api.post.getLatest.query();
//
//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}
//
//       <CreatePost />
//     </div>
//   );
// }
