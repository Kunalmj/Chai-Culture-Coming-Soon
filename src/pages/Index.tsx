import Logo from "@/components/Logo";
import EmailSignup from "@/components/EmailSignup";
import SocialLinks from "@/components/SocialLinks";
import LaunchingBadge from "@/components/LaunchingBadge";
import DecorativeElements from "@/components/DecorativeElements";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-gradient-warm pattern-royal overflow-hidden">
      {/* Decorative background elements */}
      <DecorativeElements />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center">
          {/* Launching Badge */}
          <div className="opacity-0 animate-fade-in-up">
            <LaunchingBadge />
          </div>

          {/* Logo */}
          <div className="mt-8 opacity-0 animate-fade-in-up animation-delay-200">
            <Logo />
          </div>

          {/* Tagline */}
          <h2 className="mt-6 font-elegant text-xl md:text-2xl text-accent italic opacity-0 animate-fade-in-up animation-delay-400">
            "Brew the Royal Tradition"
          </h2>

          {/* Brand Description */}
          <p className="mt-6 font-body text-muted-foreground leading-relaxed max-w-md opacity-0 animate-fade-in-up animation-delay-600">
            Discover our premium instant chai premix, crafted with recipes 
            passed down through generations of royal Indian households. 
            Each cup brings you the authentic taste of tradition.
          </p>

          {/* Email Signup */}
          <div className="mt-10 w-full opacity-0 animate-fade-in-up animation-delay-800">
            <EmailSignup />
          </div>

          {/* Social Links */}
          <div className="mt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
            <SocialLinks />
          </div>

          {/* Footer note */}
          <p className="mt-12 text-xs text-muted-foreground/60 font-body">
            © 2026 Royal Chai. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
