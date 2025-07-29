const About = () => {
  const skills = [
    { category: "Frontend Galaxies", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend Cosmos", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"] },
    { category: "Space Tools", items: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 cosmic-text">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">This Space Explorer</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a cosmic code navigator with over 5 years of experience exploring the digital universe. 
                I transform complex algorithms into elegant solutions, bridging the gap between imagination 
                and reality through the power of code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not launching new applications into the digital cosmos, you can find me 
                charting new technological territories, contributing to open source galaxies, 
                or documenting my interstellar coding adventures.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm cosmic-text">
                  Full Stack Astronaut
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm cosmic-text">
                  UI/UX Space Designer
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm cosmic-text">
                  Open Source Explorer
                </span>
              </div>
            </div>
            
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h3 className="text-xl font-semibold mb-3 text-primary cosmic-text">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-card hover:bg-card-hover border border-border rounded-md text-sm transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;