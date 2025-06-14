const Donate = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support AI Storytelling
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us continue creating immersive AI-generated stories and developing original characters.
            Your support keeps the creative process alive and accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Why Support */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🤖 AI Development</h3>
              <p className="text-gray-600">
                Fund continued development of AI storytelling tools and character creation systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📚 Story Creation</h3>
              <p className="text-gray-600">
                Support the creation of new stories, characters, and immersive narrative experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌐 Free Access</h3>
              <p className="text-gray-600">
                Keep all stories freely accessible while maintaining high-quality content creation.
              </p>
            </div>
          </div>

          {/* Right side - Donation Options */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Support Level</h3>

            <div className="space-y-4 mb-8">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                ☕ Buy us a Coffee - $5
              </button>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                📖 Story Supporter - $15
              </button>

              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                🤖 AI Patron - $50
              </button>
            </div>

            {/* Payment Platform Placeholders */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 text-center mb-4">Secure payment options:</p>
              <div className="flex justify-center space-x-4">
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600 font-medium">
                  PayPal
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600 font-medium">
                  Stripe
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-600 font-medium">
                  Patreon
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-16">
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 font-medium">AdSense Advertisement Space</p>
            <p className="text-gray-400 text-sm mt-2">300x250 Medium Rectangle Ad Unit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;