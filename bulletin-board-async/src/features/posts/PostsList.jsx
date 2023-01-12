import { useSelector, useDispatch } from "react-redux";

import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

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
