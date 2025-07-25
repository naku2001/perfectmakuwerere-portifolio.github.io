import React from 'react';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'MySQL', icon: '🛢️' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'MATLAB', icon: '📊' },
  { name: 'Git', icon: '🔗' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '⏭️' },
  { name: 'C', icon: '💻' },
  { name: 'Flask', icon: '🌊' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'HTML5', icon: '📰' },
  { name: 'Flutter', icon: '💙' },
  { name: 'Dart', icon: '🎯' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'GCP', icon: '🌥️' },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 pastel-section">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-4xl font-bold mb-2 tracking-widest">SKILLS</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4 uppercase tracking-wider">Hover over a skill for current proficiency</p>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center"
            >
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-primary/30 bg-white soft-shadow transition-transform duration-200 hover:scale-110 hover:border-primary cursor-pointer relative"
                title={skill.name}
              >
                <span className="text-4xl select-none">{skill.icon}</span>
              </div>
              <span className="mt-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;