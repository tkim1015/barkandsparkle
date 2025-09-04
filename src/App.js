import React from "react";

export default function BarkAndSparkleSite() {
  const curated = [
    "/uploads/IMG_3877.jpeg",
    "/uploads/IMG_3195.jpeg",
    "/uploads/IMG_3198.jpeg",
    "/uploads/IMG_2760.jpeg",
    "/uploads/IMG_2782.jpeg",
    "/uploads/IMG_3943.jpeg",
    "/uploads/IMG_4252.jpeg",
    "/uploads/IMG_5117.jpeg",
    "/uploads/IMG_5121.jpeg",
  ];
  return (
    <div>
      <div className="header-top">
        <div className="container bar">
          <span className="small">AKC Safety Certified • Pet First Aid & CPR Certified</span>
          <div style={{display:'flex',gap:'10px'}}>
            <a className="und" href="sms:+16266701270?&body=Hi%20Bark%20%26%20Sparkle%2C%20I%27d%20like%20to%20book%20a%20groom%20for%20my%20dog.">Text us</a>
            <span className="small" style={{opacity:.6}}>|</span>
            <a className="und" href="tel:6266701270">Call: (626) 670-1270</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container row">
          <a href="#home" className="brand">
            <img src="/uploads/Logo_transparent.png" alt="Bark & Sparkle Logo" />
            <span>Bark & Sparkle</span>
          </a>
          <nav className="nav">
            <a className="und" href="#about">About</a>
            <a className="und" href="#gallery">Gallery</a>
            <a className="und" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container split">
          <div>
            <h1>Gentle, safety-first grooming in San Dimas.</h1>
            <p className="lead">Small breeds up to 40 lbs. Calm handling and beautiful finishes — with AKC S.A.F.E. certification.</p>
            <div className="ctas">
              <a className="btn btn-primary" href="sms:+16266701270?&body=Hi%20Bark%20%26%20Sparkle%2C%20I%27d%20like%20to%20book%20a%20groom.">Text us</a>
              <a className="btn btn-outline" href="tel:6266701270">Call (626) 670-1270</a>
              <a className="btn" href="#contact">Message form</a>
            </div>
            <div className="pills" style={{marginTop:'14px'}}>
              <span className="pill">AKC S.A.F.E. Certified</span>
              <span className="pill">Pet First Aid & CPR</span>
              <span className="pill">Tue–Sat 9–5 • San Dimas</span>
            </div>
          </div>
          <div>
            <div className="card-img" style={{backgroundImage:"url('/uploads/IMG_3877.jpeg')"}}></div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split about">
          <div>
            <h2>About Bark & Sparkle</h2>
            <p className="lead">We believe every pup deserves to shine. Our boutique grooming salon focuses on small breeds up to 40 lbs with a gentle, safety-first approach.</p>
            <div className="badge-row">
              <span className="badge">✓ AKC Safety Certified</span>
              <span className="badge">✓ Pet First Aid & CPR</span>
            </div>
          </div>
          <div className="about-visuals">
            <img src="/uploads/AKC_Salon_Cert.png" alt="AKC Salon Badge"/>
            <img src="/uploads/AKC_Certificate.jpeg" alt="AKC Certificate"/>
          </div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <h2>Gallery</h2>
          <p className="meta">A curated selection of recent grooms.</p>
          <div className="gallery-grid">
            {curated.map((src,i)=>(<img key={i} src={src} alt="Groomed dog"/>))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-grid">
          <div className="card">
            <h2>Book or Ask a Question</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className="row2">
                <input className="input" placeholder="Your name" required/>
                <input className="input" placeholder="Phone or email" required/>
              </div>
              <div style={{height:'8px'}}></div>
              <input className="input" placeholder="Dog breed & weight"/>
              <div style={{height:'8px'}}></div>
              <textarea className="textarea" placeholder="Tell us what you need (bath, full groom, style, timing)"></textarea>
              <div style={{height:'10px'}}></div>
              <button className="btn btn-primary">Send Message</button>
            </form>
            <div className="list">
              <div>📞 (626) 670-1270</div>
              <div>✉ barkandsparkle.info@gmail.com</div>
              <div>📍 311 S San Dimas Ave, San Dimas, CA 91773</div>
              <div>🕘 Tue–Sat 9am–5pm</div>
            </div>
          </div>
          <iframe title="Map" className="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.344214639995!2d-117.8067!3d34.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA2JzI0LjAiTiAxMTfCsDQ4JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1710000000000"></iframe>
        </div>
      </section>

      <footer className="footer">
        <div className="container grid">
          <div>
            <div className="brand">Bark & Sparkle</div>
            <p className="small">Gentle, safety-first grooming in San Dimas.</p>
          </div>
          <div>
            <div className="small">Quick Links</div>
            <div className="small" style={{marginTop:'8px'}}>
              <div><a className="und" href="#about">About</a></div>
              <div><a className="und" href="#gallery">Gallery</a></div>
              <div><a className="und" href="#contact">Contact</a></div>
            </div>
          </div>
        </div>
        <div className="container bottom">
          <span>© {new Date().getFullYear()} Bark & Sparkle. All rights reserved.</span>
          <span>Made with love in San Dimas, CA</span>
        </div>
      </footer>
    </div>
  );
}
