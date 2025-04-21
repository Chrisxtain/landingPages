// landing-one/src/App.js

import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Header with logo and navigation */}
      <header className="header">
        <div className="logo">MyBrand</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>

      {/* Hero section with text and image */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to MyBrand</h1>
          <p>Your all-in-one solution to simplify your workflow.</p>
          <button>Get Started</button>
        </div>
        <div className="hero-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7mI6OCvI8fqo5jFjIuvRka6TuPtqYqXDKg&s" alt="Hero Visual" />
        </div>
      </section>

      {/* Features section with three feature blocks */}
      <section className="features" id="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Fast Performance</h3>
            <p>Lightning-fast load times and smooth interactions.</p>
          </div>
          <div className="feature">
            <h3>Easy Integration</h3>
            <p>Seamless integration with your existing tools.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our team is here for you at any time, any day.</p>
          </div>
        </div>
      </section>

      {/* Testimonials section with two quotes */}
      <section className="testimonials" id="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            “This app changed how we work. It's so efficient!”
            <span>— Alex R.</span>
          </div>
          <div className="testimonial">
            “Fantastic customer service and beautiful design.”
            <span>— Jamie T.</span>
          </div>
          <div className="testimonial">
          “I can't imagine going back to how we used to do things.”
          <span>— Taylor S.</span>
          </div>
          <div className="testimonial">
            “A game changer for our team. Highly recommend!”
            <span>— Jordan W.</span>
          </div>
        </div>
      </section>

      {/* Pricing section with three tiers */}
      <section className="pricing" id="pricing">
        <h2>Choose Your Plan</h2>
        <div className="pricing-tiers">
          <div className="tier">
            <h3>Basic</h3>
            <p>$9/mo</p>
            <ul>
              <li>1 Project</li>
              <li>Email Support</li>
              <li>Basic Analytics</li>
            </ul>
          </div>
          <div className="tier tier-featured">
            <h3>Pro</h3>
            <p>$29/mo</p>
            <ul>
              <li>10 Projects</li>
              <li>Priority Support</li>
              <li>Advanced Analytics</li>
            </ul>
          </div>
          <div className="tier">
            <h3>Enterprise</h3>
            <p>Contact Us</p>
            <ul>
              <li>Unlimited Projects</li>
              <li>Dedicated Support</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer with basic info */}
      <footer className="footer">
        &copy; 2025 MyBrand. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
