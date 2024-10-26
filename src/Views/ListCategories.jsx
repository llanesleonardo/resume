import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


export default function ListCategories() {
  const { catid } = useParams();
  const [data, setData] = useState(null);
  const [bPosts,setBPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://resumev1sa.blob.core.windows.net/resumedata/data/data.json', {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setData(response?.data);
        console.log(response?.data?.blog?.categories[catid.substring(0, catid.length - 1)]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
}, []);


useEffect(() => {
  const fetchData2 = async () => {
    try {
      const response = await axios.get('https://resumev1sa.blob.core.windows.net/resumedata/data/blogcategories/categories.json', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setBPost(response?.data);
      console.log('-----> '+response?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData2();
}, []);


  const getData = (start, end) =>{
   let listHtml = '<ul>';
    for (let index = start; index < end; index++) {
      
      listHtml += `<li style='padding-bottom:10px'><a style='' href=${`/blog/${data?.blog?.categories[catid.substring(0, catid.length - 1)]?.id}/${bPosts?.data[index]?.id}`}> - ${bPosts?.data[index]?.title}</a></li>`
      console.log(listHtml)
    }
    listHtml += `</ul>`
   
    return listHtml
  }
  return (
    <div className='h-screen'>
       <Header />
       <div className='pt-16 pb-6'>
      <h1 className='text-center text-white font-bold text-2xl '>{data?.blog?.categories[catid.substring(0, catid.length - 1)]?.title}</h1>
      </div>
      <div className='pb-16'>
      <p className='text-center text-white'>{data?.blog?.categories[catid.substring(0, catid.length - 1)]?.description}</p>
    </div>
     <div className='flex flex-row justify-evenly align-middle flex-wrap text-white'>
      <div>
        <h2 className='text-center font-bold pb-6 underline uppercase'>Posts</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(0,bPosts?.data.length) }} />
      </div>
      </div>
    <Footer/>
    </div>
  )
}

