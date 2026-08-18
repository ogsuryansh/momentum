import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import vanshImg from "@/assets/vansh.jpg";
import keshavImg from "@/assets/keshav.jpg";
import sagarImg from "@/assets/sagar.jpg";

const team = [
  {
    name: "Vansh Malik",
    image: vanshImg,
    imageClass: "w-full h-full object-cover scale-150 object-[center_10%]",
    role: "Founder & CEO",
    focus: "Vision • Product • Business",
    description: "Driving the vision behind Momentum AI while shaping products that solve real business problems using AI.",
    bullets: [
      "Leads company vision and product strategy",
      "Builds partnerships and fundraising opportunities",
      "Focuses on customer acquisition and sustainable business growth"
    ],
    education: "B.Tech Mechanical Engineering, Delhi Technological University"
  },
  {
    name: "Keshav Raj",
    image: keshavImg,
    imageClass: "w-full h-full object-cover object-[center_15%]",
    role: "Co-Founder & CTO",
    focus: "AI • Engineering • Platform",
    description: "Leading engineering and AI development to build reliable, scalable enterprise voice infrastructure.",
    bullets: [
      "Leads engineering, AI development and platform architecture",
      "Expertise in AI/ML, backend systems and scalable infrastructure",
      "Builds production-ready technology that scales with customers"
    ],
    education: "B.Tech Environment Engineering, DTU (Department Rank 1)"
  },
  {
    name: "Sagar Yadav",
    image: sagarImg,
    imageClass: "w-full h-full object-cover object-top",
    role: "Chief Marketing Officer",
    focus: "Growth • Brand • Community",
    description: "Helping Momentum AI grow through storytelling, creator marketing, and community-led growth.",
    bullets: [
      "Founder of TechTok Playsss and The Roast Shows",
      "Built a creator community of more than 100K subscribers",
      "Leads brand strategy, positioning, and go-to-market execution"
    ],
    education: "B.Tech Mechanical Engineering, Delhi Technological University"
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-background animate-fade-in">
      <div className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-64 -left-32 h-[24rem] w-[24rem] rounded-full bg-accent/10 blur-3xl" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="pt-32 pb-16">
          {/* Mission & Vision */}
          <section className="container mx-auto px-4 mb-24">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About <span className="text-primary">Momentum AI</span>
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                We act as your outsourced AI engineering department. We build, customize, and manage AI agents and automations that drive real business outcomes. 
              </p>
              <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-lg text-foreground/70">
                  To make enterprise AI implementation simple, reliable, and accessible for businesses of every size. We build human-like AI voice agents that drive real conversations, deliver outcomes, and scale customer interactions 24/7.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Meet the Founding Team</h2>
              <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                Building enterprise AI voice agents that automate customer conversations at scale.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center overflow-hidden border-4 border-background shadow-lg">
                    <img src={member.image} alt={member.name} className={member.imageClass || "w-full h-full object-cover"} />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-center mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/60 text-center mb-6">{member.focus}</p>
                  
                  <p className="text-foreground/80 mb-6 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {member.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-sm text-foreground/70">
                        <span className="text-primary mr-2">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs text-foreground/60 text-center flex items-center justify-center gap-2">
                      🎓 {member.education}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
