import { useState, useEffect } from "react";

// Imports api call funtion
import { getBlogs } from "./api";

export default function ApiBlog() {
  // Declares useStates
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //   Calls and sets useState data
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  console.log(blogs);

  //   const blogElements = blogs.map((blog) => {
  //     <div>
  //       <h1>{blog.title}</h1>
  //       <p>{blog.body}</p>
  //     </div>;
  //   });

  //   Displays loading
  if (loading) {
    return <h1>Loading...</h1>;
  }

  //   Early return if theres an error
  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      {/* <div>{blogElements}</div> */}
    </>
  );
}
