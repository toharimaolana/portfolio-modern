import React from 'react';

// CardSwap Component
const CardSwap = ({ 
    children, 
    width = 375, 
    height = 250, 
    cardDistance = 20, 
    verticalDistance = 20, 
    skewAmount = 2, 
    delay = 4000, 
    pauseOnHover = true 
  }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  
  const cards = React.Children.toArray(children);
  
  React.useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, delay);
    
    return () => clearInterval(interval);
  }, [cards.length, delay, isPaused]);
  
  return (
    <div 
      className="relative"
      style={{ width: `${width}px`, height: `${height + verticalDistance * 2}px` }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {cards.map((card, index) => {
        const position = (index - currentIndex + cards.length) % cards.length;
        const zIndex = cards.length - position;
        const translateY = position * verticalDistance;
        const translateX = position * cardDistance;
        const skew = position * skewAmount;
        const opacity = position === 0 ? 1 : 0.7 - (position * 0.2);
        
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: `${width}px`,
              height: `${height}px`,
              transform: `translateY(${translateY}px) translateX(${translateX}px) skewY(${skew}deg)`,
              zIndex,
              opacity: Math.max(opacity, 0.3),
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {card}
          </div>
        );
      })}
    </div>
  );
};

const Card = ({ children, customClass = '' }) => {
  return <div className={customClass}>{children}</div>;
};

// Services Data
const servicesData = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    ),
    title: "Web Development",
    description: "Pengembangan web modern, cepat, dan responsif dengan teknologi terkini.",
    gradient: "from-[#7338A0] to-[#924DBF]",
    glowColor: "rgba(115, 56, 160, 0.3)"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"></path>
      </svg>
    ),
    title: "UI/UX Design",
    description: "Desain antarmuka yang intuitif, memukau, dan berfokus pada pengalaman pengguna.",
    gradient: "from-[#924DBF] to-[#C77DFF]",
    glowColor: "rgba(146, 77, 191, 0.3)"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
      </svg>
    ),
    title: "Content Creator",
    description: "Pembuatan konten berkualitas tinggi untuk media sosial dan digital marketing.",
    gradient: "from-[#9E72C3] to-[#7338A0]",
    glowColor: "rgba(158, 114, 195, 0.3)"
  }
];

const ServicesSection = () => {
  return (
    <section className="w-full relative min-h-screen flex items-center justify-center  px-4 overflow-hidden bg-[#060010]">

      {/* Main Container Card - 1000px x 400px */}
      <div className="relative w-full max-w-[1000px] h-auto lg:h-[380px]">
        {/* Outer Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#7338A0] via-[#924DBF] to-[#C77DFF] rounded-3xl opacity-20 blur-2xl"></div>
        
        {/* Main Card Container */}
        <div className="relative bg-[#060010]/90 backdrop-blur-xl border border-border-highlight/30 rounded-3xl shadow-2xl overflow-hidden">
          {/* Inner Glow Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7338A0]/10 via-transparent to-[#C77DFF]/10 pointer-events-none"></div>
          
          
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center h-full p-8 lg:p-12 gap-10 lg:gap-12">
            
            {/* Left Column: Typography */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A2574]/40 border border-[#9E72C3]/40 backdrop-blur-sm shadow-lg shadow-[#7338A0]/20">
                <div className="w-2 h-2 rounded-full bg-[#C77DFF] animate-pulse"></div>
                <span className="text-[#EDE9FE] text-xs font-medium tracking-wide">TRUSTED WORLDWIDE</span>
              </div>
              
              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EDE9FE] via-[#C77DFF] to-[#924DBF] leading-tight">
                  Our Services
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-[#7338A0] to-[#C77DFF] rounded-full"></div>
              </div>
              
              {/* Description */}
              <p className="text-sm lg:text-base text-[#A6A6A6] leading-relaxed">
                We craft cutting-edge digital solutions, from modern web applications to stunning visual designs that drive measurable results.
              </p>
              
              {/* Stats Row */}
              <div className="flex gap-6 pt-2">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#924DBF]">50+</div>
                  <div className="text-xs text-[#A6A6A6]">Projects</div>
                </div>
                <div className="w-px bg-[#9E72C3]/30"></div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#924DBF]">30+</div>
                  <div className="text-xs text-[#A6A6A6]">Clients</div>
                </div>
                <div className="w-px bg-[#9E72C3]/30"></div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C77DFF] to-[#924DBF]">100%</div>
                  <div className="text-xs text-[#A6A6A6]">Satisfied</div>
                </div>
              </div>
              
              {/* CTA Button */}
              <button className="group relative px-6 py-3 bg-gradient-to-r from-[#7338A0] to-[#924DBF] rounded-full text-[#EDE9FE] text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#7338A0]/50 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#924DBF] to-[#C77DFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Right Column: CardSwap */}
            <div className="w-full lg:w-3/5 flex items-center justify-center">
              <div className="relative">
                {/* Card Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#7338A0]/10 to-[#C77DFF]/10 blur-3xl rounded-full scale-125"></div>
                
                <CardSwap
                  width={340}
                  height={220}
                  cardDistance={12}
                  verticalDistance={20}
                  skewAmount={1}
                  delay={4000}
                  pauseOnHover={true}
                >
                  {servicesData.map((service, index) => (
                    <Card 
                      key={index} 
                      customClass="group relative bg-[#4A2574]/30 backdrop-blur-xl border border-[#9E72C3]/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#C77DFF]/60 hover:shadow-xl"
                    >
                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Outer Glow on Hover */}
                      <div 
                        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
                        style={{ background: service.glowColor }}
                      ></div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-6 space-y-3 h-full flex flex-col">
                        {/* Icon */}
                        <div className={`inline-flex w-fit p-2.5 rounded-xl bg-gradient-to-br ${service.gradient} text-[#EDE9FE] shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                          {service.icon}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#EDE9FE] transition-colors duration-300 group-hover:text-[#C77DFF]">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-[#A6A6A6] leading-relaxed text-xs flex-grow">
                          {service.description}
                        </p>
                        
                        {/* Bottom Indicator */}
                        <div className="flex items-center gap-2 pt-2">
                          <div className={`h-0.5 w-0 bg-gradient-to-r ${service.gradient} rounded-full transition-all duration-500 group-hover:w-full`}></div>
                          <svg className="w-4 h-4 text-[#9E72C3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Bottom Accent Line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-40`}></div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;