import { useTheme } from '../context/ThemeContext';

const DonationSection = () => {
  const { theme } = useTheme();

  // Theme-specific styles
  const themes = {
    light: {
      bg: 'bg-[linear-gradient(to_bottom,#ffffff_0%,#f9fafb_30%,#f3f4f6_100%)]',
      text: 'text-gray-800',
      accentText: 'from-blue-600 to-purple-600',
      cardBg: 'bg-white',
      cardBorder: 'border-gray-200',
      buttonPrimary: 'bg-blue-600 text-white',
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    },
    dark: {
      bg: 'bg-gradient-to-b from-[#0a0a0a] to-[#000000]',
      text: 'text-gray-100',
      accentText: 'from-blue-400 to-indigo-500',
      cardBg: 'bg-gray-800',
      cardBorder: 'border-gray-700',
      buttonPrimary: 'bg-blue-500 text-white',
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
    },
    synthwave: {
      bg: 'bg-gradient-to-bl from-[#2a0b3d] via-[#9D00FF] to-[#FF6B9E]',
      text: 'text-[#e2e8f0]',
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black'
    },
    neon: {
      bg: 'bg-gradient-to-b from-[#0F0520] via-[#003366] to-[#00F5FF]',
      text: 'text-[#e2e8f0]',
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'text-black bg-neon-gradient text-white',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black'
    },
  };

  const currentTheme = themes[theme] || themes.light;

  // Theme-aware button gradients
  const getButtonGradient = (level) => {
    if (theme === 'synthwave') {
      return {
        coffee: 'from-[#FF2D75] to-[#FF8C42]',
        supporter: 'from-[#9D00FF] to-[#FF2D75]',
        patron: 'from-[#00F5FF] to-[#9D00FF]'
      }[level];
    } else if (theme === 'neon') {
      return {
        coffee: 'from-[#FF2D75] to-[#FF8C42]',
        supporter: 'from-[#9D00FF] to-[#00F5FF]',
        patron: 'from-[#00F5FF] to-[#9D00FF]'
      }[level];
    } else {
      return {
        coffee: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
        supporter: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
        patron: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
      }[level];
    }
  };

  return (
    <section id="donate" className={`relative py-20 md:py-32 flex items-center justify-center overflow-hidden ${currentTheme.bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex flex-col items-center mb-20 animate-fade-in-up">
          <h2 className={`text-5xl lg:text-7xl font-bold ${currentTheme.text} mb-6 leading-tight animate-scale-in`}>
            Support AI Storytelling
          </h2>
          <p className={`text-xl lg:text-2xl ${currentTheme.text} mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-300`}>
            Help us continue creating immersive AI-generated stories and developing original characters.
            Your support keeps the creative process alive and accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Why Support */}
          <div className="space-y-6">
            {['AI Development', 'Story Creation', 'Free Access'].map((item, index) => (
              <div
                key={item}
                className={`${currentTheme.cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-slide-in-left ${index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : ''}`}
              >
                <h3 className={`text-xl font-semibold ${currentTheme.text} mb-3 flex items-center`}>
                  <span className="animate-bounce-gentle mr-2">
                    {index === 0 ? '🤖' : index === 1 ? '📚' : '🌐'}
                  </span>
                  {item}
                </h3>
                <p className={currentTheme.text.replace('text-', 'text-opacity-80 ')}>
                  {index === 0
                    ? 'Fund continued development of AI storytelling tools and character creation systems.'
                    : index === 1
                    ? 'Support the creation of new stories, characters, and immersive narrative experiences.'
                    : 'Keep all stories freely accessible while maintaining high-quality content creation.'}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Donation Options */}
          <div className={`${currentTheme.cardBg} rounded-2xl shadow-2xl p-8 animate-slide-in-right hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]`}>
            <h3 className={`text-2xl font-bold ${currentTheme.text} mb-6 text-center animate-scale-in delay-300`}>
              Choose Your Support Level
            </h3>

            <div className="space-y-4 mb-8">
              {['☕ Buy us a Coffee - $5', '📖 Story Supporter - $15', '🤖 AI Patron - $50'].map((item, index) => (
                <button
                  key={item}
                  className={`w-full bg-gradient-to-r ${getButtonGradient(index === 0 ? 'coffee' : index === 1 ? 'supporter' : 'patron')} text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in ${index === 0 ? 'delay-400' : index === 1 ? 'delay-500' : 'delay-700'} group`}
                >
                  <span className="group-hover:animate-bounce-gentle inline-block">
                    {item.split(' ')[0]}
                  </span> {item.split(' ').slice(1).join(' ')}
                </button>
              ))}
            </div>

            {/* Payment Platform Placeholders */}
            <div className={`border-t ${currentTheme.cardBorder.replace('border-', 'border-opacity-30 ')} pt-6 animate-fade-in delay-1000`}>
              <p className={`text-sm ${currentTheme.text.replace('text-', 'text-opacity-70 ')} text-center mb-4`}>
                Secure payment options:
              </p>
              <div className="flex justify-center space-x-4">
                {['PayPal', 'Stripe', 'Patreon'].map(platform => (
                  <div
                    key={platform}
                    className={`${currentTheme.cardBg.replace('bg-', 'bg-opacity-70 ')} px-4 py-2 rounded-lg text-sm ${currentTheme.text.replace('text-', 'text-opacity-80 ')} font-medium hover:bg-opacity-100 transition-all duration-300 transform hover:scale-105`}
                  >
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16 animate-fade-in-up delay-1000">
          <div className={`${currentTheme.cardBg} border-2 border-dashed ${currentTheme.cardBorder} rounded-lg p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02]`}>
            <p className={`${currentTheme.text.replace('text-', 'text-opacity-70 ')} font-medium`}>
              AdSense Advertisement Space
            </p>
            <p className={`${currentTheme.text.replace('text-', 'text-opacity-50 ')} text-sm mt-2`}>
              300x250 Medium Rectangle Ad Unit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;