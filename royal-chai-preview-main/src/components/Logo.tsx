import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <img src="/public/logo.svg"></img>
      
      {/* Brand Name */}
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-primary">
        Royal Chai
      </h1>
      
      {/* Decorative line */}
      <div className="flex items-center gap-3 mt-2">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent" />
        <div className="w-2 h-2 rotate-45 bg-accent" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-accent" />
      </div>
    </div>
  );
};

export default Logo;
