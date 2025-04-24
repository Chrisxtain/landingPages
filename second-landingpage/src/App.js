// landing-two/src/App.js

import React, { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";


function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    {/* === NAVBAR === */}
    <header className="w-full sticky top-0 bg-black/70 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    
    {/* Logo on the left */}
      <div className="text-lg font-bold text-white">MyBrand</div>

    {/* Desktop Nav Links on the right */}
       <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-white hover:text-blue-400 font-medium">Features</a>
            <a href="#pricing" className="text-white hover:text-blue-400 font-medium">Pricing</a>
            <a href="#contact" className="text-white hover:text-blue-400 font-medium">Contact</a>
       </nav>

    {/* Hamburger Menu (visible on mobile only) */}
       <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-white text-2xl"
       >
      ☰
       </button>
        </div>

    {/* Mobile Dropdown Menu */}
       {menuOpen && (
    <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
      <a href="#features" className="block text-white hover:text-blue-400">Features</a>
      <a href="#pricing" className="block text-white hover:text-blue-400">Pricing</a>
      <a href="#contact" className="block text-white hover:text-blue-400">Contact</a>
    </div>
      )}
    </header>
 

    {/* === HERO SECTION === */}
      <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center text-white overflow-hidden px-6">
    {/* Background video layer */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
          >
          <source src={`${process.env.PUBLIC_URL}/videos/hero.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
          </video>

    {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

    {/* Foreground hero content */}
      <div className="relative z-20 text-center md:text-left max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
           Welcome to <span className="text-purple-400">Your Future</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
           Build smarter. Launch faster. Stand out.
        </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-700 transition">
                Learn More
              </button>
          </div>
        </div>

    {/* Hero Image */}
    {/* <div className="relative z-10">
      <img
        src="https://media.istockphoto.com/id/952063596/photo/business-software-concept-ai-artificial-intelligence.jpg?s=612x612&w=0&k=20&c=UNrf6L11psFEsSWLElzd3z6YuFQ6C2x3DPdZTnqYbZc="
        alt="Business tools illustration"
        className="w-full max-w-lg mx-auto animate-fade-in-up rounded-3xl shadow-lg"
      />
    </div> */}
  
        </section>


    {/* === FEATURES SECTION === */}
       <section id="features" className="relative w-full py-16 px-6 text-black overflow-hidden" data-aos="fade-up">
          <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-pink-200 via-blue-700 to-indigo-900 opacity-40 z-0"></div>
            <div className="relative z-10">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white-800 mb-4">Why Choose Us?</h2>
                  <p className="text-black-600 mb-12 max-w-2xl mx-auto">
                      Discover the features that make our platform powerful and easy to use.
                  </p>
    {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="hover-pop glass-card p-6 rounded-xl shadow-lg mt-8" data-aos="fade-up">
                <h3 className="text-xl font-semibold mb-2 text-black-700">Fast Performance</h3>
                 <p className="text-gray-800">Enjoy lightning-speed operations and optimized backend systems.</p>
              </div>
              <div className="hover-pop glass-card p-6 rounded-xl shadow-lg mt-8" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-semibold mb-2 text-black-700">User-Friendly Interface</h3>
                 <p className="text-gray-800">Navigate easily with our intuitive design and user experience.</p>
              </div>
              <div className="hover-pop glass-card p-6 rounded-xl shadow-lg mt-8" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-semibold mb-2 text-black-700">24/7 Support</h3>
                 <p className="text-gray-800">Get help anytime with our dedicated support team.</p>  
              </div>
              <div className="hover-pop glass-card p-6 rounded-xl shadow-lg mt-8" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold mb-2 text-black-700">Secure & Reliable</h3>
                 <p className="text-gray-800">Your data is safe with us, thanks to our robust security measures.</p> 
              </div>
              <div className="hover-pop glass-card p-6 rounded-xl shadow-lg mt-8" data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-semibold mb-2 text-black-700">Customizable Solutions</h3>
                 <p className="text-gray-800">Tailor our tools to fit your unique business needs.</p>
              </div>  
              <div className="hover-pop glass-card p-6 rounded-xl shadow-lg mt-8" data-aos="fade-up" data-aos-delay="500">
                <h3 className="text-xl font-semibold mb-2 text-black-700">Integrations</h3>
                 <p className="text-gray-800">Seamlessly connect with your favorite apps and services.</p>
              </div>
    {/* <div style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1000&q=80')",
              backgroundSize: "cover",
              padding: "3rem"
            }}>
         <div className="glass-card p-6 rounded-xl shadow-lg text-white">
            <h3 className="text-xl font-semibold mb-2">Test Card</h3>
            <p>This is how glassmorphism looks on top of a photo.</p>
         </div>
        </div> */}

          </div>
         </div>
        </div>
       </section>

   {/* === PARALLAX SECTION === */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
   {/* Fixed background image */}
      <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed z-0"
          style={{
          backgroundImage: `url('https://www.bain.com/globalassets/editorial-disruptors/2024/tech-report-2024/tech-report-hero-1950x650-v2.jpg')`,
       }}
       ></div>

    {/* Overlay content */}
       <div className="relative z-10 h-full w-full flex items-center justify-center bg-black/50 text-white text-center px-4">
          <div data-aos="fade-up">
            <div className="bg-black/50 p-10 rounded-xl max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lets Build Together</h2>
            <p className="text-lg md:text-xl">
              There Is No Limitation To Your Imagination.
            </p>
            </div>
          </div>
        </div>
      </div>
      
    {/* === TESTIMONIALS SECTION === */}
      <section className="bg-gray-100 py-20 px-6" id="testimonials">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 mb-12 max-w-xl mx-auto">
              Don't just take our word for it — see how our product is helping teams around the world.
            </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
        {
          name: "Sarah Johnson",
          title: "Founder, Sparkle Studio",
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          quote: "Their service completely changed our workflow. We've seen huge improvements in team productivity!",
        },
        {
          name: "Michael Lee",
          title: "CTO, DevLaunch",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          quote: "Beautiful design, fast support, and robust tools. Highly recommended!",
        },
        {
          name: "Amira Saleh",
          title: "Marketing Lead, BrightWave",
          img: "https://randomuser.me/api/portraits/women/68.jpg",
          quote: "The experience has been flawless from day one. Our users love it.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <div className="flex justify-center mb-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full border-4 border-purple-500"
            />
          </div>
            <p className="text-gray-700 italic mb-4">&ldquo;{item.quote}&rdquo;</p>
          <div className="text-center">
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
          </div>
         ))}
        </div>
       </div>
      </section>


  {/* === PARALLAX SECTION === */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
  {/* Fixed background image */}
      <div
      className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed z-0"
          style={{
          backgroundImage: `url('https://academy.torilo.ng/wp-content/uploads/2024/09/2149126949.jpg')`,
       }}
       ></div>

    {/* Overlay content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center bg-black/50 text-white text-center px-4">
          <div data-aos="fade-up">
            <div className="bg-black/50 p-10 rounded-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Just Think It</h2>
                <p className="text-lg md:text-xl">
                  Our tools are designed to bring your imagination to life.
                </p>
            </div>
          </div>
        </div>
      </div>

    {/* === PRICING SECTION === */}
      <section id="pricing" className="w-full bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">Pricing Plans</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Simple and flexible pricing. Choose a plan that fits your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Basic</h3>
                  <p className="text-3xl font-bold mb-4">$9<span className="text-base font-normal">/mo</span></p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>✔ 1 Project</li>
                      <li>✔ Community Support</li>
                      <li>✔ Basic Analytics</li>
                    </ul>
                <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">Choose Basic</button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-700 hover:shadow-xl transition transform scale-105" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Pro</h3>
                  <p className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/mo</span></p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>✔ 10 Projects</li>
                      <li>✔ Priority Support</li>
                      <li>✔ Advanced Analytics</li>
                    </ul>
                <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">Choose Pro</button>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="400">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Enterprise</h3>
                  <p className="text-3xl font-bold mb-4">Custom</p>
                    <ul className="text-gray-600 mb-6 space-y-2">
                      <li>✔ Unlimited Projects</li>
                      <li>✔ Dedicated Support</li>
                      <li>✔ Custom Integrations</li>
                    </ul>
                <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">Contact Sales</button>
              </div>
            </div>
        </div>
      </section>

    {/* === PARALLAX SECTION === */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
    {/* Fixed background image */}
      <div className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed z-0"
          style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80')`,
       }}>

       </div>

    {/* Overlay content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center bg-black/50 text-white text-center px-4">
          <div data-aos="fade-up">
            <div className="bg-black/50 p-10 rounded-xl max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Build with Purpose. Your Purpose.</h2>
                <p className="text-lg md:text-xl">
                    Our tools are designed to elevate your brand and help you scale effortlessly.
                </p>
            </div>
          </div>
        </div>
      </div>

    {/* === CONTACT US SECTION === */}
      <section id="contact" className="bg-white pt-10 pb--10 px-3">
        <div className="max-w-6xl mx-auto">
    {/* Centered Section Heading */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Get in Touch</h2>
            <p className="text-gray-600 text-center mb-12">
                We'd love to hear from you! Fill out the form or contact us directly using the info below.
            </p>

    {/* Grid below it */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"></div>

    {/* Contact Form */}
             <form className="space-y-6 ">
             <div>
             <label className="block mb-1 font-medium text-gray-700">Name</label>
             <input
             type="text"
             placeholder="Your name"
             className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
             </div>
             <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
              </div>
              <div>
              <label className="block mb-1 font-medium text-gray-700">Message</label>
              <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"> 
              </textarea>
              </div>
              <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Send Message
              </button>
              </form>
        </div>
      </section>




    {/* === FOOTER SECTION === */}
      <footer className="bg-gray-900 text-gray-300 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* Logo + Description */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">MyBrand</h3>
            <p className="text-sm text-gray-400">
              Empowering your business with smart, scalable, and stunning solutions.
            </p>
        </div>

    {/* Footer Nav */}
        <div>
          <h4 className="font-semibold text-white mb-2">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
        </div>

    {/* Contact Info */}
         <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
            <ul className="text-sm space-y-2">
              <li>Email: hello@mybrand.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: 123 Startup Street, Innovation City</li>
            </ul>
         </div>
        </div>

  {/* Bottom Bar */}
        <div className="mt-10 text-center text-xs text-gray-500">
        &copy; 2025 MyBrand. All rights reserved.
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">
        &trade; Chrisxtain.
        </div>
      </footer>

    </>
  );
}

export default App;
