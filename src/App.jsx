
import HomePage from './Views/HomePage'
import BlogHomepage from './Views/BlogHomepage'
import ResumeHomePage from './Views/ResumeHomePage'
import ListCategories from './Views/ListCategories'
import BlogPost from './Views/BlogPost'
import FOFPage from './Views/FOFPage'
import Contact from './Views/Contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
            <Routes>
              <Route  path="/" element={<HomePage />} />
              <Route  path="/resume" element={<ResumeHomePage />} />
              <Route path="/blog" element={<BlogHomepage />} />
              <Route path="/blog/:catid" element={<ListCategories />} />
              <Route path="/blog/:catid/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route  path="*" element={<FOFPage />} />
            </Routes>
    </Router> 
     
    </>
  )
}

export default App
