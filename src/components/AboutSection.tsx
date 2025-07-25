import React from 'react';
import { Card } from '@/components/ui/card';

const FeaturedWritingsSection = () => {
  return (
    <>
      <section id="featured-writings" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Featured Writings</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my latest articles and essays on technology, AI, and software engineering.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Card className="p-8 bg-gradient-card border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Why AI Needs Ethics</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Exploring the importance of ethical considerations in artificial intelligence development and deployment. <a href="#" className="text-primary underline">Read more</a>
                </p>
              </Card>
              <Card className="p-8 bg-gradient-card border-border/50">
                <h3 className="text-2xl font-semibold mb-4 text-primary">The Future of Machine Learning</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A look at emerging trends and technologies shaping the next decade of machine learning. <a href="#" className="text-primary underline">Read more</a>
                </p>
              </Card>
            </div>
            <div className="grid gap-6">
              {/* Optionally, you can add images or writing thumbnails here, or leave this area empty */}
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
          </div>
          <div className="flex justify-center">
            <Card className="p-8 bg-gradient-card border-border/50 max-w-2xl w-full animate-fade-in">
              <h3 className="text-2xl font-semibold mb-2 text-primary">Afrosoft Holdings</h3>
              <div className="text-muted-foreground mb-2">Sep 2022 - Aug 2023</div>
              <div className="text-lg font-medium mb-1">Software Engineer Intern &mdash; Harare, Zimbabwe</div>
              <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2 text-left">
                <li>Diagnosed and resolved critical software bugs using Python and agile development methods, enhancing application stability and user experience across multiple platforms and devices.</li>
                <li>Utilized the Spring Boot framework to develop robust applications, incorporating data visualization techniques to monitor performance and improve reliability by 20% within 4 months.</li>
                <li>Implemented software enhancements that increased user satisfaction by 35%, integrating machine learning best practices to optimize system responses.</li>
                <li>Engineered scalable software solutions capable of supporting over 500 concurrent users, applying version control strategies and agile methodologies to ensure seamless functionality and performance.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedWritingsSection;