import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import { selectPostbyId, deletePost } from "./postsSlice";

const SinglePostPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = useSelector((state) => selectPostbyId(state, Number(postId)));

  const handlePostDelete = async () => {
    try {
      await dispatch(deletePost({ id: post.id })).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    }
  };

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="post single-post">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.body}</p>
      <p className="post-credit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <div className="post-update-btns">
        <Link className="post-link-btn" to={`/post/edit/${post.id}`}>
          Edit Post
        </Link>
        <button className="post-btn" onClick={handlePostDelete}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default SinglePostPage;
