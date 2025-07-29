import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Galactic E-Commerce Hub",
      description: "An interstellar marketplace platform built with React, Node.js, and PostgreSQL. Features quantum payment processing, AI-powered recommendations, and real-time inventory across multiple star systems.",
      image: project1,
      tech: ["React", "Node.js", "PostgreSQL", "AI Integration"],
      github: "#",
      live: "#",
    },
    {
      title: "Cosmic Task Orchestrator",
      description: "A mission control center for managing space operations with real-time updates, holographic displays, and team collaboration across different galaxies and time zones.",
      image: project2,
      tech: ["Next.js", "TypeScript", "Prisma", "WebRTC"],
      github: "#",
      live: "#",
    },
    {
      title: "Stellar Analytics Command",
      description: "A comprehensive space intelligence dashboard for analyzing cosmic data, tracking asteroid movements, and generating predictive models for space exploration missions.",
      image: project3,
      tech: ["Vue.js", "Python", "MongoDB", "Machine Learning"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 cosmic-text">
          Stellar <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-cosmic transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    GitHub
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline-glow" size="lg">
            Explore All Missions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;