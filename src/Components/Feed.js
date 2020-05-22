import React, { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { FaRegBookmark } from 'react-icons/fa';

function Feed({ post }) {

    const [title, setTitle] = useState('');

    const comment = post.title.slice(0,50);
    useEffect(() => {
        setTitle(comment);
    },[])

    return (
        <div>
            <div style={{ width: "400px", margin: "30px auto 40px auto", fontFamily: "cursive", }}>
                <div style={{ display: "flex", marginTop: "15px" }}>
                    <img src={post.urlToImage} alt="image" style={{ height: "30px", width: "30px", borderRadius: "50%" }}></img>
                    <h5 style={{ margin: "5px 10px", flex: "10" }}>{post.source.name}</h5>
                    <button style={{ backgroundColor: "white", border: "none", fontSize: "xx-large" }}>...</button>
                </div>
                <img src={post.urlToImage} alt="image" style={{ height: "400px", width: "400px", marginTop: "10px" }}></img>
                <div style={{ marginTop: "10px" }}>
                    <FaRegHeart style={{ height: "20px", width: "20px", marginLeft: "5px" }}></FaRegHeart>
                    <FaRegComment style={{ height: "20px", width: "20px", marginLeft: "15px" }}></FaRegComment>
                    <FiSend style={{ height: "20px", width: "20px", marginLeft: "15px" }}></FiSend>
                    <FaRegBookmark style={{ height: "20px", width: "20px", marginLeft: "15px", float: "right" }} ></FaRegBookmark>
                </div>
                <p style={{ marginLeft: "5px" }}>125 Likes</p>
                <div style = {{display: "flex"}}>
                    <p style={{ margin: "5px 0px 25px 5px" }}>{title}</p>
                    <button style = {{backgroundColor:"white", border:"none", color: "blue", fontFamily: "cursive"}} onClick = {() => {setTitle(post.title)}}>more</button>
                    </div>

                <input type="text" placeholder="Type your comment..." style={{ border: "none", backgroundColor: "white", height: "45px", width: "100%" }}></input>
            </div>
        </div>
    )
}

export default Feed;