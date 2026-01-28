import { Sparkles } from "lucide-react";

const LaunchingBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
      <Sparkles className="w-4 h-4 text-accent animate-pulse" />
      <span className="font-elegant text-sm tracking-wider text-accent uppercase">
        Coming Soon
      </span>
    </div>
  );
};

export default LaunchingBadge;
