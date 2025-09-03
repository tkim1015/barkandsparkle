import React from "react";
import { PawPrint, Phone, MapPin, Mail, Clock, Instagram, Facebook, Sparkles, ShieldCheck, Scissors } from "lucide-react";

export default function BarkAndSparkleSite() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="w-full bg-slate-900 text-white text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-2 hover:underline">
            <Sparkles size={16}/> <span>AKC Safety Certified • Pet First Aid & CPR Certified</span>
          </a>
          <a href="tel:6266701270" className="inline-flex items-center gap-2 hover:underline"><Phone size={16}/> <span>Call: (626) 670-1270</span></a>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900 text-lg">
            <img src="/uploads/Logo_white_background_converted.png" alt="Bark & Sparkle Logo" className="h-10 w-auto"/>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-slate-900 text-slate-600">About</a>
            <a href="#gallery" className="hover:text-slate-900 text-slate-600">Gallery</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Pampering pups up to 40 lbs — safely, kindly, beautifully.</h1>
            <p className="mt-4 text-lg text-slate-600">Boutique dog grooming studio in San Dimas, CA. We specialize in poodles & doodles, with gentle handling and gorgeous finishes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#about" className="px-5 py-3 rounded-2xl bg-slate-900 text-white hover:opacity-90">Learn More</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-slate-300 hover:bg-slate-50">Contact Us</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck size={18}/> AKC Safety Certified</div>
              <div className="flex items-center gap-2"><Scissors size={18}/> Skilled, gentle groomers</div>
            </div>
          </div>
          <div className="relative space-y-4">
            <div className="aspect-[4/3] rounded-3xl shadow-xl bg-[url('https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"/>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Bark & Sparkle</h2>
            <p className="mt-4 text-slate-600">At Bark & Sparkle, we believe every pup deserves to shine! Our boutique grooming salon in San Dimas caters to dogs up to 40 lbs, specializing in poodles and doodles. Safety and comfort are our top priorities — that’s why we’re AKC S.A.F.E. Certified and trained in Pet First Aid and CPR. We treat every furry guest with gentle care, patience, and love, ensuring they leave looking and feeling their very best.</p>
            <p className="mt-4 text-slate-600">Our certifications show our commitment to providing a professional and safe grooming environment for your pets. You can trust us with your four-legged family members.</p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img src="/uploads/AKC_Salon_Cert.png" alt="AKC Salon Badge" className="h-24 w-auto object-contain"/>
            <img src="/uploads/AKC_Certificate.jpeg" alt="AKC Certificate" className="w-full max-w-md rounded-xl shadow"/>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <p className="mt-2 text-slate-600">A few of our recent happy clients.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/uploads/IMG_2760.jpeg",
            "/uploads/IMG_2782.jpeg",
            "/uploads/IMG_3008.jpeg",
            "/uploads/IMG_3195.jpeg",
            "/uploads/IMG_3198.jpeg",
            "/uploads/IMG_3263.png",
            "/uploads/IMG_3322.PNG",
            "/uploads/IMG_3560.png",
            "/uploads/IMG_3561.png",
            "/uploads/IMG_3616.jpeg",
            "/uploads/3816949068861536524.png",
            "/uploads/IMG_3877.jpeg",
            "/uploads/IMG_3943.jpeg",
            "/uploads/IMG_3975.PNG",
            "/uploads/IMG_4252.jpeg",
            "/uploads/IMG_5117.jpeg",
            "/uploads/IMG_5121.jpeg"
          ].map((src, i) => (
            <img key={i} src={src} alt="Groomed dog" className="h-56 w-full object-cover rounded-2xl shadow"/>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Book or Ask a Question</h2>
            <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required className="w-full rounded-xl border px-4 py-3" placeholder="Your name"/>
                <input required className="w-full rounded-xl border px-4 py-3" placeholder="Phone or email"/>
              </div>
              <input className="w-full rounded-xl border px-4 py-3" placeholder="Dog breed & weight"/>
              <textarea className="w-full rounded-xl border px-4 py-3 min-h-32" placeholder="Tell us what you need (bath, full groom, style, timing)"/>
              <button className="rounded-2xl bg-slate-900 text-white px-5 py-3">Send Message</button>
            </form>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-2"><Phone size={18}/> (626) 670-1270</div>
              <div className="flex items-center gap-2"><Mail size={18}/> barkandsparkle.info@gmail.com</div>
              <div className="flex items-center gap-2"><MapPin size={18}/> 311 S San Dimas Ave, San Dimas, CA 91773</div>
              <div className="flex items-center gap-2"><Clock size={18}/> Tue–Sat 9am–5pm</div>
              <div className="flex items-center gap-3 pt-2">
                <a aria-label="Instagram" className="p-2 rounded-xl border hover:bg-slate-50" href="#"><Instagram size={18}/></a>
                <a aria-label="Facebook" className="p-2 rounded-xl border hover:bg-slate-50" href="#"><Facebook size={18}/></a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg min-h-80">
            <iframe title="Map" className="w-full h-full min-h-80" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.344214639995!2d-117.8067!3d34.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA2JzI0LjAiTiAxMTfCsDQ4JzI0LjAiVw!5e0!3m2!1sen!2sus!4v1710000000000"></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-white text-lg"><PawPrint/> Bark & Sparkle</div>
            <p className="mt-3 text-slate-400">Gentle, safety-first grooming in San Dimas.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#gallery" className="hover:underline">Gallery</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Bark & Sparkle. All rights reserved.</span>
            <span>Made with ❤️ in San Dimas, CA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
