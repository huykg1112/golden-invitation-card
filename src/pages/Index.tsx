import { useState, useEffect, useRef } from "react";
import graduatePhoto from "@/assets/TranHoangHuy.jpg";
import SparkleIcon from "@/components/SparkleIcon";
import CountdownTimer from "@/components/CountdownTimer";

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const AnimatedSection = ({
  children,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) => {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-fade-in-up ${delay}` : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-lg mx-auto">
        {/* Card */}
        <div className="bg-popover rounded-lg shadow-[0_8px_40px_-12px_hsl(var(--gold)/0.15)] px-6 sm:px-12 py-12 sm:py-16 space-y-10">
          
          {/* Top Decoration */}
          <AnimatedSection className="text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px w-12 bg-border" />
              <p className="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Thân mời bạn đến tham dự
              </p>
              <div className="h-px w-12 bg-border" />
            </div>
          </AnimatedSection>

          {/* Main Title */}
          <AnimatedSection className="text-center space-y-2" delay="animation-delay-200">
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold tracking-[0.08em] uppercase text-foreground">
              Lễ Tốt Nghiệp
            </h1>
            <p className="font-script text-3xl sm:text-4xl text-gold">
              của Trần Huy
            </p>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection className="relative flex justify-center" delay="animation-delay-400">
            <SparkleIcon className="absolute -top-2 -right-2 sm:right-4" />
            <SparkleIcon className="absolute -bottom-2 -left-2 sm:left-4 animation-delay-600" />
            <img
              src={graduatePhoto}
              alt="Trần Huy trong ảnh tốt nghiệp"
              className="w-64 h-72 sm:w-72 sm:h-80 object-cover object-top rounded-lg shadow-[0_6px_24px_-6px_hsl(var(--foreground)/0.12)] transition-transform duration-500 hover:scale-[1.03]"
            />
          </AnimatedSection>

          {/* Event Info */}
          <AnimatedSection delay="animation-delay-600">
            <div className="flex text-center">
              <div className="flex-1 space-y-1.5">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Chủ Nhật
                </p>
                <p className="font-playfair text-lg sm:text-xl font-semibold text-foreground">
                  19.04.2026
                </p>
                <p className="font-body text-sm text-muted-foreground">15:00</p>
              </div>
              <div className="w-px bg-border" />
              <div className="flex-1 space-y-1.5">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Hội Trường Rùa
                </p>
                <p className="font-playfair text-lg sm:text-xl font-semibold text-foreground">
                  Tại Đại Học
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Cần Thơ
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-border" />
            <SparkleIcon />
            <div className="h-px w-16 bg-border" />
          </div>

          {/* Countdown */}
          <AnimatedSection delay="animation-delay-800">
            <CountdownTimer />
          </AnimatedSection>

          {/* RSVP */}
          <AnimatedSection className="text-center" delay="animation-delay-1000">
            <a
              href="tel:+84334114244"
              className="font-body text-xs sm:text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Xác nhận tham dự với{" "}
              <span className="text-gold font-medium">Huy</span>{" "}
              <span className="text-gold font-medium">+84 334 114 244</span>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Index;
