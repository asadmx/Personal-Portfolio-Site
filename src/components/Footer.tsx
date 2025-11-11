const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} Asad Malik. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
