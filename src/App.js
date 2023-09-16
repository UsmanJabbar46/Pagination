import axios from 'axios'
import './App.css';
import Post from './component/Post';
import Pagination from './component/Pagination';
import React,{useState,useEffect} from 'react'

function App() {
  const[posts,setposts] = useState([])
  const[loading,setloading] = useState(false)
  const[currentPage,setcurrentPage] = useState(1)
  const[postPerPage] = useState(10)

useEffect(()=>{
  const fetchdata = async () =>{
    setloading(true);
    const  res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setposts(res.data)
    setloading(false)
  }
  fetchdata();

 
  
},[])
  const IndexofLastPost = currentPage * postPerPage
  const IndexofFirstPost =   IndexofLastPost - postPerPage
  const currentPosts = posts.slice(IndexofFirstPost,IndexofLastPost)


  const paginate =(pageNumber)=>setcurrentPage(pageNumber)

  
    return (
    <div className="App"> 
        <Post posts={currentPosts} loading={loading}></Post>
        <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}></Pagination>
    </div>
  );
}

export default App;
