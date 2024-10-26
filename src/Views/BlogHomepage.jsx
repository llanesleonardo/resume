import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


export default function BlogHomepage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://resumev1sa.blob.core.windows.net/resumedata/data/data.json', {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        setData(response?.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
}, []);

const getData2 = (bc) =>{
  let listHtml = '<ul class="margin-bottom:0px">';
   for (let index = 0; index < data?.blog?.categories.length; index++) {
    console.log(data?.blog?.categories[index]?.bc +' === '+ bc)
    if(data?.blog?.categories[index]?.bc === bc){
      listHtml += `<li style='padding-bottom:10px'><a style='' href=${`blog/${data?.blog?.categories[index]?.id}`}> - ${data?.blog?.categories[index]?.title}</a></li>`
      //console.log(listHtml)
    }
   }
   listHtml += `</ul>`
  
   return listHtml
 }
 
  

  const getData = (start, end) =>{
   let listHtml = '<ul class="margin-bottom:0px">';
    for (let index = start; index < end; index++) {
      listHtml += `<li style='padding-bottom:10px'><a style='' href=${`blog/${data?.blog?.categories[index]?.id}`}> - ${data?.blog?.categories[index]?.title}</a></li>`
      //console.log(listHtml)
    }
    listHtml += `</ul>`
   
    return listHtml
  }
  return (
    <div className='h-full'>
       <Header />

      <div className='pt-16 pb-6'>
      <h1 className='text-center text-white font-bold text-2xl mb-5'>3L BLog</h1>
      </div>
      <div className='py-6'>
      <p className='text-center text-white'>Blog categories:</p>
    </div>
     <div className='flex flex-row justify-evenly align-middle flex-wrap text-white max-w-6xl mx-auto'>

      {data?.blog?.basecategories.map((item)=>{ 
       return  <div key={item?.id}>
          <h2 className='text-center font-bold pt-16 pb-6 underline uppercase'>{item?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: getData2(item?.id) }} />
        </div>
      })}
      </div>
      <Footer />
    </div>
  )
}


/**
 * 
 *       <div className='mx-5 my-10'>
        <h2 className='text-center font-bold pb-6 underline uppercase'>Frontend</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(0,10) }} />
      </div>
      <div className='mx-5 my-10'> 
      <h2 className='text-center font-bold pb-6 underline uppercase'>Backend</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(10,20) }} />
      </div>
      <div className='mx-5 my-10'>
      <h2 className='text-center font-bold pb-6 underline uppercase'>Data, Algorithms & Patterns</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(20,30) }} />
      </div>
      <div className='mx-5 my-10'>
      <h2 className='text-center font-bold pb-6 underline uppercase'>AI technologies</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(30,39) }} />
      </div>
      <div className='mx-5 my-10'>
      <h2 className='text-center font-bold pb-6 underline uppercase'>Mobile apps</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(40,49) }} />
      </div>
      <div className='mx-5 my-10'>
      <h2 className='text-center font-bold pb-6 underline uppercase'>Performance apps</h2>
        <div dangerouslySetInnerHTML={{ __html: getData(50,59) }} />
      </div>
 */