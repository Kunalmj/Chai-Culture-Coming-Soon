import { Instagram, Facebook, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className={cn(
            "w-10 h-10 rounded-full",
            "bg-card border border-border",
            "flex items-center justify-center",
            "text-muted-foreground hover:text-accent",
            "hover:border-accent hover:shadow-gold",
            "transition-all duration-300",
            "group"
          )}
        >
          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
