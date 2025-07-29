const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Java", "Spring", "Python", "SQL"] },
    { category: "Tools", items: ["Git", "Docker", "Redis", "ElasticSearch", "RabbitMQ",
        "Jenkins", "FFMPEG"] },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 cosmic-text">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Zachary Rich, a software engineer passionate about creating solutions that solve real-world problems.
                Currently, I'm building impactful software at World Travel Holdings, where I develop APIs and front-end
                systems that support thousands of travel agents and hundreds of websites, connecting people to great travel experiences at scale.
                Previously, I spent nearly two years at Retrieve Technologies, where I progressed from a Junior
                Developer to a mid-level Developer. During my time there, I played a crucial role in developing key features
                including knowledge assessment tools and FFMPEG-based video presentation generation systems. I specialize in Java
                development, API design, databases, and testing, and what drives me most is the continuous learning aspect
                of this field – there's always a new technology to explore or a better way to solve
                a problem.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
{/*                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm cosmic-text">

                </span>*/}
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm cosmic-text">
                  Full Stack Developer
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