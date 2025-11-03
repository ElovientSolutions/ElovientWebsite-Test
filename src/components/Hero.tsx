import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  // Animated particles background
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = windowSize.width;
    canvas.height = 600;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
      });
      
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 0.2 * (1 - distance / 100);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
  }, [windowSize]);

  // Animation variants for motion components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl" 
            variants={itemVariants}
          >
            <span className="block">Software Solutions and Digital Transformation Services aimed at</span>
            <span className="block">Business Growth</span>
          </motion.h1>
          
          <motion.h2
            className="mt-3 mx-auto text-xl sm:text-2xl md:mt-4 text-gray-600 whitespace-normal sm:whitespace-nowrap text-center"
            variants={itemVariants}
          >
            Digital Transformation | Enterprise Platforms | Custom Software Development
          </motion.h2>          
          <motion.p 
            className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            At Elovient Software Solutions, we architect and deliver systems that fit how your business actually works. We lead digital transformation by combining custom builds with smart integrations, delivering affordable enterprise software solutions and cloud based software solutions that are secure, reliable and built to scale. Expect clear KPIs, faster processes and measurable value across teams.
          </motion.p>
          
          <motion.div 
            className="mt-5 max-w-md mx-auto flex justify-center gap-4 md:mt-8"
            variants={itemVariants}
          >
            <Button asChild className="inline-flex items-center hover:scale-105 transition-transform">
              <Link to="/services">
                Explore Software Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="bg-[#f2f6fa] hover:scale-105 transition-transform hover:bg-[#f2f6fa] hover:text-inherit"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
          
          {/*
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-6"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-gray-500">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-gray-500">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-gray-500">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-gray-500">Client Satisfaction</div>
            </div>
          </motion.div>
          */}
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
