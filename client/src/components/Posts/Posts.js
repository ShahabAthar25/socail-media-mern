import Post from "./Post/Post";
import { useSelector } from "react-redux";

import useStyles from "./styles.js";

function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <>
      <h1>POSTS</h1>
      <Post />
      <Post />
      <Post />
    </>
  );
}

export default Posts;
