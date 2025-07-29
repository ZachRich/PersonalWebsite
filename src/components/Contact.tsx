import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 cosmic-text">
          Get in <span className="bg-hero-gradient bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 cosmic-text">Let's build something</h3>
              <p className="text-muted-foreground leading-relaxed">

              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">📧</span>
                </div>
                <div>

                  <p className="font-medium cosmic-text">E-Mail</p>
                  <p className="text-muted-foreground">ZachRichDev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">💼</span>
                </div>
                <div>
                  <p className="font-medium cosmic-text">Networking</p>
                  <p className="text-muted-foreground">linkedin.com/in/zachary-rich</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary">💻</span>
                </div>
                <div>
                  <p className="font-medium cosmic-text">GitHub</p>
                  <p className="text-muted-foreground">github.com/ZachRich</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="cosmic-text">Transmit a Message</CardTitle>
              <CardDescription>
                Your transmission will reach me faster than light speed.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Subject" />
              <Textarea placeholder="Your message..." className="min-h-[120px]" />
              <Button variant="hero" className="w-full">
                Launch Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;