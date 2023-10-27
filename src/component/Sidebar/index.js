import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/card';
import blogPost from '../../data/blog';
import { NavLink } from 'react-router-dom';

const Sidebar=(props)=> {
    const[posts,setPosts]=useState([]);

useEffect(()=>
{
const posts =blogPost.data;
setPosts(posts);
},posts);

    return (
        <div className="sidebarcontainer">
            <Card style={{marginBottom:'20px'}}>
                <div className="Cardheader">
                    <span>About Us</span>
                </div>
                <div className="profileimgcontainer">
                    <img
                    src={require("../../blogpostImage/snehal.jpg")}
                    alt="Profile"
                    width="100%"
                    height="100%"
                    />
                </div>
                <div className="cardbody">
                    <p className="PersonalBio"> My name is snehal satpute . I am software developer specialize in frontend </p>

                </div>
            </Card>
            <Card style={{marginBottom:'20px'}}>
                <div className="Cardheader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom:'20px'}}>
             <div className="RecentPostContainer">  
                   <div className="Cardheader">
                            <span>
                                Recent post
                            </span>
                    </div>
                    {
                        posts.map(post=>{
                            return( 
                            <NavLink to={`/post/${post.id}`}>
                                 <div className="recentposts">
                                    <div className="recentpost">
                                        <h3 className="recentposttitle">{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
            
                                    </div>
                                </div>
                            </NavLink>
                           
                            );
                        })
                    }

                   
                                       
            </div>
            </Card>
        </div>
     
    )
}
export default Sidebar;
