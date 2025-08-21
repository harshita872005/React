import React,{useState,useEffect} from 'react'
import { useLayoutEffect } from 'react';

const DataFetcher = () => {
    const [data,setData]= useState([]);//store post from api
    const [loading,setLoading]=useState(true);//show loading until we get data
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')//make http request
        .then(response => response.json())//convert to js obj
        .then(data =>{
            setData(data);//savepost in state
            setLoading(false); // stop showing "loading.."
        });
    },[]);

  return (
    <div>
        {loading ? ( <h1>Loading.....</h1>
        ):( <ul>
            {data.map(post => {
               return <li key={post.id}>{post.title}</li>
            })}
        </ul>)}
    </div>
  )
}

export default DataFetcher
