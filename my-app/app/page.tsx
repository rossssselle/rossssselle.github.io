'use client';
import { useState } from "react";
import "./globals.css";

import { Mail } from 'lucide-react';

import SplineClient from "@/components/splineClient";
import Navigation from "@/components/navigation";

export default function Home() {

  const [activeSection, setActiveSection] = useState('home');
  return (
    <div className="container">
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="main-content">
        <div className={`content-panel ${activeSection !== 'home' ? 'visible' : 'hidden'}`}>
          {activeSection === 'about' && (
            <div className="content-inner">
              <h2>About Me</h2>
              <p>
                I’m Zellie (she/they): Software Engineer, STEM educator, and creative human who can build an app, write music, or sew an outfit—depending on the day.
              </p>
              <p>
                With 4+ years in full-stack development (React, JavaScript, Go), I focus on making web experiences simple, scalable, and genuinely enjoyable.
                I also teach computer science at The Parris Foundation, where I mentor students and help them build confidence through tech.
              </p>
              <p>
                I’m happiest working on projects that sit at the intersection of tech, education, community, and creativity. Feel free to reach out! I'm always open to discussing new projects and opportunities.
              </p>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="content-inner">
              <h2>holla at ur enby</h2>
              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link">
                  <Mail size={24} className="contact-icon" style={{ color: '#2563eb' }} />
                  <div className="contact-info">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">justclickthis@thanks.bye</div>
                  </div>
                </a>

                <a
                  href="https://github.com/rossssselle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg className="contact-icon" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div className="contact-info">
                    <div className="contact-label">GitHub</div>
                    <div className="contact-value">@rossssselle</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rossellemacabata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg className="contact-icon" width="24" height="24" fill="#0077b5" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div className="contact-info">
                    <div className="contact-label">LinkedIn</div>
                    <div className="contact-value">Rosselle Macabata</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className={`photo-section ${activeSection !== 'home' ? 'half' : 'full'}`}>
          <div className="photo-content">
            <div className="photo-placeholder">
              <SplineClient />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

