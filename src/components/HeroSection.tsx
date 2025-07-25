import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import React, { useEffect, useState } from 'react';

const phrases = [
  "Hello, I'm Perfect Makuwerere",
  'I like coding',
  'I like AI',
  'I like chess',
  'I like learning',
  'I like building things',
];

const TYPING_SPEED = 70;
const ERASING_SPEED = 40;
const DELAY_AFTER_TYPING = 1200;
const DELAY_AFTER_ERASING = 400;

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      if (displayedText.length < phrases[currentPhrase].length) {
        timeout = setTimeout(() => {
          setDisplayedText(phrases[currentPhrase].slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsTyping(false), DELAY_AFTER_TYPING);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(phrases[currentPhrase].slice(0, displayedText.length - 1));
        }, ERASING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, DELAY_AFTER_ERASING);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentPhrase]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-fuchsia-100 to-rose-200 opacity-90" />
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto card-glass soft-shadow rounded-xl py-12">
        <div className="animate-fade-in">
          {/* Optional: Add avatar/profile image with float animation */}
          {/* <img src="/path/to/avatar.jpg" alt="Perfect Makuwerere" className="mx-auto mb-6 w-28 h-28 rounded-full object-cover border-4 border-primary animate-float" /> */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-[cursive] text-pink-600">
            <span className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent block animate-slide-in">
              <span className="inline-block whitespace-nowrap overflow-hidden border-r-4 border-pink-400 pr-2 min-h-[1.2em]">
                {displayedText}
                <span className="animate-blink">|</span>
              </span>
            </span>
          </h1>
          <div className="mb-6">
            <a
              href="/Perfect-Princess%20Makuwerere_Artificial%20Intelligence%20Intern.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded bg-primary text-white font-semibold shadow soft-shadow hover:bg-primary/80 transition mb-2"
            >
              Download Resume
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#portfolio')}
              className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-400 hover:shadow-glow transition-all duration-300 text-white font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white font-semibold"
            >
              Get In Touch
            </Button>
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-fuchsia-400 hover:text-pink-600 transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-fuchsia-400 hover:text-pink-600 transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-fuchsia-400 hover:text-pink-600 transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-pink-200/40 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-fuchsia-200/40 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;

// Add to App.css:
// .animate-blink { animation: blinkTextCursor 1s steps(2, start) infinite; }
// @keyframes blinkTextCursor { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }