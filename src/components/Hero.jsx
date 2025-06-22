// IMPORTURI - Aducem toate dependențele necesare pentru componentă
// useState este un Hook fundamental React pentru gestionarea stării locale
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SymbiotechSlideImg from '../assets/SymbiotechSlideImg.jpg'; // adjust path if needed

// Iconițele pentru navigarea slider-ului din biblioteca lucide-react
// ChevronLeft și ChevronRight sunt componente SVG pre-construite
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Hook-ul custom pentru accesarea Context-ului temei aplicației
import { useTheme } from '../context/ThemeContext';

// Componente auxiliare pentru funcționalități suplimentare
import ThemeToggle from "./ThemeToggle"; // Buton pentru schimbarea temei
import MagneticLink from './MagneticLink'; // Link cu efect magnetic la hover

// DEFINIREA COMPONENTEI FUNCȚIONALE HERO
// Aceasta este componenta principală care afișează secțiunea hero a site-ului
const Hero = () => {
  const { theme, themeConfig } = useTheme();
  // HOOK-URI REACT

  // Destructuring pentru a extrage tema curentă din Context
  // useTheme() returnează un obiect, din care extragem proprietatea 'theme'


  // useState Hook pentru gestionarea stării locale a slide-ului activ
  // currentSlide = valoarea curentă (inițial 0)
  // setCurrentSlide = funcția pentru actualizarea valorii
  const [currentSlide, setCurrentSlide] = useState(0);

  // CONFIGURAȚIA TEMELOR
  // Obiect care definește stilurile pentru fiecare temă disponibilă
  // Folosim Tailwind CSS classes și culori custom cu notația []




  const themes = {
    // TEMA LIGHT - Stiluri pentru modul luminos
    light: {
      // Gradient linear diagonal pentru fundal (135deg = diagonală)
      bg: 'bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#f1f5f9_100%)]',
      text: 'text-gray-800', // Text întunecat pentru contrast bun
      accentText: 'from-blue-600 to-purple-600', // Gradient pentru text de accent
      cardBg: 'bg-white', // Fundal alb pentru carduri
      cardBorder: 'border-gray-200', // Bordură subtilă gri
      buttonPrimary: 'bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md hover:shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 ease-out rounded-lg', // Buton principal albastru
      buttonSecondary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      buttonControls: 'border border-[#3B82F6] text-[#2563EB] hover:bg-[#E0F2FE] hover:text-[#1E40AF] transition duration-300 shadow-[0_0_10px_rgba(96,165,250,0.5)] hover:shadow-[0_0_20px_rgba(147,197,253,0.7)] rounded-md' // Cyan cu hover // Buton secundar cu efect hover
    },

    // TEMA DARK - Stiluri pentru modul întunecat
    dark: {
      bg: 'bg-[#0a0a0a]', // Fundal foarte întunecat (aproape negru)
      text: 'text-gray-100', // Text deschis pentru contrast
      accentText: 'from-blue-400 to-indigo-500', // Gradient mai deschis pentru vizibilitate
      cardBg: 'bg-gray-800', // Fundal gri întunecat pentru carduri
      cardBorder: 'border-gray-700', // Bordură gri mai întunecată
      buttonPrimary: 'bg-gradient-to-r from-blue-600 to-blue-400  shadow-[0_0_10px_rgba(59,130,246,0.4)]   hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105  transition-all duration-300 ease-out rounded-lg', // Buton principal albastru mai deschis
      buttonSecondary: 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white',
      buttonControls: 'border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-black transition duration-300 shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]' // Cyan cu hover
    },

    // TEMA SYNTHWAVE - Inspirată din estetica retro-futuristă a anilor '80
    synthwave: {
      // Gradient diagonal cu culori neon purple/magenta
      bg: 'bg-gradient-to-br from-[#2a0b3d] to-[#7d1bb5]',
      text: 'text-[#e2e8f0]', // Text deschis cu nuanță albăstruie
       accentText: 'from-[#E0F7FF] to-[#9B3FFF]', // Gradient cyan-purple pentru accent
      cardBg: 'bg-[#110033]/90', // Fundal violet închis semi-transparent (90% opacity)
      cardBorder: 'border-[#9D00FF]/30', // Bordură purple cu 30% transparență
      buttonPrimary: 'bg-gradient-to-r from-[#FF2D75] to-[#9D00FF] text-[#fffbf0] shadow-[0_0_10px_rgba(255,45,117,0.4)] hover:shadow-[0_0_20px_rgba(157,0,255,0.6)] hover:scale-105 transition-all duration-300 ease-out rounded-lg', // Gradient neon roz-purple
      buttonSecondary: 'border-[#000] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black border',// Cyan cu hover
      buttonControls: 'border border-[#FF2D75] text-[#FF2D75] hover:bg-[#FF2D75] hover:text-black transition duration-300 shadow-[0_0_10px_rgba(255,45,117,0.4)] hover:shadow-[0_0_20px_rgba(255,45,117,0.6)]' // Cyan cu hover
    },

    // TEMA NEON - Cu efecte de lumină neon intense
    neon: {
      bg: 'bg-[#0F0520]', // Fundal foarte întunecat violet
      text: 'text-[#e2e8f0]', // Text deschis
      accentText: 'from-[#1EB6FF] to-[#6B00CC]', // Gradient cyan-purple
      cardBg: 'bg-[#110033]/90', // Fundal semi-transparent
      cardBorder: 'border-[#9D00FF]/30', // Bordură purple transparentă
      buttonPrimary: 'bg-gradient-to-r from-[#00F5FF] to-[#00C2C2] text-black shadow-[0_0_10px_rgba(0,245,255,0.3)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)] hover:scale-105 transition-all duration-300 ease-out rounded-lg', // Folosește clasa CSS custom
       buttonControls: 'border border-[#00F5FF] text-[#00F5FF] hover:bg-[#00F5FF] hover:text-black transition duration-300 shadow-[0_0_10px_rgba(0,245,255,0.4)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]' // Cyan cu hover
    },
  };

  // Selectarea temei curente cu fallback la tema light
  // Operator || (OR logic) - dacă themes[theme] este undefined/null, folosește themes.light
  const currentTheme = themes[theme] || themes.light;

  // DATELE PENTRU SLIDER
  // Array cu obiectele story pentru fiecare slide
  // În aplicații reale, acestea ar veni dintr-o bază de date sau API
  const stories = [
    {
     title: "Symbiotech",
    excerpt: "Explore the symbiotic future of technology and humanity.",
     readTime: "5 min read",
    accentColor: "#7D1BB5",
    backgroundPrompt: "Futuristic neon city skyline at night with glowing biotech elements, cyberpunk colors, vibrant purples and blues, synthwave style, detailed, atmospheric lighting",
    backgroundImageUrl: "url-generated-from-ai-or-static.jpg",
      accentColor: theme === 'synthwave' ? '#FF2D75' :
                  theme === 'neon' ? '#00F5FF' :
                  theme === 'dark' ? '#00A5FF' : '#0066CC'
    },
    {
      title: "Neon Nexus",
      excerpt: "A rogue AI awakens in the underbelly of Neo-Tokyo, rewriting the city's neural network...",
      readTime: "7 min read",
      accentColor: theme === 'synthwave' ? '#9D00FF' :
                  theme === 'neon' ? '#9D00FF' :
                  theme === 'dark' ? '#7D00FF' : '#9933FF'
    },
    {
      title: "Quantum Echoes",
      excerpt: "Time fractures when Symbiothec touches a mysterious artifact from a collapsed dimension...",
      readTime: "8 min read",
      accentColor: theme === 'synthwave' ? '#00F5FF' :
                  theme === 'neon' ? '#FF2D75' :
                  theme === 'dark' ? '#00DDFF' : '#00BFFF'
    },
    {
      title: "Data Phantom",
      excerpt: "A digital ghost haunts the city's surveillance network, erasing memories of its victims...",
      readTime: "6 min read",
      accentColor: theme === 'synthwave' ? '#FF4D88' :
                  theme === 'neon' ? '#FF00FF' :
                  theme === 'dark' ? '#FF6B9E' : '#FF6699'
    },
    {
      title: "The Last Interface",
      excerpt: "Humanity's final connection to the digital world rests in Symbiothec's synthetic hands...",
      readTime: "9 min read",
      accentColor: theme === 'synthwave' ? '#7d1bb5' :
                  theme === 'neon' ? '#003366' :
                  theme === 'dark' ? '#5a1d9a' : '#4a1b8c'
    }
  ];

  // FUNCȚII PENTRU NAVIGAREA SLIDER-ULUI

  // Funcție pentru avansarea la următorul slide
  const nextSlide = () => {
    // setCurrentSlide primește o funcție care returnează noua valoare
    // prev = valoarea precedentă (current state)
    // Logica: dacă suntem la ultimul slide, mergi la primul (0), altfel incrementează
    setCurrentSlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  // Funcție pentru revenirea la slide-ul anterior
  const prevSlide = () => {
    // Logica inversă: dacă suntem la primul slide (0), mergi la ultimul, altfel decrementează
    setCurrentSlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  // RETURNAREA JSX-ULUI
  // JSX este transpilat în apeluri React.createElement()
  return (
    // Container principal pentru secțiunea hero
    <section
      id="home" // ID pentru navigarea cu anchor links
      className={`relative py-20 md:py-32 flex items-center justify-center overflow-hidden ${currentTheme.bg}`}
      // Clase CSS explicate:
      // - relative: poziționare relativă pentru copiii cu poziționare absolută
      // - py-20 md:py-32: padding vertical responsive (20 pe mobile, 32 pe desktop)
      // - flex items-center justify-center: centrarea conținutului
      // - overflow-hidden: ascunde elementele care ies din container
    >

      {/* SFERE ANIMATE DE FUNDAL */}
      {/* Div container pentru efectele vizuale de fundal */}
      <div className="absolute inset-0 opacity-20">
        {/*
          absolute inset-0 = poziționare absolută care ocupă tot container-ul
          opacity-20 = 20% transparență pentru efect subtil
        */}

        {/* SFERA 1 - Poziționată în partea stângă-sus */}
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full filter blur-3xl animate-pulse mix-blend-screen
          ${theme === 'synthwave' ? 'bg-[#FF00FF]' :
            theme === 'dark' ? 'bg-[#FF2D75]' : 'bg-[#FF99CC]'}`}>
        </div>
        {/*
          Clase CSS explicate:
          - top-1/4 left-1/4: poziționează la 25% din înălțime și lățime
          - w-72 h-72: dimensiune 18rem × 18rem (288px × 288px)
          - rounded-full: face elementul perfect circular
          - filter blur-3xl: aplicarea unui blur foarte puternic (64px)
          - animate-pulse: animație predefinită Tailwind (fade in/out)
          - mix-blend-screen: mod de amestec CSS pentru efecte de lumină
          - Culorile se aleg conditional în funcție de temă
        */}

        {/* SFERA 2 - Poziționată în partea dreaptă-jos */}
        <div className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full filter blur-3xl animate-pulse delay-1000 mix-blend-screen
          ${theme === 'synthwave' ? 'bg-[#00F5FF]' :
            theme === 'dark' ? 'bg-[#00A5FF]' : 'bg-[#00DDFF]'}`}>
        </div>
        {/*
          delay-1000: întârziere de 1000ms pentru animația pulse
          w-96 h-96: dimensiune mai mare (24rem × 24rem = 384px × 384px)
        */}

        {/* SFERA 3 - Poziționată în centru */}
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full filter blur-2xl animate-pulse delay-500 mix-blend-screen
          ${theme === 'synthwave' ? 'bg-[#9D00FF]' :
            theme === 'dark' ? 'bg-[#7D00FF]' : 'bg-[#CC00FF]'}`}>
        </div>
        {/*
          top-1/2 left-1/2: centrare la 50% din înălțime și lățime
          blur-2xl: blur mai mic decât celelalte (40px)
          delay-500: întârziere de 500ms
        */}
      </div>

      {/* CONȚINUTUL PRINCIPAL */}
      {/* Container pentru textul și slider-ul hero */}
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/*
          z-10: z-index pentru a fi deasupra sferelor de fundal
          max-w-7xl: lățime maximă de 80rem (1280px)
          mx-auto: centrare orizontală cu margin auto
          px-4 sm:px-6 lg:px-8: padding orizontal responsive
        */}

        {/* GRID LAYOUT pentru organizarea în coloane */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*
            grid: activează CSS Grid
            lg:grid-cols-2: 2 coloane pe ecrane large (≥1024px)
            gap-12: spațiu de 3rem (48px) între coloane
            items-center: alinierea verticală la centru
          */}

          {/* COLOANA STÂNGĂ - Text și butoane CTA */}
          <div className="text-center lg:text-left animate-fade-in flex flex-col items-center lg:items-start gap">
            {/*
              text-center lg:text-left: text centrat pe mobile, aliniat stânga pe desktop
              animate-fade-in: animație CSS custom pentru apariția elementului
            */}

            {/* Container pentru titlu și descriere */}
            <div className="mb-8">
              {/* TITLUL PRINCIPAL */}
              <h1 className={`text-5xl lg:text-6xl font-bold ${currentTheme.text} mb-6 leading-tight animate-scale-in`}>
                {/*
                  text-5xl lg:text-7xl: dimensiune text responsivă (3rem pe mobile, 4.5rem pe desktop)
                  font-bold: greutatea fontului 700
                  leading-tight: line-height redus pentru compactare
                  animate-scale-in: animație custom de scalare
                */}
                Discover Original

                {/* Span pentru textul cu gradient */}
                <span className={`block bg-gradient-to-r ${currentTheme.accentText} bg-clip-text text-transparent animate-pulse`}>
                  {/*
                    block: face span-ul să se comporte ca un element block (pe linie nouă)
                    bg-gradient-to-r: gradient de la stânga la dreapta
                    bg-clip-text: clipează gradient-ul la formele literelor
                    text-transparent: face textul transparent pentru a vedea gradient-ul
                    animate-pulse: animație de pulsare
                  */}
                 AI-Generated Stories
                </span>
              </h1>

              {/* DESCRIEREA */}

            <p
  className={`
    text-xl lg:text-2xl
    ${currentTheme.text}
    mb-8 max-w-2xl mx-auto lg:mx-0
    leading-relaxed
    animate-fade-in
    delay-300
  `}
>
  Dive into
<span className={`ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r ${currentTheme.accentText} inline-block`}>
  thrilling characters ,
</span>

 <span className={`ml-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r ${currentTheme.accentText} inline-block`}>
  strange futures ,
</span> and stories crafted by code —&nbsp;

  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r ${currentTheme.accentText}">
    infused with human ingenuity and creativity.
  </span>
</p>
            </div>

            {/* BUTOANELE CTA (Call To Action) */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in delay-500">
              {/*
                flex flex-col sm:flex-row: coloană pe mobile, rând pe tablet+
                gap-4: spațiu de 1rem (16px) între butoane
                justify-center lg:justify-start: centrat pe mobile, aliniat stânga pe desktop
                delay-500: întârziere animație
              */}

              {/* BUTONUL PRINCIPAL */}
      <MagneticLink isButton>
  <a
    href="#stories"
    className={`
      flex items-center justify-center
      font-bold py-3 px-8 rounded-lg
      transition-all ${themeConfig.duration} ease-out
      shadow-xl text-lg
      ${themes[theme]?.buttonPrimary || 'bg-gray-400 text-black'}
      relative overflow-hidden
      group // Added for group hover effects
    `}
  >
    {/* Pulsing gradient background */}
    <motion.span
      className="absolute inset-0 -z-10 rounded-lg" // Changed from rounded-full to match button shape
      style={{
        background:
          theme === 'synthwave'
            ? 'radial-gradient(circle, rgba(255,126,219,0.3) 0%, transparent 70%)'
            : theme === 'neon'
            ? 'radial-gradient(circle, rgba(34,211,238,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        transition: { duration: 1.5, repeat: Infinity },
      }}
    />

    <span className="relative z-10 flex items-center">
      Explore All Stories
      <svg
        className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </span>

    {/* Animated underline */}
    <motion.span
      className="absolute bottom-0 left-0 h-1 w-full origin-left"
      style={{
        background:
          theme === 'synthwave'
            ? 'linear-gradient(to right, #ff7edb, #42d6ff)'
            : theme === 'neon'
            ? 'linear-gradient(to right, #22d3ee, #c026d3)'
            : theme === 'dark'
            ? 'linear-gradient(to right, #818cf8, #6366f1)'
            : 'linear-gradient(to right, #3b82f6, #2563eb)',
        scaleX: 0,
      }}
      initial={{ scaleX: 0 }}
      whileHover={{
        scaleX: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    />
  </a>
</MagneticLink>



              {/* BUTONUL SECUNDAR */}

       {/* UNIVERSAL SECONDARY BUTTON */}
<MagneticLink isButton>
  <button className={`
    flex items-center justify-center
    font-bold py-3 px-8 rounded-lg
    transition-all duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]
    border-2
    bg-transparent
    relative overflow-hidden
    group
    z-0
    cursor-pointer
    /* Theme-adaptive colors */
    ${
      theme === 'synthwave'
        ? 'border-[#ea00ff] text-[#fdfdfd] hover:bg-[#b780db] hover:text-black'
        : theme === 'neon'
        ? 'border-[#00ffdd] text-[#ffffff] hover:bg-[#00F5FF] hover:text-black'
        : theme === 'dark'
        ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
    }
    /* Shadow effects */
    /* Shadow effects */
${
  theme === 'synthwave'
    ? 'shadow-[0_0_10px_rgba(255,45,117,0.3)] hover:shadow-[0_0_20px_rgba(157,0,255,0.6)]'
    : theme === 'neon'
    ? 'shadow-[0_0_10px_rgba(0,245,255,0.3)] hover:shadow-[0_0_20px_rgba(0,245,255,0.6)]'
    : 'shadow-sm hover:shadow-md'
}
  `}>

    {/* Theme-adaptive gradient glow (only for synthwave/neon) */}
    {(theme === 'synthwave' || theme === 'neon') && (
      <span className={`
        absolute -inset-0.5 rounded-lg
        bg-gradient-to-r
        ${theme === 'synthwave' ? 'from-[#00F5FF] to-[#9D00FF]' : 'from-[#00F5FF] to-[#00C2C2]'}
        opacity-0 group-hover:opacity-50
        blur-sm
        transition-opacity duration-500
        z-[-1]
      `}/>
    )}

    {/* Button content */}
    <span className="relative flex items-center gap-2">
      <span>View Gallery</span>
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
      </svg>
    </span>

    {/* Retro flicker effect (only for synthwave) */}
    {theme === 'synthwave' && (
      <span className={`
  absolute inset-0 rounded-lg
  bg-[length:5px_5px]
  opacity-0 group-hover:opacity-100
  transition-opacity duration-700
  pointer-events-none
  ${
    theme === 'synthwave'
      ? 'bg-[linear-gradient(90deg,transparent_50%,rgba(0,245,255,0.1)_50%)]'
      : theme === 'neon'
      ? 'bg-[linear-gradient(90deg,transparent_50%,rgba(34,211,238,0.1)_50%)]'
      : theme === 'dark'
      ? 'bg-[linear-gradient(90deg,transparent_50%,rgba(96,165,250,0.1)_50%)]'
      : 'bg-[linear-gradient(90deg,transparent_50%,rgba(59,130,246,0.1)_50%)]'
  }
`}/>
    )}
  </button>
</MagneticLink>
            </div>
          </div>

          {/* COLOANA DREAPTĂ - Slider cu povești */}
          <div className="relative w-full animate-fade-in delay-700">
            {/* Container principal pentru slider */}
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
              {/*
                h-[400px]: înălțime fixă de 400px
                overflow-hidden: ascunde conținutul care iese din container
                rounded-2xl: borduri rotunjite mari (16px)
              */}

              {/* MAPAREA SLIDE-URILOR */}
              {/* Creăm un element pentru fiecare story din array */}
             {stories.map((story, index) => (
  <div
    key={index}
    className={`absolute inset-0 overflow-hidden rounded-2xl transition-all duration-500 ease-in-out transform`}
    style={{
      transform: `translateX(${(index - currentSlide) * 100}%)`,
      opacity: index === currentSlide ? 1 : 0,
      zIndex: index === currentSlide ? 10 : 1,
    }}
  >
    {/* 🎨 Background image for the first slide */}
   {index === 0 && (
  <>
    <div
      className="absolute inset-0 -z-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${SymbiotechSlideImg})` }}
    />

    {/* 🕶️ Dark overlay for better contrast */}
    <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-sm rounded-2xl"></div>
  </>
)}

    {/* 🌟 Content layer */}
    <div
      className={`${currentTheme.cardBg} ${currentTheme.cardBorder} p-8 border rounded-2xl h-full w-full `}
    >
      {/* HEADER-UL SLIDE-ULUI */}
      <div className="flex items-center mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center animate-pulse"
          style={{ background: story.accentColor }}
        >
          <span className="text-white font-bold text-lg">{index + 1}</span>
        </div>
        <div className="ml-3">
          <h3 className={`text-xl font-semibold ${currentTheme.text}`}>
            {story.title}
          </h3>
          <p className="text-sm" style={{ color: story.accentColor }}>
            {story.readTime}
          </p>
        </div>
      </div>

      {/* EXCERPT */}
      <p className={`${currentTheme.text} text-lg leading-relaxed mb-6`}>
        {story.excerpt}
      </p>

      {/* READ NOW BUTTON */}
      <button
        className="absolute bottom-6 right-6 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        style={{
          background: story.accentColor,
          color: ['synthwave', 'neon'].includes(theme) ? 'black' : 'white',
        }}
      >
        Read Now
      </button>
    </div>
  </div>
))}

            </div>

            {/* BUTOANELE DE NAVIGARE */}
            {/* Butonul pentru slide-ul anterior */}
            <button
              onClick={prevSlide} // Event handler pentru click
              className={`absolute left-8 top-1/2 -translate-y-1/2 z-20 p-1 rounded-lg ${currentTheme.buttonControls} backdrop-blur-sm cursor-pointer`}
              // left-2: poziționar la 8px de la stânga
              // top-1/2 -translate-y-1/2: centrare verticală perfectă
              // z-20: z-index mare pentru a fi deasupra slide-urilor
              // backdrop-blur-sm: efect de blur pentru fundul butonului
            >
              <ChevronLeft className="w-6 h-6" /> {/* Iconica din lucide-react */}
            </button>

            {/* Butonul pentru slide-ul următor */}
            <button
              onClick={nextSlide}
              className={`absolute right-8 top-1/2 -translate-y-1/2 z-20 p-1 rounded-lg ${currentTheme.buttonControls} backdrop-blur-sm cursor-pointer`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* INDICATORII PUNCTE (dots) */}
            {/* Container pentru punctele de navigare */}
            <div className="flex justify-center mt-4 space-x-2">
              {/* space-x-2: spațiu orizontal de 8px între copii */}

              {/* Mapăm stories pentru a crea un punct pentru fiecare */}
              {stories.map((_, index) => (
                // _ înseamnă că nu folosim primul parametru (story object)
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)} // Navigare directă la slide-ul selectat
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-current scale-125' : 'bg-gray-400/50'
                  }`}
                  // Conditional className:
                  // - dacă este slide-ul activ: bg-current (folosește culoarea curentă) și scale-125 (25% mai mare)
                  // - altfel: bg-gray-400/50 (gri cu 50% transparență)
                  style={{
                    // Culoarea se setează dinamic pentru punctul activ
                    color: stories[currentSlide].accentColor
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LINIA DE SEPARARE */}
      {/* Element decorativ pentru separarea secțiunilor */}
      <div className="h-[2px] bg-gradient-to-r from-[#7d1bb5] via-[#5a1d9a] to-[#FF4D88]" />
      {/*
        h-[2px]: înălțime exactă de 2px
        bg-gradient-to-r: gradient orizontal de la stânga la dreapta
        from-via-to: definește 3 puncte de culoare pentru gradient
      */}
    </section>
  );
};

// EXPORT DEFAULT
// Permite importarea componentei în alte fișiere cu orice nume
export default Hero;

/*
=== TERMINOLOGIE ȘI CONCEPTE REACT AVANSATE ===

1. **COMPONENTE FUNCȚIONALE vs CLASE**:
   - Componentele funcționale sunt mai simple și performante
   - Suportă Hook-uri pentru gestionarea stării și efectelor
   - Înlocuiesc componentele de clasă în React modern

2. **HOOK-URI REACT**:
   - useState: gestionează starea locală a componentei
   - useEffect: gestionează efectele secundare (nu e folosit aici)
   - Custom Hooks: funcții care encapsulează logica reutilizabilă (useTheme)

3. **STATE MANAGEMENT**:
   - State-ul local (useState) pentru date specifice componentei
   - Context API pentru state global (tema aplicației)
   - State-ul este immutable - se actualizează doar prin setter-ul furnizat

4. **EVENT HANDLING**:
   - onClick, onChange etc. sunt SyntheticEvents în React
   - Event handlers primesc event object ca parametru
   - Arrow functions pentru a păstra contextul 'this'

5. **CONDITIONAL RENDERING**:
   - Folosim operatori JavaScript în JSX: &&, ||, ?:
   - Template literals pentru clase CSS dinamice
   - Stiluri inline dinamice cu proprietatea style

6. **LISTS ȘI KEYS**:
   - .map() pentru randarea listelor de elemente
   - Key prop obligatorie pentru performanță și stabilitate
   - Keys trebuie să fie unice și stabile

7. **CSS-IN-JS ȘI STYLING**:
   - Tailwind CSS pentru stilizare utilitară
   - Clase dinamice cu template literals
   - Stiluri inline pentru valori calculate dinamic
   - CSS custom properties pentru teme

8. **RESPONSIVE DESIGN**:
   - Breakpoints Tailwind: sm (640px), md (768px), lg (1024px), xl (1280px)
   - Mobile-first approach: stilurile de bază sunt pentru mobile
   - Prefix-uri pentru fiecare breakpoint

9. **ANIMAȚII ȘI TRANZIȚII**:
   - Animații predefinite Tailwind: animate-pulse, animate-bounce
   - Animații CSS custom definite în stylesheet
   - Tranziții smooth cu transition-all și duration
   - Transform effects: scale, translate, rotate

10. **PERFORMANCE OPTIMIZATION**:
    - React.memo pentru componente pure (nu e folosit aici)
    - useMemo și useCallback pentru expensive calculations
    - Keys corecte pentru reconciliation eficient
    - Lazy loading pentru componente mari

11. **ACCESSIBILITY (A11Y)**:
    - Elemente semantice: section, button, nav
    - ARIA labels pentru screen readers
    - Focus management pentru navigarea cu tastatura
    - Contrast colors pentru vizibilitate

12. **COMPONENT LIFECYCLE**:
    - Mounting: componentul se creează și se adaugă în DOM
    - Updating: componentul se re-randează când props/state se schimbă
    - Unmounting: componentul se elimină din DOM
    - useEffect pentru gestionarea lifecycle-ului

13. **SIDE EFFECTS**:
    - API calls, timers, subscriptions
    - Se gestionează cu useEffect
    - Cleanup pentru prevenirea memory leaks

14. **PROP TYPES ȘI TYPESCRIPT**:
    - Validarea tipurilor de date pentru props
    - TypeScript pentru type safety la compile time
    - DefaultProps pentru valori implicite

15. **TESTING**:
    - Unit testing cu Jest și React Testing Library
    - Integration testing pentru flow-uri complete
    - Snapshot testing pentru UI consistency

16. **PATTERNS ȘI BEST PRACTICES**:
    - Container vs Presentational components
    - Higher-Order Components (HOC)
    - Render Props pattern
    - Custom Hooks pentru logică reutilizabilă
    - Context pentru state management global
*/