const StoryCard = ({ story }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${story.featured ? 'ring-2 ring-blue-500' : ''}`}>
      {story.featured && (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
          Featured Story
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {story.character}
          </span>
          <span className="text-sm text-gray-500">{story.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
          {story.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {story.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {story.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
          Read Story
        </button>
      </div>
    </div>
  );
};

export default StoryCard;