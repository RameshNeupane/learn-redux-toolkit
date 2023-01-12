import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">
        Bulletin Board
        <br />
        With <br />
        Redux Toolkit Async
      </h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
