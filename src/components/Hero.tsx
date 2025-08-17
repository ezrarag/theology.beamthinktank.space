export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Exploring
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              World Religions
            </span>
            <span className="block">Through Dialogue</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join BEAM Theology & World Religions Institute in fostering understanding, 
            respect, and meaningful connections across faith traditions and spiritual practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Courses
            </a>
            <a
              href="#community"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-white/10"
            >
              Join Community
            </a>
          </div>
        </div>

        {/* Interfaith Icons */}
        <div className="mt-16 flex justify-center items-center space-x-8 md:space-x-16 opacity-80">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl md:text-3xl">🕌</span>
            </div>
            <p className="text-sm md:text-base text-blue-100">Islam</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl md:text-3xl">⛪</span>
            </div>
            <p className="text-sm md:text-base text-blue-100">Christianity</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl md:text-3xl">🕉️</span>
            </div>
            <p className="text-sm md:text-base text-blue-100">Hinduism</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl md:text-3xl">☸️</span>
            </div>
            <p className="text-sm md:text-base text-blue-100">Buddhism</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-full flex items-center justify-center mb-3 mx-auto">
              <span className="text-2xl md:text-3xl">✡️</span>
            </div>
            <p className="text-sm md:text-base text-blue-100">Judaism</p>
          </div>
        </div>
      </div>
    </section>
  );
}
