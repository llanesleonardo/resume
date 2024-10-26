import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Header from "../Components/Header/Header";
import { Remarkable } from 'remarkable';

export default function BlogPost() {

  const { catid, id } = useParams();
  const [content, setContent] = useState('');
  const [post,setPost] = useState(null);
  const [bPosts,setBPost] = useState(null);
  
  const md = new Remarkable({
    html: true, // Enable HTML tags in source
    breaks: true, // Enable line breaks as in GitHub-flavored Markdown
    linkify:true
  });


useEffect(()=>{
  const getDataContent = async (posts) =>{
    let contentid = [];
  if(posts?.data !== null){
    try {
      contentid = posts?.data.filter((post) =>{
        return post?.id === id 
    })
    //console.log('contentid.length'+contentid)
        if(posts?.data && contentid.length > 0){
          
          setPost(contentid[0]);
          const response = await axios.get(`https://resumev1sa.blob.core.windows.net/resumedata/blogposts/${contentid[0]?.id}.md`, {
          responseType: 'text' // Set responseType to 'text' if needed
        });
        setContent(md.render(response?.data))
        }


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }else{
    return {}
  }
     
  }
  getDataContent(bPosts)
},[bPosts,catid,id]);
  


useEffect(() => {
  const fetchData2 = async () => {
    try {
      const response = await axios.get('https://resumev1sa.blob.core.windows.net/resumedata/data/blogcategories/categories.json', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setBPost(response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData2();
}, []);








  return (
    <div className='h-auto'>
       <Header />
        <div className='h-auto pb-12'>
          <h1 className='text-center text-white text-3xl pt-16 pb-12'>{post?.title}</h1>
          <div className='container mx-auto max-w-3xl text-white prose prose-lg bg-gray-700 bg-opacity-90 shadow-md shadow-black'>
          <div
      className="prose prose-lg mx-auto p-4 bg-transparent text-white rounded-md"
      dangerouslySetInnerHTML={{ __html: content }}
    />
          </div>
        </div>
    </div>
  )
}
