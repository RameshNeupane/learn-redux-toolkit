import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(title.trim());
    setContent(content.trim());
    if (title && content && userId) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="form-container">
      <h2>Add New Post</h2>
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
            <option value="">Select author</option>
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
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
