import { Sparkles } from "lucide-react";

const SparkleIcon = ({ className = "" }: { className?: string }) => (
  <Sparkles className={`w-4 h-4 text-gold animate-sparkle ${className}`} />
);

export default SparkleIcon;
