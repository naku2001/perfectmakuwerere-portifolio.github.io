import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer id="contact" className="bg-secondary/50 py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              AI Engineer
            </h3>
            <p className="text-muted-foreground">
              Building intelligent systems and machine learning solutions that shape the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Get In Touch</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-glow"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground mt-4">
              Let's collaborate on innovative AI solutions!
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 AI Engineer Portfolio. Built with passion and cutting-edge technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;