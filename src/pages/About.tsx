import Layout from "@/components/Layout";
import { Users, Target, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "We put your business needs first, delivering solutions that drive real results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in every project we undertake.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We stay ahead of technology trends to give you a competitive edge.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships based on trust and mutual success.",
  },
];

const team = [
  {
    name: "Michael Chen",
    role: "CEO & Founder",
    bio: "20+ years in IT leadership",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Cloud architecture expert",
  },
  {
    name: "David Martinez",
    role: "Head of Security",
    bio: "Cybersecurity specialist",
  },
  {
    name: "Emily Thompson",
    role: "Client Success Director",
    bio: "Customer experience leader",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              About <span className="text-gradient">TechPro</span>
            </h1>
            <p
              className="text-lg text-muted-foreground animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              We're a team of passionate technologists dedicated to helping
              businesses succeed through innovative IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in 2008, TechPro began with a simple mission: to make
                  enterprise-grade IT solutions accessible to businesses of all
                  sizes.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Over the years, we've grown from a small consulting firm to a
                  full-service IT solutions provider, serving over 500 clients
                  across various industries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, we continue to innovate and adapt, ensuring our clients
                  always have access to the latest technology solutions.
                </p>
              </div>
              <div
                className="bg-muted rounded-2xl p-8 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      15+
                    </div>
                    <div className="text-muted-foreground">
                      Years of Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      500+
                    </div>
                    <div className="text-muted-foreground">Clients Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">
                      50+
                    </div>
                    <div className="text-muted-foreground">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts driving our mission forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
