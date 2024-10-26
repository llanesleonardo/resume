
import HomePage from './Views/HomePage'
import BlogHomepage from './Views/BlogHomepage'
import ListCategories from './Views/ListCategories'
import BlogPost from './Views/BlogPost'
import FOFPage from './Views/FOFPage'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <div  className=' bg-[url("./assets/bg2.png")]'>
    <Router>
            <Routes>
              <Route  path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogHomepage />} />
              <Route path="/blog/:catid" element={<ListCategories />} />
              <Route path="/blog/:catid/:id" element={<BlogPost />} />
              <Route  path="*" element={<FOFPage />} />
            </Routes>
    </Router> 
     
     </div>
    </>
  )
}

export default App
