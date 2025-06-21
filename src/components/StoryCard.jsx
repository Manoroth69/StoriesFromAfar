import { useTheme } from '../context/ThemeContext';

const StoryCard = ({ story }) => {
  const { theme } = useTheme();

  const themes = {
    light: {
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      featuredBorder: 'ring-2 ring-blue-500',
      featuredBadge: 'bg-gradient-to-r from-blue-500 to-purple-600',
      characterBg: 'bg-blue-100',
      characterText: 'text-blue-600',
      titleText: 'text-gray-900 hover:text-blue-600',
      excerptText: 'text-gray-600',
      tagBg: 'bg-gray-100 hover:bg-gray-200',
      tagText: 'text-gray-500',
      button: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
      readTime: 'text-gray-500'
    },
    dark: {
      cardBg: 'bg-gray-800',
      cardBorder: 'border-gray-700',
      featuredBorder: 'ring-2 ring-blue-400',
      featuredBadge: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      characterBg: 'bg-blue-900/30',
      characterText: 'text-blue-400',
      titleText: 'text-white hover:text-blue-400',
      excerptText: 'text-gray-300',
      tagBg: 'bg-slate-700 hover:bg-slate-600',
      tagText: 'text-gray-400',
      button: 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
      readTime: 'text-gray-400'
    },
    synthwave: {
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      featuredBorder: 'ring-2 ring-[#9D00FF]',
      featuredBadge: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF]',
      characterBg: 'bg-[#9D00FF]/20',
      characterText: 'text-[#00F5FF]',
      titleText: 'text-white hover:text-[#00F5FF]',
      excerptText: 'text-[#e2e8f0]',
      tagBg: 'bg-[#9D00FF]/20 hover:bg-[#9D00FF]/30',
      tagText: 'text-[#00F5FF]',
      button: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] hover:from-[#FF2D75] hover:to-[#9D00FF]',
      readTime: 'text-[#00F5FF]/80'
    },
    neon: {
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      featuredBorder: 'ring-2 ring-[#00F5FF]',
      featuredBadge: 'bg-gradient-to-r from-[#00F5FF] to-[#9D00FF]',
      characterBg: 'bg-[#00F5FF]/20',
      characterText: 'text-[#00F5FF]',
      titleText: 'text-white hover:text-[#FF2D75]',
      excerptText: 'text-[#e2e8f0]',
      tagBg: 'bg-[#00F5FF]/20 hover:bg-[#00F5FF]/30',
      tagText: 'text-[#00F5FF]',
      button: 'bg-neon-gradient hover:bg-neon-gradient-hover',
      readTime: 'text-[#00F5FF]/80'
    }
  };

  const currentTheme = themes[theme] || themes.light;

  return (
    <div className={`${currentTheme.cardBg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden animate-fade-in ${story.featured ? currentTheme.featuredBorder : ''}`}>
      {story.featured && (
        <div className={`${currentTheme.featuredBadge} text-white text-center py-2 text-sm font-semibold animate-pulse`}>
          Featured Story
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm font-medium ${currentTheme.characterText} ${currentTheme.characterBg} px-3 py-1 rounded-full transition-colors duration-300`}>
            {story.character}
          </span>
          <span className={`text-sm ${currentTheme.readTime}`}>{story.readTime}</span>
        </div>

        <h3 className={`text-xl font-bold ${currentTheme.titleText} mb-3 leading-tight transition-colors duration-300 cursor-pointer`}>
          {story.title}
        </h3>

        <p className={`${currentTheme.excerptText} mb-4 leading-relaxed`}>
          {story.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {story.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs ${currentTheme.tagText} ${currentTheme.tagBg} px-2 py-1 rounded-md transition-colors duration-200`}
            >
              {tag}
            </span>
          ))}
        </div>

        <button className={`w-full ${currentTheme.button} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}>
          Read Story
        </button>
      </div>
    </div>
  );
};

export default StoryCard;