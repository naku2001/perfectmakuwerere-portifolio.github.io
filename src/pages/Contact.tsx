import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-center text-3xl tracking-widest text-muted-foreground mb-8 mt-8">CONTACT</h2>
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">I have got just what you need. <a href="mailto:your.email@example.com" className="underline hover:text-primary">Lets talk.</a></h3>
        </div>
        <div className="flex flex-col items-center space-y-2 mb-8">
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <Phone className="w-5 h-5" />
            <span>+263 77 123 4567</span>
          </div>
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <Mail className="w-5 h-5" />
            <span>perfect.makuwerere@email.com</span>
          </div>
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Harare, Zimbabwe</span>
          </div>
        </div>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Name" className="w-1/2 p-3 rounded bg-secondary/20 focus:outline-none" />
            <input type="email" placeholder="Email" className="w-1/2 p-3 rounded bg-secondary/20 focus:outline-none" />
          </div>
          <input type="text" placeholder="Subject" className="w-full p-3 rounded bg-secondary/20 focus:outline-none" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-secondary/20 focus:outline-none min-h-[100px]" />
          <button type="submit" className="w-full p-3 rounded bg-primary text-white font-semibold hover:bg-primary/80 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 