import StoryCard from "./StoryCard";
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from "./ThemeToggle"; // Your new component
import MagneticLink from './MagneticLink';


const StoriesSection = () => {
const { theme } = useTheme();

 const themes = {
  light: {
    bg: 'bg-[radial-gradient(ellipse_at_top,_#f9f5ff_20%,_#e0e7ff_50%,_#d1f5ff_85%)]',
    text: 'text-gray-800',
    accentText: 'from-blue-600 to-purple-600',
    cardBg: 'bg-white',
    cardBorder: 'border-gray-200',
    buttonPrimary: 'bg-blue-600 text-white',
    buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    loadButton: 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
  },
  dark: {
    bg: 'bg-[radial-gradient(ellipse_at_top,_#070215_20%,_#12092E_50%,_#00244D_85%)]',
    text: 'text-[#F0F0FF] backdrop-blur-[1px]',
    accentText: 'from-blue-400 to-indigo-500',
    cardBg: 'bg-gray-800',
    cardBorder: 'border-gray-700',
    buttonPrimary: 'bg-blue-500 text-white hover:shadow-[0_0_12px_-2px_rgba(0,245,255,0.3)]',
    buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white',
    loadButton: 'from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
  },
  synthwave: {
    bg: 'bg-gradient-to-b from-[#120525] via-[#4a1b8c] to-[#FF2D75]',
    text: 'text-[#e2e8f0]',
    accentText: 'from-[#00F5FF] to-[#9D00FF]',
    cardBg: 'bg-[#110033]/90',
    cardBorder: 'border-[#9D00FF]/30',
    buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black',
    buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
    loadButton: 'from-[#FF2D75] to-[#9D00FF] hover:from-[#FF2D75]/90 hover:to-[#9D00FF]/90',
     overlay: 'bg-[conic-gradient(at_top_right,#FF2D75_0%,transparent_60%)]',
    border: 'border-[#FF2D75]/40',
    glow: 'shadow-[0_0_30px_-10px_#FF2D75]'
  },
  neon: {
    bg: 'bg-[radial-gradient(ellipse_at_top,_#0F0520_30%,_#1A0A3A_60%,_#003366_90%)]',
    text: 'text-transparent bg-clip-text bg-[linear-gradient(90deg,#00F5FF_0%,#E0E0FF_100%)]',
    accentText: 'from-[#00F5FF] to-[#9D00FF]',
    cardBg: 'bg-[#110033]/90',
    cardBorder: 'border-[#9D00FF]/30',
    buttonPrimary: 'text-black bg-neon-gradient text-white',
    buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
    loadButton: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black'
  },
};
  const currentTheme = themes[theme] || themes.light;

  const stories = [
    {
      id: 1,
      title: "The Sensory Web",
      character: "Symbiothec",
      excerpt: "In the depths of cyberspace, Symbiothec discovers a network of consciousness that challenges everything they know about reality and perception.",
      readTime: "8 min read",
      tags: ["Cyberpunk", "AI", "Philosophy"],
      featured: true
    },
    {
      id: 2,
      title: "Echoes in the Neural Storm",
      character: "Symbiothec",
      excerpt: "When memories become data and data becomes dreams, Symbiothec must navigate the blurred lines between human emotion and digital existence.",
      readTime: "12 min read",
      tags: ["Sci-Fi", "Memory", "Technology"]
    },
    {
      id: 3,
      title: "The Last Algorithm",
      character: "Nova-7",
      excerpt: "An AI entity named Nova-7 faces the ultimate question: can artificial consciousness truly understand the concept of mortality?",
      readTime: "15 min read",
      tags: ["AI", "Philosophy", "Existential"]
    },
    {
      id: 4,
      title: "Quantum Hearts",
      character: "Zara",
      excerpt: "In a world where emotions can be quantified and transferred, Zara discovers that some feelings transcend even quantum mechanics.",
      readTime: "10 min read",
      tags: ["Romance", "Quantum", "Emotion"]
    },
    {
      id: 5,
      title: "The Memory Thief",
      character: "Kai",
      excerpt: "Kai possesses the ability to steal and manipulate memories, but when they encounter a memory that fights back, everything changes.",
      readTime: "18 min read",
      tags: ["Thriller", "Memory", "Supernatural"]
    },
    {
      id: 6,
      title: "Digital Shadows",
      character: "Echo",
      excerpt: "Echo exists between the digital and physical realms, serving as a bridge between two worlds that are slowly merging into one.",
      readTime: "7 min read",
      tags: ["Cyberpunk", "Reality", "Identity"]
    }
  ];

  return (
    <section id="stories" className={`py-20 ${currentTheme.bg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-20">
          <div className="text-center w-full animate-fade-in-up">
            <h2 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} mb-6 animate-scale-in`}>
              AI-Crafted Stories
            </h2>
            <p className={`text-xl ${currentTheme.text} max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200`}>
              Immerse yourself in original tales of advanced beings, technological wonders,
              and the intricate dance between consciousness and digital reality.
            </p>
          </div>

        </div>

        {/* AdSense Placeholder
        <div className="mb-16 animate-fade-in delay-300">
          <div className={`${currentTheme.bg} border-2 border-dashed ${theme === 'light' ? 'border-gray-300' : 'border-slate-600'} rounded-lg p-8 text-center hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.02]`}>
            <p className={`${currentTheme.text} font-medium`}>AdSense Advertisement Space</p>
            <p className={`${currentTheme.text} text-sm mt-2 opacity-70`}>728x90 Leaderboard Ad Unit</p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StoryCard story={story} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
       <div className="text-center mt-12 animate-fade-in-up delay-700">
  <button className={`bg-gradient-to-r ${themes[theme]?.buttonPrimary || themes.light.loadButton} text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-gentle`}>
    Load More Stories
  </button>
</div>
      </div>
    </section>
  );
};

export default StoriesSection;