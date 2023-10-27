import React from 'react';
import './style.css';
import Blogpost from '../../component/BlogPost';
import Sidebar from '../../component/Sidebar';

 const Post=(props)=> {
   console.log(props);
    return (
        <div>
          <section className="container">
              <Blogpost {...props}/>
            <Sidebar/>
          </section>
        </div>
    )
}

export default Post;