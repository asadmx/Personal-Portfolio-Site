import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mali9182@mylaurier.ca",
      link: "mailto:mali9182@mylaurier.ca",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "647-561-4868",
      link: "tel:647-561-4868",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Milton, Ontario",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/asadmalik",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/asadmalik",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and interesting projects. Whether you have a
                question or just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 border-border bg-card hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-medium text-card-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-card-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links & CTA */}
            <Card className="p-8 border-border bg-card">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Connect With Me</h3>
              
              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all group"
                  >
                    <social.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-card-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                    <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Looking for a developer to bring your ideas to life? Let's collaborate!
                </p>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => window.location.href = "mailto:mali9182@mylaurier.ca"}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Me an Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
