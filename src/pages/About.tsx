import { Heart, Users, Leaf, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We curate only the finest furniture and decor from trusted manufacturers.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority with dedicated support and easy returns.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and sustainable materials.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Award-winning service and products that stand the test of time.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold text-foreground mb-6">About HomeNest</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping you create a home that reflects your unique style and personality. 
            Since 2020, we've been curating beautiful furniture and decor for homes across the country.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HomeNest was born from a simple idea: everyone deserves a beautiful home they love. 
              What started as a small showroom has grown into a beloved destination for furniture and 
              home decor enthusiasts.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we work with the finest manufacturers and artisans to bring you pieces that combine 
              style, quality, and value. Every item in our collection is carefully selected to meet our 
              high standards for design and craftsmanship.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-12 mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Brands</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.8⭐</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Our dedicated team of design experts and customer service professionals is here to help 
            you every step of the way.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Founder & CEO" },
              { name: "Michael Chen", role: "Head of Design" },
              { name: "Emily Davis", role: "Customer Success" },
              { name: "David Wilson", role: "Operations Manager" },
            ].map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mb-4"></div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
