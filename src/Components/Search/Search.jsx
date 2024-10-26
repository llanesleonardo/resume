import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [data, setData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null); // Ref to track the dropdown
 // Close dropdown on outside click
 useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { 
      console.log('handleClickOutside',isDropdownOpen)
      setIsDropdownOpen(false); // Close dropdown
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://resumev1sa.blob.core.windows.net/resumedata/data/blogcategories/categories.json', {
              headers: {
                'Content-Type': 'application/json',
              }
            });
            setData(response?.data);
            console.log('--------> '+response?.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

  // Update filtered posts based on search term
  useEffect(() => {
   const posts = Object.values( data?.data || {}).flat(); // Flatten the categories array
   
   const filtered = posts.filter(post => {
    return  post?.title.toLowerCase().includes(searchTerm.toLowerCase())
   });
    console.log(filtered); 
    setFilteredPosts(filtered);

  }, [searchTerm, data]);

  const handlePostClick = (postId,postCat) => {
    // Redirect or handle the post click (you can use React Router's history.push or Link component)
    console.log(`Navigate to blog post with id: ${postId}`);
    setIsDropdownOpen(false); // Close dropdown on selection
    navigate(`/blog/${postCat}/${postId}`);
  };



    return (
    <div className='container mx-auto lg:max-w-3xl md:max-w-2xl text-black prose prose-lg shadow-md shadow-black'>
   <div className="relative" ref={dropdownRef}>
    <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value); setIsDropdownOpen(true);  }} // Update search term on input change
        className="search-input w-full	py-3 rounded px-3" // Add your styling here
      />
      {isDropdownOpen && filteredPosts.length > 0 && searchTerm && (
          <div className="absolute left-0 z-10 bg-white shadow-lg rounded mt-1 w-full">
            <ul className="max-h-60 overflow-y-auto">
              {filteredPosts.map(post => (
                <li
                  key={post.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handlePostClick(post.id,post.cat)} // Handle post click
                >
                  {post.id + ' ' + post.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

