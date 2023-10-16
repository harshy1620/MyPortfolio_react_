import  { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img class="logo" src="https://img.freepik.com/free-vector/blue-folder-with-information-about-employee-3d-illustration-cartoon-drawing-folder-with-files-documents-3d-style-white-background-business-recruitment-management-organization-concept_778687-707.jpg?w=740&t=st=1695735415~exp=1695736015~hmac=c437aadbf8859b4808311ee015bf242fc13f76afa4e96db76c1cf19d475a9254" alt="Logoipsum" />
      </div>


      <ul className="app__navbar-links">
        {['Home', 'AboutMe', 'Contact', 'Project', 'Skills'].map((item) => (
          <li className="app__flex p-text" key={item}>
            <Link to={item} 
              activeClass="active" 
              smooth={true} 
              duration={1500}>{item}
              </Link>
          </li>
        ))}
      </ul>

   
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 200] }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'AboutMe', 'Contact', 'Project', 'Skills'].map((item) => (
                <li key={item}>
                  <Link to={item} onClick={() => setToggle(false)}
                   activeClass="active" 
                    smooth={true}
                     duration={1500}>{item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

