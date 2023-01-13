import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectAllUsers } from "../users/usersSlice";
import { selectPostbyId, updatePost } from "./postsSlice";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const navigate = useNavigate();
  const users = useSelector(selectAllUsers);
  const post = useSelector((state) => selectPostbyId(state, Number(postId)));

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (canSave) {
      try {
        setRequestStatus("pending");
        setTitle(title.trim());
        setContent(content.trim());
        await dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("Failed to save post", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="form-container">
      <h2>Edit Post</h2>
      <form action="#" method="post" className="form" onSubmit={handleSubmit}>
        {/* title */}
        <div className="form-item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* author */}
        <div className="form-item">
          <label htmlFor="author">Author</label>
          <select
            name="author"
            id="author"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          >
            <option value="" disabled>
              Select author
            </option>
            {userOptions}
          </select>
        </div>

        {/* content */}
        <div className="form-item">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Contetnt"
            required
          />
        </div>

        <button type="submit" className="form-button" disabled={!canSave}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditPostForm;
