import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/blog';

const Blogpost=(props)=> {
    console.log(props);

    const[post,setPost]=useState({});
    const[postid,setPostid]=useState('');

useEffect(()=>
{
const postid=props.match.params.postid;
const post =blogPost.data.find(post=>post.id==postid);
setPost(post);
setPostid(postid);
},[post,props.match.params.postid]);
    return (
        
           <div className="blogpostcontainer">
               <Card>
                   <div className="blogHeader">
                        
                    <span className="blogCategory">{post.blogCategory}</span>
                   <h1 className="postTitle">{post.blogTitle}</h1>
                    <span clasName="postedBy">Posted on {post.postedOn} by {post.postedBy}</span>
                   </div>
                   <div className="postContainerImg">
                    <img
                    src={require(`../../blogpostImage/${post.blogImage}`)}
                    alt="Post img"
                   height="100%"
                   width="100%"
                    />
                    
                   </div>
                 <div className="Postcontent">
                 <h3>{post.blogTitle}</h3>
                 <p>{post.blogText}</p>
                 </div>

                   </Card>

           </div>
       

    )
}
export default Blogpost;
