import { useSelector } from "react-redux";

import PostExcerpt from "./PostExcerpt";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading ...</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPost = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPost.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return (
    <div className="post-container">
      <h2>Posts</h2>
      <div>{content}</div>
    </div>
  );
};

export default PostsList;
