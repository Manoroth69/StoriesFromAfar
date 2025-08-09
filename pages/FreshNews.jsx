import { useTheme } from '../src/context/ThemeContext';
import { BackButton } from './BackButton.jsx';
import Layout from '../src/components/Layout.jsx'


const FreshNews = () => {
  const { theme } = useTheme();
  
  return (
    <Layout>
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 
      theme === 'synthwave' ? 'bg-[#1a103d] text-[#f0f0f0]' : 
      theme === 'neon' ? 'bg-[#0a0a0a] text-white' : 
      'bg-white text-gray-900'
    } `
}
    
    >
        
      <div className="container mx-auto px-4 py-12">
        <div className="ButtonContainer w-full flex items-start">
  <BackButton  />
        </div>
        {/* Header */}
     
        <header className="mb-12 text-center">
            
            <div className="text-center mt-12">
 
           
</div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'synthwave' ? 'text-[#ea00ff]' : 
            theme === 'neon' ? 'text-[#00ffdd]' : 
            theme === 'dark' ? 'text-blue-400' : 
            'text-blue-600'
          }`}>
            Fresh News & Highlights
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay updated with the latest developments and exciting highlights from our platform.
          </p>
        </header>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={`rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
              theme === 'synthwave' ? 'bg-[#2a1a4a] hover:shadow-[0_0_20px_rgba(157,0,255,0.3)]' : 
              theme === 'neon' ? 'bg-[#111] hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]' : 
              theme === 'dark' ? 'bg-gray-800' : 
              'bg-gray-50'
            }`}>
              <div className={`w-full h-48 mb-4 rounded-lg ${
                theme === 'synthwave' ? 'bg-[#3a2a5a]' : 
                theme === 'neon' ? 'bg-[#222]' : 
                theme === 'dark' ? 'bg-gray-700' : 
                'bg-gray-200'
              }`}></div>
              <h3 className={`text-xl font-bold mb-2 ${
                theme === 'synthwave' ? 'text-[#b780db]' : 
                theme === 'neon' ? 'text-[#00F5FF]' : 
                theme === 'dark' ? 'text-blue-300' : 
                'text-blue-500'
              }`}>
                Exciting Update #{item}
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
              </p>
              <button className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
                theme === 'synthwave' ? 'bg-[#ea00ff] text-white hover:bg-[#b780db]' : 
                theme === 'neon' ? 'bg-[#00ffdd] text-black hover:bg-[#00F5FF]' : 
                theme === 'dark' ? 'bg-blue-500 hover:bg-blue-400' : 
                'bg-blue-600 hover:bg-blue-500 text-white'
              }`}>
                Read More
              </button>
            </div>
          ))}
        </div>

        

        {/* Newsletter CTA */}
        <div className={`mt-16 p-8 rounded-xl text-center ${
          theme === 'synthwave' ? 'bg-[#2a1a4a]' : 
          theme === 'neon' ? 'bg-[#111]' : 
          theme === 'dark' ? 'bg-gray-800' : 
          'bg-gray-100'
        }`}>
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                theme === 'synthwave' ? 'bg-[#1a103d] border border-[#b780db] focus:ring-[#ea00ff]' : 
                theme === 'neon' ? 'bg-black border border-[#00F5FF] focus:ring-[#00ffdd]' : 
                theme === 'dark' ? 'bg-gray-700 border border-blue-400 focus:ring-blue-400' : 
                'bg-white border border-blue-500 focus:ring-blue-500'
              }`}
            />
            <button className={`px-6 py-3 rounded-lg font-bold transition-colors ${
              theme === 'synthwave' ? 'bg-[#ea00ff] hover:bg-[#b780db]' : 
              theme === 'neon' ? 'bg-[#00ffdd] text-black hover:bg-[#00F5FF]' : 
              theme === 'dark' ? 'bg-blue-500 hover:bg-blue-400' : 
              'bg-blue-600 hover:bg-blue-500 text-white'
            }`}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default FreshNews;