import data from '../../data/index.json';
import './MyPortfolio.css'

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="Project">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="section--heading">My Portfolio</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a href={item.link} style={{textDecoration:'none', color:'black'}}>
              <p className=" portfolio--link">
                Github Code
              </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
