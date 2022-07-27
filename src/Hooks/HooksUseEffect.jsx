import react, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function HooksUseEffect() {
  const [posts, setposts] = useState([]);
  // const [id, setId] = useState(1);
  // const [post, setPost] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(res.data);
        setposts(res.data);
      // setPost(res.data);
    };
    fetchdata();

    return () => {
      //   setposts([]);
      console.log("Unmounting...");
    };
  }, []);

  return (
    <>
      <h2>UseEffect</h2>
      {/* <input
        type="text"
        placeholder="Enter id"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }} */}
      {/* /> */}
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
              </tr>
            );
          })}
          {/* <tr>
            <td>{post?.id}</td>
            <td>{post?.title}</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
}

export default HooksUseEffect;
