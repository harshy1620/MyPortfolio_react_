import { Typewriter } from "react-simple-typewriter";
import './HeroSection.css'
import { Link } from 'react-scroll';

 function HeroSection(){
    return (
    <section id="Home" className="hero--section">
      
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'm Harsh Yadav</p>
                <h2 className="hero--section--title" style={{ color: '#5e3bee', fontWeight: '800',fontSize:"55px" }}>
                    <Typewriter
                        words={['Web Developer', 'React Developer', 'Tech Enthusiast']}
                        loop={true}
                        cursor
                        cursorColor="red"
                        cursorStyle='_'
                        typeSpeed={200}
                        deleteSpeed={25}
                        delaySpeed={1500}
                    />
                </h2>
               
               <p className="hero--section-description">Skilled MERN Stack Web Developer ready to bring your ideas to life.</p>
            </div>

            <button className="btn">
                <Link to="Contact"
                activeClass="active" 
              smooth={true} 
              duration={1500}>
              Get In Touch
              </Link>
            </button>
        </div>

        <div className="hero--section--img">
            <img src="https://theninehertz.com/wp-content/themes/ninehertz/assets-2022/img/hire-web-developers/png/Hire-Web-Developers.png" alt="Hero"/>
        </div>

    </section>
    );
  }
  
  export default HeroSection;