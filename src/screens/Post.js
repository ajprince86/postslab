import { useParams } from "react-router-dom";

const Post = (props) => {
  console.log(props);
  const { post_id } = useParams();
  //extracting id from url with UseParams
  const postNumber = parseInt(post_id) - 1;
  //turning string to integer, and subtracting 1
  //to count in CS
  const post = props[postNumber];
  //using the CS id extracted above, putting it into index
  //to select the correct object
  return (
    <div className="post">
      <div className="hero">
        <img src={post.image} alt="post banner" />
      </div>
      <div className="content">
        <h3></h3>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
