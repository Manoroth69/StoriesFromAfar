// Importăm hook-ul useTheme pentru a accesa tema curentă (light, dark, synthwave, neon)
// useTheme este un custom hook care ne permite să folosim sistemul de teme global
import { useTheme } from '../context/ThemeContext';

/**
 * Componenta funcțională DonationSection
 * Afișează o secțiune de donații cu:
 * - Explicații despre beneficiile donațiilor
 * - Butoane pentru diferite niveluri de donații
 * - Opțiuni de plată
 * - Spațiu pentru reclame (AdSense)
 */
const DonationSection = () => {
  // Extragem valoarea 'theme' din contextul global al aplicației
  // theme poate fi: 'light', 'dark', 'synthwave' sau 'neon'
  const { theme } = useTheme();

  /**
   * Obiectul themes - definește stilurile specifice pentru fiecare temă
   * Fiecare temă are următoarele proprietăți:
   * - bg: fundalul principal al secțiunii (gradient/culoare)
   * - text: culoarea textului principal
   * - accentText: gradient pentru elementele accentuate
   * - cardBg: fundalul cardurilor
   * - cardBorder: culoarea border-ului cardurilor
   * - buttonPrimary: stilul butoanelor primare
   * - buttonSecondary: stilul butoanelor secundare
   */
  const themes = {
    // Tema light - culori deschise
    light: {
      bg: 'bg-[linear-gradient(to_bottom,#ffffff_0%,#f9fafb_30%,#f3f4f6_100%)]', // Gradient linear
      text: 'text-gray-800', // Text gri închis
      accentText: 'from-blue-600 to-purple-600', // Gradient albastru-purpuriu
      cardBg: 'bg-white', // Fundal carduri alb
      cardBorder: 'border-gray-200', // Border gri deschis
      buttonPrimary: 'bg-blue-600 text-white', // Buton albastru închis
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' // Buton outline albastru
    },
    // Tema dark - culori închise
    dark: {
      bg: 'bg-gradient-to-b from-[#0a0a0a] to-[#000000]', // Gradient negru
      text: 'text-gray-100', // Text gri deschis
      accentText: 'from-blue-400 to-indigo-500', // Gradient albastru-indigo
      cardBg: 'bg-gray-800', // Fundal carduri gri închis
      cardBorder: 'border-gray-700', // Border gri mediu
      buttonPrimary: 'bg-blue-500 text-white', // Buton albastru
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' // Buton outline albastru
    },
    // Tema synthwave - stil retro futurist
    synthwave: {
      bg: 'bg-gradient-to-bl from-[#2a0b3d] via-[#9D00FF] to-[#FF6B9E]', // Gradient violet-roz
      text: 'text-[#e2e8f0]', // Text alb cu nuanță albastră
      accentText: 'from-[#00F5FF] to-[#9D00FF]', // Gradient turcoaz-purpuriu
      cardBg: 'bg-[#110033]/90', // Fundal carduri albastru închis cu opacitate
      cardBorder: 'border-[#9D00FF]/30', // Border purpuriu cu opacitate
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black', // Gradient roz-purpuriu
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black' // Buton outline turcoaz
    },
    // Tema neon - culori fluorescente
    neon: {
      bg: 'bg-gradient-to-b from-[#0F0520] via-[#003366] to-[#00F5FF]', // Gradient albastru-turcoaz
      text: 'text-[#e2e8f0]', // Text alb cu nuanță albastră
      accentText: 'from-[#00F5FF] to-[#9D00FF]', // Gradient turcoaz-purpuriu
      cardBg: 'bg-[#110033]/90', // Fundal carduri albastru închis cu opacitate
      cardBorder: 'border-[#9D00FF]/30', // Border purpuriu cu opacitate
      buttonPrimary: 'text-black bg-neon-gradient text-white', // Gradient neon (definit în CSS global)
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black' // Buton outline turcoaz
    },
  };

  // Selectăm stilurile în funcție de tema actuală sau fallback pe light
  // Dacă tema nu există în obiectul themes, folosim tema light
  const currentTheme = themes[theme] || themes.light;

  /**
   * Funcție helper ce returnează gradientul potrivit pentru butoane
   * în funcție de nivelul de donație și de tema curentă
   * @param {string} level - Nivelul de donație ('coffee', 'supporter', 'patron')
   * @returns {string} - Clasele Tailwind pentru gradient
   */
  const getButtonGradient = (level) => {
    // Pentru tema synthwave
    if (theme === 'synthwave') {
      return {
        coffee: 'from-[#FF2D75] to-[#FF8C42]', // Roz-portocaliu
        supporter: 'from-[#9D00FF] to-[#FF2D75]', // Purpuriu-roz
        patron: 'from-[#00F5FF] to-[#9D00FF]' // Turcoaz-purpuriu
      }[level];
    }
    // Pentru tema neon
    else if (theme === 'neon') {
      return {
        coffee: 'from-[#FF2D75] to-[#FF8C42]', // Roz-portocaliu
        supporter: 'from-[#9D00FF] to-[#00F5FF]', // Purpuriu-turcoaz
        patron: 'from-[#00F5FF] to-[#9D00FF]' // Turcoaz-purpuriu
      }[level];
    }
    // Pentru alte teme (light/dark)
    else {
      return {
        coffee: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700', // Verde
        supporter: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700', // Albastru
        patron: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700' // Purpuriu
      }[level];
    }
  };

  // Returnăm JSX-ul – structura componentei
  return (
    // Secțiunea principală
    // Clase dinamice pentru fundal bazate pe tema curentă
    <section id="donate" className={`relative py-20 md:py-32 flex items-center justify-center overflow-hidden ${currentTheme.bg}`}>
      {/* Container principal cu max-width și padding responsiv */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Titlu și subtitlu – introducerea secțiunii de donații */}
        <div className="text-center flex flex-col items-center mb-20 animate-fade-in-up">
          {/* Titlul principal */}
          <h2 className={`text-5xl lg:text-7xl font-bold ${currentTheme.text} mb-6 leading-tight animate-scale-in`}>
            Support AI Storytelling
          </h2>
          {/* Descrierea */}
          <p className={`text-xl lg:text-2xl ${currentTheme.text} mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in delay-300`}>
            Help us continue creating immersive AI-generated stories and developing original characters.
          </p>
        </div>

        {/* Grid layout pentru conținut (2 coloane pe desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Coloana stângă: Motive pentru donații */}
          <div className="space-y-6">
            {/* Mapăm prin array-ul de motive */}
            {['AI Development', 'Story Creation', 'Free Access'].map((item, index) => (
              <div
                key={item} // Cheie unică pentru fiecare element
                // Clase dinamice pentru cardurile cu motive
                className={`${currentTheme.cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-slide-in-left ${index === 1 ? 'delay-200' : index === 2 ? 'delay-400' : ''}`}
              >
                {/* Titlul motivului */}
                <h3 className={`text-xl font-semibold ${currentTheme.text} mb-3 flex items-center`}>
                  {/* Emoji animat */}
                  <span className="animate-bounce-gentle mr-2">
                    {index === 0 ? '🤖' : index === 1 ? '📚' : '🌐'}
                  </span>
                  {item}
                </h3>
                {/* Descrierea motivului */}
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

          {/* Coloana dreaptă: Card cu butoane de donație */}
          <div className={`${currentTheme.cardBg} rounded-2xl shadow-2xl p-8 animate-slide-in-right hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]`}>
            {/* Titlul cardului */}
            <h3 className={`text-2xl font-bold ${currentTheme.text} mb-6 text-center animate-scale-in delay-300`}>
              Choose Your Support Level
            </h3>

            {/* Container pentru butoanele de donație */}
            <div className="space-y-4 mb-8">
              {/* Mapăm prin array-ul de niveluri de donație */}
              {['☕ Buy us a Coffee - $5', '📖 Story Supporter - $15', '🤖 AI Patron - $50'].map((item, index) => (
                <button
                  key={item} // Cheie unică
                  // Clase dinamice pentru butoane bazate pe nivel și temă
                  className={`w-full bg-gradient-to-r ${getButtonGradient(index === 0 ? 'coffee' : index === 1 ? 'supporter' : 'patron')} text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in ${index === 0 ? 'delay-400' : index === 1 ? 'delay-500' : 'delay-700'} group`}
                >
                  {/* Textul butonului cu animație la hover */}
                  <span className="group-hover:animate-bounce-gentle inline-block">
                    {item.split(' ')[0]} // Partea cu emoji
                  </span> {item.split(' ').slice(1).join(' ')} // Restul textului
                </button>
              ))}
            </div>

            {/* Secțiunea pentru opțiuni de plată */}
            <div className={`border-t ${currentTheme.cardBorder.replace('border-', 'border-opacity-30 ')} pt-6 animate-fade-in delay-1000`}>
              <p className={`text-sm ${currentTheme.text.replace('text-', 'text-opacity-70 ')} text-center mb-4`}>
                Secure payment options:
              </p>
              {/* Lista platformelor de plată */}
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

        {/* Placeholder pentru AdSense – spațiu publicitar */}
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