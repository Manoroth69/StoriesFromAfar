// Importuri - aici aducem componentele și funcționalitățile de care avem nevoie
import StoryCard from "./StoryCard"; // Importăm componenta StoryCard din același director
import { useTheme } from '../context/ThemeContext'; // Importăm hook-ul useTheme din Context API
import ThemeToggle from "./ThemeToggle"; // Importăm componenta pentru schimbarea temei
import MagneticLink from './MagneticLink'; // Importăm componenta pentru link-uri magnetice

// Definirea componentei funcționale StoriesSection
// În React, o componentă funcțională este o funcție JavaScript care returnează JSX
const StoriesSection = () => {
  // Hook-ul useTheme() accesează Context-ul pentru tema aplicației
  // Context API în React permite partajarea datelor între componente fără prop drilling
  const { theme } = useTheme(); // Destructurăm theme din obiectul returnat de useTheme

  // Obiect care conține stilurile pentru fiecare temă disponibilă
  // Folosim Tailwind CSS classes pentru stilizare
  const themes = {
    // Tema light (luminoasă) - stiluri pentru modul luminos
    light: {
      bg: 'bg-[radial-gradient(ellipse_at_top,_#f9f5ff_20%,_#e0e7ff_50%,_#d1f5ff_85%)]', // Gradient radial pentru fundal
      text: 'text-gray-800', // Culoarea textului
      accentText: 'from-blue-600 to-purple-600', // Gradient pentru text de accent
      cardBg: 'bg-white', // Fundalul cardurilor
      cardBorder: 'border-gray-200', // Culoarea bordurii cardurilor
      buttonPrimary: 'bg-blue-600 text-white', // Stilul butonului principal
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white', // Buton secundar cu hover
      loadButton: 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' // Gradient pentru butonul de încărcare
    },
    // Tema dark (întunecată) - stiluri pentru modul întunecat
    dark: {
      bg: 'bg-[radial-gradient(ellipse_at_top,_#070215_20%,_#12092E_50%,_#00244D_85%)]', // Gradient întunecat
      text: 'text-[#F0F0FF] backdrop-blur-[1px]', // Text deschis cu blur ușor
      accentText: 'from-blue-400 to-indigo-500', // Gradient mai deschis pentru text de accent
      cardBg: 'bg-gray-800', // Fundal întunecat pentru carduri
      cardBorder: 'border-gray-700', // Borduri întunecate
      buttonPrimary: 'bg-blue-500 text-white hover:shadow-[0_0_12px_-2px_rgba(0,245,255,0.3)]', // Buton cu shadow glow
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white',
      loadButton: 'from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
    },
    // Tema synthwave - inspirată din estetica anilor '80
    synthwave: {
      bg: 'bg-gradient-to-b from-[#120525] via-[#4a1b8c] to-[#FF2D75]', // Gradient vertical cu culori neon
      text: 'text-[#e2e8f0]', // Text deschis pentru contrast
      accentText: 'from-[#00F5FF] to-[#9D00FF]', // Gradient cyan-purple
      cardBg: 'bg-[#110033]/90', // Fundal semi-transparent pentru carduri
      cardBorder: 'border-[#9D00FF]/30', // Bordură purple cu transparență
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black', // Buton cu gradient neon
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
      loadButton: 'from-[#FF2D75] to-[#9D00FF] hover:from-[#FF2D75]/90 hover:to-[#9D00FF]/90',
      overlay: 'bg-[conic-gradient(at_top_right,#FF2D75_0%,transparent_60%)]', // Gradient conic pentru overlay
      border: 'border-[#FF2D75]/40', // Bordură semi-transparentă
      glow: 'shadow-[0_0_30px_-10px_#FF2D75]' // Efect de strălucire
    },
    // Tema neon - cu efecte de lumină neon
    neon: {
      bg: 'bg-[radial-gradient(ellipse_at_top,_#0F0520_30%,_#1A0A3A_60%,_#003366_90%)]',
      text: 'text-transparent bg-clip-text bg-[linear-gradient(90deg,#00F5FF_0%,#E0E0FF_100%)]', // Text transparent cu gradient ca background
      accentText: 'from-[#00F5FF] to-[#9D00FF]',
      cardBg: 'bg-[#110033]/90',
      cardBorder: 'border-[#9D00FF]/30',
      buttonPrimary: 'text-black bg-neon-gradient text-white',
      buttonSecondary: 'border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black',
      loadButton: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-black'
    },
  };

  // Selectarea temei curente cu fallback la tema light
  // Operator-ul || (OR logic) returnează prima valoare truthy
  const currentTheme = themes[theme] || themes.light;

  // Array cu datele pentru stories - în aplicații reale, acestea ar veni dintr-o bază de date sau API
  const stories = [
    {
      id: 1, // Identificator unique pentru fiecare story
      title: "The Sensory Web", // Titlul story-ului
      character: "Symbiothec", // Personajul principal
      excerpt: "In the depths of cyberspace, Symbiothec discovers a network of consciousness that challenges everything they know about reality and perception.", // Descriere scurtă
      readTime: "8 min read", // Timpul estimat de citire
      tags: ["Cyberpunk", "AI", "Philosophy"], // Tag-uri pentru categorizare
      featured: true // Boolean care indică dacă story-ul este featured
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

  // Return statement - returnează JSX-ul care va fi randat
  // JSX este o extensie de sintaxă JavaScript care permite scrierea de HTML în JavaScript
  return (
    // Element semantic <section> cu id pentru navigare și clase CSS pentru stilizare
    <section id="stories" className={`py-20 ${currentTheme.bg} transition-colors duration-300`}>
      {/*
        Template literals (backticks) permit interpolarea variabilelor în string-uri
        className combină clase fixe cu clase dinamice bazate pe temă
        transition-colors și duration-300 creează o tranziție smooth la schimbarea temei
      */}

      {/* Container principal cu padding responsive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          max-w-7xl = lățime maximă
          mx-auto = centrare orizontală cu margin auto
          px-4 sm:px-6 lg:px-8 = padding responsive (Tailwind breakpoints)
        */}

        {/* Header section cu titlu și descriere */}
        <div className="flex justify-between items-center mb-20">
          <div className="text-center w-full animate-fade-in-up">
            {/*
              Titlul principal cu tipografie responsivă
              text-4xl md:text-5xl = dimensiune text responsivă
              font-bold = greutatea fontului
              animate-scale-in = animație CSS custom
            */}
            <h2 className={`text-4xl md:text-5xl font-bold ${currentTheme.text} mb-6 animate-scale-in`}>
              AI-Crafted Stories
            </h2>

            {/* Paragraful descriptiv cu stilizare responsive */}
            <p className={`text-xl ${currentTheme.text} max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200`}>
              {/*
                leading-relaxed = line-height mai mare pentru lizibilitate
                delay-200 = întârziere pentru animație (200ms)
              */}
              Immerse yourself in original tales of advanced beings, technological wonders,
              and the intricate dance between consciousness and digital reality.
            </p>
          </div>
        </div>

        {/*
          Secțiune comentată pentru AdSense
          În React, comentariile JSX se scriu cu {/* *//*}
          Această secțiune este comentată pentru a nu fi randată
        */}
        {/* AdSense Placeholder
        <div className="mb-16 animate-fade-in delay-300">
          <div className={`${currentTheme.bg} border-2 border-dashed ${theme === 'light' ? 'border-gray-300' : 'border-slate-600'} rounded-lg p-8 text-center hover:border-blue-400 transition-all duration-300 transform hover:scale-[1.02]`}>
            <p className={`${currentTheme.text} font-medium`}>AdSense Advertisement Space</p>
            <p className={`${currentTheme.text} text-sm mt-2 opacity-70`}>728x90 Leaderboard Ad Unit</p>
          </div>
        </div> */}

        {/* Grid pentru afișarea cardurilor de stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*
            CSS Grid cu coloane responsive:
            - grid-cols-1: 1 coloană pe mobile
            - md:grid-cols-2: 2 coloane pe tablet
            - lg:grid-cols-3: 3 coloane pe desktop
            - gap-8: spațiu între elemente
          */}

          {/* Maparea array-ului stories pentru a crea carduri */}
          {stories.map((story, index) => (
            /*
              .map() este o metodă JavaScript care iterează prin array și returnează un nou array
              Pentru fiecare story, returnăm un JSX element
              key prop este obligatorie în React pentru elemente listate - ajută la performanță
            */
            <div
              key={story.id} // Key unique pentru fiecare element din listă
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }} // Stil inline pentru delay calculat dinamic
            >
              {/*
                style prop primește un obiect JavaScript cu proprietăți CSS
                Template literal pentru calcularea delay-ului bazat pe index
                Fiecare card va avea o întârziere crescătoare (0ms, 100ms, 200ms, etc.)
              */}

              {/* Componenta StoryCard primește story ca prop */}
              <StoryCard story={story} />
              {/*
                Props în React sunt argumentele transmise componentelor
                story={story} transmite obiectul story ca prop către StoryCard
              */}
            </div>
          ))}
        </div>

        {/* Butonul "Load More Stories" */}
        <div className="text-center mt-12 animate-fade-in-up delay-700">
          <button className={`bg-gradient-to-r ${themes[theme]?.buttonPrimary || themes.light.loadButton} text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-gentle`}>
            {/*
              Optional chaining operator (?.) verifică dacă themes[theme] există
              Dacă nu există, folosește fallback-ul themes.light.loadButton

              Clase CSS explicate:
              - bg-gradient-to-r: gradient de la stânga la dreapta
              - py-3 px-8: padding vertical 3, padding orizontal 8
              - rounded-full: borduri complet rotunjite
              - transform hover:scale-105: mărește butonul cu 5% la hover
              - shadow-lg hover:shadow-xl: umbră care se intensifică la hover
            */}
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

// Export default permite importarea componentei în alte fișiere
// În ES6 modules, fiecare fișier poate avea un export default
export default StoriesSection;

/*
TERMINOLOGIE REACT EXPLICATĂ:

1. COMPONENTE FUNCȚIONALE:
   - Funcții JavaScript care returnează JSX
   - Înlocuiesc componentele de clasă în React modern
   - Mai simple și mai ușor de testat

2. JSX (JavaScript XML):
   - Extensie de sintaxă care permite scrierea HTML în JavaScript
   - Se transpilează în apeluri React.createElement()
   - Permite interpolarea variabilelor cu {}

3. PROPS:
   - Argumentele transmise componentelor React
   - Sunt read-only (immutable)
   - Se accesează ca parametri ai funcției componentei

4. HOOKS:
   - Funcții care permit folosirea state-ului și altor funcționalități React
   - Încep întotdeauna cu "use" (useState, useEffect, useTheme)
   - Se pot folosi doar în componente funcționale

5. CONTEXT API:
   - Mecanism pentru partajarea datelor între componente
   - Evită "prop drilling" (transmiterea props-urilor prin multe nivele)
   - useTheme() este un custom hook care accesează Theme Context

6. STATE MANAGEMENT:
   - State-ul reprezintă datele care se pot schimba în timp
   - Când state-ul se schimbă, componenta se re-randează
   - Context API este folosit pentru state global

7. CONDITIONAL RENDERING:
   - Randarea condițională a elementelor JSX
   - Se folosesc operatori JavaScript (&&, ||, ?:)
   - Exemplu: themes[theme] || themes.light

8. EVENT HANDLING:
   - Gestionarea evenimentelor în React
   - Se folosesc funcții pentru a răspunde la acțiuni utilizatorului
   - Evenimentele sunt SyntheticEvents (wrapper peste evenimente native)

9. LIFECYCLE:
   - Ciclul de viață al componentelor React
   - Mounting, Updating, Unmounting
   - Se gestionează cu useEffect în componente funcționale

10. VIRTUAL DOM:
    - Reprezentare în memorie a DOM-ului real
    - React compară Virtual DOM cu DOM-ul real și face doar actualizările necesare
    - Optimizează performanța aplicației
*/