import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "Navigating React Nebulae: Advanced Component Architectures",
      excerpt: "Explore the cosmic patterns for building scalable React applications that can withstand the gravitational pull of growing requirements and interstellar team dynamics.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Space Architecture", "Cosmic Patterns"],
    },
    {
      title: "CSS Constellations: Modern Styling Across the Digital Galaxy",
      excerpt: "Journey through the latest CSS technologies and discover how to create stellar user experiences that shine brighter than distant stars.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      tags: ["CSS", "Frontend", "Stellar Design"],
    },
    {
      title: "TypeScript Spacecraft: Building Type-Safe Missions to Production",
      excerpt: "Launch your code with confidence using advanced TypeScript techniques that ensure your applications survive the harsh environment of production space.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      tags: ["TypeScript", "JavaScript", "Mission Control"],
    },
  ];

  return (
    <section id="blog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 cosmic-text">
          Cosmic <span className="bg-hero-gradient bg-clip-text text-transparent">Chronicles</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-cosmic transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 cursor-pointer hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline-glow" size="lg">
            Explore All Chronicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;