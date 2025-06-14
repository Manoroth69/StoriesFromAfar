import StoryCard from "./StoryCard";

const Stories= () => {
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
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI-Crafted Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in original tales of advanced beings, technological wonders,
            and the intricate dance between consciousness and digital reality.
          </p>
        </div>

        {/* AdSense Placeholder */}
        <div className="mb-16">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 font-medium">AdSense Advertisement Space</p>
            <p className="text-gray-400 text-sm mt-2">728x90 Leaderboard Ad Unit</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stories;