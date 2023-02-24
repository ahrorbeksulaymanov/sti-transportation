import { useEffect } from 'react';
import AllBlogs from '../components/blogs';

function Blogs() {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div>
      <AllBlogs />
    </div>
  );
}

export default Blogs;