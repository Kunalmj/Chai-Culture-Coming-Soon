import { useState } from "react";
import { z } from "zod";
import { Mail, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email" });

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-3 animate-fade-in-up">
        <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
          <Check className="w-7 h-7 text-accent" />
        </div>
        <p className="font-elegant text-xl text-primary">You're on the list!</p>
        <p className="text-muted-foreground text-sm">
          We'll notify you when we launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Mail className="w-5 h-5" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder="Enter your email"
          className={cn(
            "w-full pl-12 pr-14 py-4 rounded-full",
            "bg-card border-2 border-border",
            "font-body text-foreground placeholder:text-muted-foreground",
            "focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20",
            "transition-all duration-300",
            error && "border-destructive focus:border-destructive focus:ring-destructive/20"
          )}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "w-10 h-10 rounded-full",
            "bg-primary text-primary-foreground",
            "flex items-center justify-center",
            "hover:bg-mahogany-light transition-colors duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "shadow-royal hover:shadow-gold"
          )}
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-destructive text-center animate-fade-in-up">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground text-center">
        Be the first to experience royal chai tradition
      </p>
    </form>
  );
};

export default EmailSignup;
