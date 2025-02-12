
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Users, BarChart, Book, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Sent",
      description: "Our team will contact you shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-primary">SamarthX</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#solutions" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center bg-accent px-4 py-1.5 rounded-full mb-6 animate-fade-in">
            <span className="text-sm font-medium text-accent-foreground">Ministry of Education Initiative</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-down">
            Empowering Schools,<br />Transforming Education
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
            One unified platform for smarter schools. AI-Driven, Governance-Connected, Future-Ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button size="lg" className="group">
              Request Demo <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive School Management</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Student Management",
                description: "Complete student lifecycle management from enrollment to graduation"
              },
              {
                icon: BarChart,
                title: "Academic Performance",
                description: "Track and analyze student progress with CCE-compliant evaluation"
              },
              {
                icon: Lock,
                title: "Secure Access",
                description: "Role-based access control with Aadhaar integration"
              },
              {
                icon: Shield,
                title: "Compliance Ready",
                description: "Built-in UDISE compliance and automated reporting"
              },
              {
                icon: Book,
                title: "Resource Management",
                description: "Efficient management of textbooks, meals, and infrastructure"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl border bg-white hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1.57M+</div>
              <div className="text-primary-foreground/80">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1400+</div>
              <div className="text-primary-foreground/80">Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Get a Demo</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleDemoRequest();
            }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-2 border rounded-lg"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border rounded-lg"
                required
              />
              <input
                type="text"
                placeholder="School/Institution Name"
                className="w-full p-2 border rounded-lg"
                required
              />
              <Button type="submit" className="w-full">
                Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              © 2024 SamarthX. An initiative by the Ministry of Education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
