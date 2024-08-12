// Api call funtion
export async function getBlogs() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw {
      message: "Failed to fetch blogs",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  console.log(data);
  return data.blogs;
}
