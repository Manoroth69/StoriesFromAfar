const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-400 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-400 filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Meet
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Symbiothec
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master of senses with advanced technological abilities. Experience immersive AI-crafted stories
            featuring original characters in extraordinary worlds.
          </p>
        </div>

        {/* Featured Story Preview */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-4xl mx-auto border border-white/20">
          <h3 className="text-2xl font-semibold text-white mb-4">Featured Story: "The Sensory Web"</h3>
          <p className="text-blue-100 text-lg leading-relaxed mb-6">
            "Symbiothec's fingertips traced the quantum interface, each neural pathway lighting up like
            constellations in the digital void. The data streams whispered secrets only they could decode..."
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Read Full Story
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#stories"
            className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore All Stories
          </a>
          <a
            href="#donate"
            className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
          >
            Support the Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;