
import React from "react";

export default function BarkAndSparkleSite() {
  return (
    <div>
      <div className="header-top">
        <div className="container bar">
          <a href="#about">AKC Safety Certified • Pet First Aid & CPR Certified</a>
          <a href="tel:6266701270">Call: (626) 670-1270</a>
        </div>
      </div>

      <header className="header">
        <div className="container row">
          <a href="#home" className="brand">
            <img src="/uploads/Logo_transparent.png" alt="Bark & Sparkle Logo" />
          </a>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="container split">
          <div>
            <h1>Pampering pups up to 40 lbs — safely, kindly, beautifully.</h1>
            <p className="lead">Boutique dog grooming studio in San Dimas, CA. We specialize in poodles & doodles, with gentle handling and gorgeous finishes.</p>
            <div className="ctas">
              <a className="btn btn-primary" href="#about">Learn More</a>
              <a className="btn btn-ghost" href="#contact">Contact Us</a>
            </div>
            <div className="badges">
              <div>✓ AKC Safety Certified</div>
              <div>✂ Skilled, gentle groomers</div>
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
            <p className="lead">At Bark & Sparkle, we believe every pup deserves to shine! Our boutique grooming salon in San Dimas caters to dogs up to 40 lbs, specializing in poodles and doodles. Safety and comfort are our top priorities — that’s why we’re AKC S.A.F.E. Certified and trained in Pet First Aid and CPR. We treat every furry guest with gentle care, patience, and love, ensuring they leave looking and feeling their very best.</p>
            <p className="lead">Our certifications show our commitment to providing a professional and safe grooming environment for your pets. You can trust us with your four-legged family members.</p>
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
          <p className="meta">A few of our recent happy clients.</p>
          <div className="gallery-grid">
            {[
              "/uploads/IMG_2760.jpeg","/uploads/IMG_2782.jpeg","/uploads/IMG_3008.jpeg",
              "/uploads/IMG_3195.jpeg","/uploads/IMG_3198.jpeg","/uploads/IMG_3263.png",
              "/uploads/IMG_3322.PNG","/uploads/IMG_3560.png","/uploads/IMG_3561.png",
              "/uploads/IMG_3616.jpeg","/uploads/3816949068861536524.png","/uploads/IMG_3877.jpeg",
              "/uploads/IMG_3943.jpeg","/uploads/IMG_3975.PNG","/uploads/IMG_4252.jpeg",
              "/uploads/IMG_5117.jpeg","/uploads/IMG_5121.jpeg"
            ].map((src,i)=>(<img key={i} src={src} alt="Groomed dog"/>))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-grid">
          <div>
            <h2>Book or Ask a Question</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
              <div style={{display:'grid',gap:'12px',gridTemplateColumns:'1fr 1fr'}}>
                <input className="input" placeholder="Your name" required/>
                <input className="input" placeholder="Phone or email" required/>
              </div>
              <div style={{height:'10px'}}></div>
              <input className="input" placeholder="Dog breed & weight"/>
              <div style={{height:'10px'}}></div>
              <textarea className="textarea" placeholder="Tell us what you need (bath, full groom, style, timing)"></textarea>
              <div style={{height:'12px'}}></div>
              <button className="btn btn-primary">Send Message</button>
            </form>
            <div className="small" style={{marginTop:'14px'}}>
              <div>📞 (626) 670-1270</div>
              <div>✉ barkandsparkle.info@gmail.com</div>
              <div>📍 311 S San Dimas Ave, San Dimas, CA 91773</div>
              <div>🕘 Tue–Sat 9am–5pm</div>
            </div>
            <div style={{display:'flex',gap:'10px',marginTop:'12px'}}>
              <a className="icon" aria-label="Instagram" href="#">IG</a>
              <a className="icon" aria-label="Facebook" href="#">FB</a>
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
              <div><a href="#about">About</a></div>
              <div><a href="#gallery">Gallery</a></div>
              <div><a href="#contact">Contact</a></div>
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
