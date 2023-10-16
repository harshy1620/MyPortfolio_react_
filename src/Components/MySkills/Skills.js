import React from 'react'
import data from "../../data/index.json";
import './Skills.css'

export default function Skills(){
  return (
<section className='skill-section' id="Skills">
    <div className='heading'>My Skills</div>
       <div className='wrapper-1'>
              {data?.skills?.map((item, index) => (
            <div key={index} className="skills--section--card">
                      <div className="skill--section--img">
                            <img src={item.src} alt="Placeholder" />
                      </div>
                          <div className="skill--section--card--content">
                            <p className="text-md">{item.title}</p>
                         </div>
             </div>
          ))}

    </div>
 </section>
  )
}
