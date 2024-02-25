import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Stack,Button } from '@mui/material'
function App() {
  const sliderRef = useRef(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease-in-out',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="" style={{ backgroundColor: '#002244', zIndex: '2' }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#home">Home</Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link">About</Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link">Typography</Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link">Contact Us</Nav.Link>
            </Nav>
            <Nav className="me-auto" style={{ marginLeft: '400px' }}>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#home"><i className="fa-brands fa-facebook-f"></i></Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link"><i className="fa-brands fa-twitter"></i></Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link"><i className="fa-brands fa-google-plus-g"></i></Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link"><i className="fa-brands fa-instagram"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='parallax-container' style={{
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px', // Adjust as needed
       
   backgroundRepeat:'no-repeat',
    
    
        zIndex: '1' // Ensure this is below the navbar
      }}>
         <div className="parallax-section parallax-section1"></div>
          <div className="content">
            <h1 className='heading1'>Explore <b>The World</b></h1>
         
          </div>
      </div>

     <div className='container'>
        <div className=" row video border p-5 mt-5 rounded container">
  <div className="col-lg-5">
    <h2 ><b>Discover New Horizons</b></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum distinctio nostrum illum voluptates magnam laudantium expedita corrupti neque, in veritatis quo minus necessitatibus unde molestias quasi animi sit mollitia autem.</p>
    <Stack direction="row" spacing={2}>
<Button style={{width:'50%',height:'70px'}}  variant="contained">Get in Touch</Button>
<Button  style={{width:'50%',height:'70px'}} className='bg-dark' variant="outlined">Read More</Button>

</Stack>
  
  </div>
  <div className="col-lg-1"></div>
  <div className="col-lg-6">
 <img style={{width:'500px'}} src="https://livedemo00.template-help.com/wt_51647/images/index-3-556x382.jpg" alt="" />
  </div>
  </div>
     </div>

      <div style={{ position: 'relative', zIndex: '2' }}className='mt-5'>
        <Slider ref={sliderRef} {...sliderSettings} autoplay={true} autoplaySpeed={2000}>
          <div>
            <img style={{ height: '500px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/slider-4-slide-1-1920x678.jpg" alt="Image 1" />
          </div>
          <div>
            <img style={{ height: '500px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/slider-4-slide-2-1920x678.jpg" alt="Image 2" />
          </div>
          <div>
            <img style={{ height: '500px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/slider-4-slide-3-1920x678.jpg" alt="Image 3" />
          </div>
        </Slider>
      </div>

      <div style={{ position: 'absolute', top:'1500px', right: '20px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', zIndex: '3' }}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '10px',
              height: '10px',
              marginBottom: '5px',
              background: index === currentSlide ? 'blue' : 'gray',
              border: 'none',
              cursor: 'pointer',
             
            }}
          />
        ))}
      </div>

      <div className='parallax-container' style={{
       
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       minHeight: '500px', // Adjust as needed
      
  backgroundRepeat:'no-repeat',
   
   
       zIndex: '1' // Ensure this is below the navbar
     }}>
        <div className="parallax-section parallax-section2"></div>
         <div className="content">
           <h1 className='heading1'>Create <b>Your tour</b></h1>
        
         </div>
     </div>
 <div className='mt-5' >
  <h3 style={{textAlign:'center'}}>Destinations</h3>
  
  <div className="row mb-5 ">
    <div className="col-lg-4"></div>
    <div className="col-lg-4"><div style={{ position: 'relative', zIndex: '2' }} className=" mt-5">
        <Slider ref={sliderRef} {...sliderSettings} autoplay={true} autoplaySpeed={1000}  >
          <div>
            <img style={{ height: '250px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/gallery-image-15-420x308.jpg" alt="Image 1" />
            <h3 style={{textAlign:'center',fontFamily: "'Playfair Display', serif"}}>Spain</h3>
          </div>
          <div>
            <img style={{ height: '250px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/gallery-image-16-420x308.jpg" alt="Image 2" />
            <h3 style={{textAlign:'center',fontFamily: "'Playfair Display', serif"}}>Africa</h3>
          </div>
          <div>
            <img style={{ height: '250px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/gallery-image-11-420x308.jpg" alt="Image 3" />
            <h3 style={{textAlign:'center',fontFamily: "'Playfair Display', serif"}}>France</h3>
          </div>
          <div>
            <img style={{ height: '250px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/gallery-image-12-420x308.jpg" alt="Image 4" />
            <h3 style={{textAlign:'center',fontFamily: "'Playfair Display', serif"}}>Italy</h3>
          </div>
          <div>
            <img style={{ height: '250px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/gallery-image-13-420x308.jpg" alt="Image 5" />
            <h3 style={{textAlign:'center',fontFamily: "'Playfair Display', serif"}}>Egypt</h3>
          </div>
          <div>
            <img style={{ height: '250px', width: '100%' }} src="https://livedemo00.template-help.com/wt_51647/images/gallery-image-14-420x308.jpg" alt="Image 6" />
            <h3 style={{textAlign:'center',fontFamily: "'Playfair Display', serif"}}>Dubai</h3>
          </div>
        </Slider>
      </div></div>
    <div className="col-lg-4"> </div>
  </div>
 </div>
    </div>
  );
}

export default App;
