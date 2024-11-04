import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Title from './components/Title'
import About from './components/About'
import Project from './components/Project'

const ServiceCard = ({ image, title, subtitle, borderColor }) => (
  <div className={`card service-card ${borderColor}`}>
    <img src={image} alt={title} />
    <div className="card-body">
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>
);
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Title/>
      <About/>
      <Project/>
      <div className="container text-center">
        <h1 className="my-4">Services</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <ServiceCard
              image="https://storage.googleapis.com/a1aa/image/hemZNFEEoMS7RKCjmKxQ70scRlp1xkROOZh5mZIOe3SNUotTA.jpg"
              title="UI/UX"
              subtitle="Designer"
              borderColor="uiux"
            />
          </div>
          <div className="col-md-4">
            <ServiceCard
              image="https://storage.googleapis.com/a1aa/image/ahOrfR2fIssQAENF4YFWCFqn5rbbw74biyM5kkfuT64goQbnA.jpg"
              title="Machine learning"
              subtitle="Algorithms"
              borderColor="machine-learning"
            />
          </div>
          <div className="col-md-4">
            <ServiceCard
              image="https://storage.googleapis.com/a1aa/image/g2MjVxUT0J69BhDtnJDKAXkBFmdqpQbRiV9N8G6Dx7gDFa7E.jpg"
              title="Graphics Designer"
              subtitle="Designer"
              borderColor="graphics-designer"
            />
          </div>
        </div>
      </div>
    
      
      
      
      
      
      


    </>
  )
}

export default App
