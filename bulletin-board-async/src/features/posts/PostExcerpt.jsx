import React from "react";

import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => {
  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.body.substring(0, 500)}</p>
      <p className="post-credit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </div>
  );
};

export default PostExcerpt;
