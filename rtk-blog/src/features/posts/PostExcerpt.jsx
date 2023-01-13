import React from "react";
import { Link } from "react-router-dom";

import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

const PostExcerpt = ({ post }) => {
  return (
    <div className="post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.body.substring(0, 300)}</p>
      <p className="post-credit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <div className="post-update-btns">
        <Link className="post-link-btn" to={`/post/${post.id}`}>
          View Post
        </Link>
      </div>
    </div>
  );
};

export default PostExcerpt;
