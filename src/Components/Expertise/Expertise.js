import data from "../../data/index.json";
import './Expertise.css'
export default function Expertise() {
  return (
    <section className="Expertise--section" id="myExpertise">
    
        <div className="portfolio--container">
            <h2 className="Expertise--section--heading">My Expertise</h2>
        </div>

        <div className="Expertise--section--container">
            {data?.expertise?.map((item, index) => (
                <div key={index} className="Expertise--section--card">
                    <div className="Expertise--section--img">
                        <img src={item.src} alt="Product Chain" />
                    </div>
                    <div className="Expertise--section--card--content">
                        <h3 className="Expertise--section--title">{item.title}</h3>
                        <p className="Expertise--section--description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    </section>
  );
}
