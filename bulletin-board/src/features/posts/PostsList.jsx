import { useSelector } from "react-redux";

import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="post-container">
      <h2>Posts</h2>
      <div>
        {orderedPost.map((post) => (
          <div key={post.id} className="post">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 500)}</p>
            <p className="post-credit">
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
