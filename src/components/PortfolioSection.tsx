import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'ML Analytics Dashboard',
      description: 'Interactive dashboard for machine learning model performance monitoring',
      image: project1,
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'AI Chatbot Platform',
      description: 'Intelligent conversational AI with natural language processing',
      image: project2,
      technologies: ['Python', 'NLTK', 'React Native', 'Node.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Computer Vision App',
      description: 'Real-time object detection and tracking system',
      image: project3,
      technologies: ['Python', 'OpenCV', 'YOLO', 'Flask'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Data Science Notebook',
      description: 'Comprehensive analysis of market trends using machine learning',
      image: project4,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing deep learning architectures',
      image: project5,
      technologies: ['Python', 'PyTorch', 'Three.js', 'WebGL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Trading Algorithm',
      description: 'Automated trading system using reinforcement learning',
      image: project6,
      technologies: ['Python', 'RL', 'FastAPI', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of AI and machine learning projects demonstrating practical applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <a 
                      href={project.liveLink} 
                      className="p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary-glow transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      className="p-2 bg-secondary rounded-full text-secondary-foreground hover:bg-muted transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;