import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Myprojects from './components/Myprojects'
import FeaturedArticles from './components/FeaturedArticles'
import Gallery from './components/Gallery'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeaturedTutorials from './components/FeaturedTutorials'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
     <Myprojects />
     <FeaturedArticles />
<FeaturedTutorials />
      <Gallery />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  )
}

export default App