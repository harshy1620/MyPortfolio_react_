import './Contact.css';

export default function Contact() {
    return (
      <section id="Contact" className="contact--section">
        <div>
         
          <h1 className='title'>Contact Me</h1>
          <p className="sub--title">Get In Touch</p>
        </div>

      <div class='form-div'>
        <form className="contact--form--container" action='https://formspree.io/f/mvojdkwv' method='POST'>
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>

            <label htmlFor="email" className="contact--label">
              <span className="text-md">E-mail</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>

            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">PhoneNo.</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>

          </div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="5"
              placeholder="Type your message..."
              name="message"
            />
          </label>
        
          <div>
            <button className="btn btn-primary contact--form--btn" type="submit">Submit</button>
          </div>
        </form>
        </div>
      </section>
    );
  }
  