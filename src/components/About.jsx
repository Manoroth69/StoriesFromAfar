import { Brain, Zap, BookOpen, Users } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  // Enhanced theme-specific styles with subtle differentiations
  const themes = {
    light: {
      bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-100',
      text: 'text-gray-800',
      secondaryText: 'text-gray-600',
      accentText: 'from-blue-600 to-purple-600',
      featureBg: 'bg-white',
      featureBorder: 'border-gray-200 hover:border-blue-200',
      buttonPrimary: 'bg-blue-600 text-white hover:bg-blue-700',
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      missionBg: 'from-blue-900 to-purple-900',
      missionText: 'text-white',
      missionSecondaryText: 'text-blue-100',
      waveColor: 'text-gray-50',
      cardHover: 'hover:shadow-blue-100'
    },
    dark: {
      bg: 'bg-gradient-to-b from-[#0a0a0a] to-[#000000]',
      text: 'text-gray-100',
      secondaryText: 'text-gray-300',
      accentText: 'from-blue-400 to-indigo-500',
      featureBg: 'bg-gray-800 hover:bg-gray-750',
      featureBorder: 'border-gray-700 hover:border-blue-500/30',
      buttonPrimary: 'bg-blue-500 text-white hover:bg-blue-600',
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white',
      missionBg: 'from-gray-800 to-gray-700',
      missionText: 'text-white',
      missionSecondaryText: 'text-gray-300',
      waveColor: 'text-black-100',
      cardHover: 'hover:shadow-blue-900/20'
    },
    synthwave: {
      bg: 'bg-gradient-to-b from-[#1a0630] via-[#5a1d9a] to-[#FF4D88]',
      text: 'text-[#e2e8f0]',
      secondaryText: 'text-[#e2e8f0]/80',
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      featureBg: 'bg-[#110033]/90 hover:bg-[#110033]',
      featureBorder: 'border-[#9D00FF]/30 hover:border-[#00F5FF]/50',
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black hover:from-[#FF2D90] hover:to-[#9D00FF]',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
      missionBg: 'from-[#110033] to-[#220066]',
      missionText: 'text-white',
      missionSecondaryText: 'text-[#e2e8f0]/80',
      waveColor: 'text-[#2a0b3d]',
      cardHover: 'hover:shadow-[#9D00FF]/30',
      overlay: 'bg-[radial-gradient(ellipse_at_center,#9D00FF_0%,transparent_70%)]',
    border: 'border-[#FF4D88]/40',
    glow: 'shadow-[0_0_30px_-10px_#9D00FF]'
    },
    neon: {
      bg: 'bg-gradient-to-b from-[#0F0520] via-[#003366] to-[#00F5FF]',
      text: 'text-[#e2e8f0]',
      secondaryText: 'text-[#e2e8f0]/80',
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      featureBg: 'bg-[#110033]/90 hover:bg-[#110033]',
      featureBorder: 'border-[#9D00FF]/30 hover:border-[#00F5FF]',
      buttonPrimary: 'bg-neon-gradient text-white hover:brightness-110',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
      missionBg: 'from-[#110033] to-[#220066]',
      missionText: 'text-white',
      missionSecondaryText: 'text-[#e2e8f0]/80',
      waveColor: 'text-[#0F0520]',
      cardHover: 'hover:shadow-[#00F5FF]/20'
    }
  };

  const currentTheme = themes[theme] || themes.light;

  const features = [
    {
      icon: Brain,
      title: "AI-Crafted Stories",
      description: "Advanced AI creates immersive narratives featuring unique characters and worlds."
    },
    {
      icon: Zap,
      title: "Original Characters",
      description: "Meet Symbiothec and other original AI-created beings with extraordinary abilities."
    },
    {
      icon: BookOpen,
      title: "Diverse Genres",
      description: "From sci-fi adventures to technological thrillers, explore stories across genres."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Support independent storytelling and help us create more amazing content."
    }
  ];

  return (
    <section id="about" className={`relative py-20 md:py-32 flex items-center justify-center overflow-hidden ${currentTheme.bg}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className={`text-4xl lg:text-5xl font-bold ${currentTheme.text} mb-6 animate-scale-in`}>
            About AI Stories
          </h2>
          <p className={`text-xl ${currentTheme.secondaryText} max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200`}>
            Welcome to the future of storytelling, where artificial intelligence meets human creativity
            to craft extraordinary narratives featuring original characters in immersive worlds.
          </p>
        </div>

        {/* Enhanced Feature Cards with Smoother Transitions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl ${currentTheme.featureBg} border ${currentTheme.featureBorder} transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group ${currentTheme.cardHover}`}
              style={{
                animationDelay: `${index * 150}ms`,
                transitionProperty: 'transform, box-shadow, border-color, background-color',
                willChange: 'transform, box-shadow, border-color, background-color'
              }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${currentTheme.accentText} rounded-full flex items-center justify-center transition-all duration-500 group-hover:animate-bounce-gentle group-hover:shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white transform transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className={`text-xl font-semibold ${currentTheme.text} mb-3 transition-colors duration-500 ${
                theme === 'synthwave' ? 'group-hover:text-[#00F5FF]' :
                theme === 'neon' ? 'group-hover:text-[#00F5FF]' :
                'group-hover:text-blue-600 dark:group-hover:text-blue-400'
              }`}>
                {feature.title}
              </h3>
              <p className={`${currentTheme.secondaryText} leading-relaxed transition-colors duration-500 ${
                theme === 'synthwave' ? 'group-hover:text-[#e2e8f0]' :
                theme === 'neon' ? 'group-hover:text-[#e2e8f0]' :
                'group-hover:text-gray-800 dark:group-hover:text-gray-200'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enhanced Mission Section */}
        <div
          className={`bg-gradient-to-r ${currentTheme.missionBg} rounded-3xl p-12 text-center animate-fade-in-up delay-700 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform hover:scale-[1.02] ${theme === 'synthwave' ? 'hover:shadow-[0_20px_50px_rgba(157,0,255,0.3)]' : 'hover:shadow-xl'}`}
          style={{
            willChange: 'transform, box-shadow'
          }}
        >
          <h3 className={`text-3xl font-bold ${currentTheme.missionText} mb-6 animate-scale-in delay-1000`}>
            Our Mission
          </h3>
          <p className={`text-xl ${currentTheme.missionSecondaryText} max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in delay-1000`}>
            We believe in the power of AI to enhance human creativity, not replace it. Our stories are
            crafted by advanced AI and carefully curated to bring you the most engaging, thought-provoking
            narratives. Each character is unique, each world is original, and each story is designed to
            transport you to extraordinary places.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right delay-1000">
            <a
              href="#stories"
              className={`${currentTheme.buttonPrimary} font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform hover:scale-105 hover:shadow-lg`}
              style={{
                willChange: 'transform, box-shadow'
              }}
            >
              Start Reading
            </a>
            <a
              href="#donate"
              className={`border-2 ${currentTheme.buttonSecondary} font-semibold py-3 px-8 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] transform hover:scale-105 animate-bounce-gentle delay-200`}
              style={{
                willChange: 'transform, box-shadow, background-color, color'
              }}
            >
              Support Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;