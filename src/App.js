import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Feed from './Components/Feed';
import Axios from 'axios';
import {AiOutlineReload} from 'react-icons/ai';

function App() {

  const [Posts, setPosts] = useState([]);
  const [Comments, setComments] = useState([]);
  const [Data, setData] = useState();
  useEffect(() => {
    
  
    Axios.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=0b23c701f6794ba985cf6b483cb07a9a")
      .then((res) => {
        setPosts(res.data.articles);
        console.log(res.data.articles)
      }).catch(err => {
        console.log(err)
      })
      Axios.get("https://cors-anywhere.herokuapp.com/http://cookbookrecipes.in/test.php")
        .then((res) => {
          const comment = res.data
            setComments(comment);
            console.log("comments set")
            console.log("response", res.data)
            console.log("comments",comment)
            console.log("data", Comments)
        }).catch(err => {
            console.log(err)
        })      
  }, [])
  
  return (
    <div className="App">
      <Header></Header>
      {Data.slice(0,30).map((post, index) => {
        
        return(
          <Feed key = {index} post = {post} ></Feed>
        )
      })}
      <AiOutlineReload style = {{width: "20px", height: "20px", margin: "15px 50% 50px 50%"}} onClick = {() => {setData(Posts)}}></AiOutlineReload>
    </div>
  );
}

export default App;
