import { Funnel } from './components/Funnel/Funnel'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            CrediMatch<span className="text-secondary">Leads</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Secure & Encrypted
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Funnel />

        {/* Trust Signals */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-6 italic">"Checking your rate won't affect your credit score."</p>
          <div className="flex justify-center items-center space-x-12 opacity-50 grayscale">
            <div className="text-xl font-bold">Norton <span className="text-xs">SECURE</span></div>
            <div className="text-xl font-bold">BBB <span className="text-xs">ACCREDITED</span></div>
            <div className="text-xl font-bold">Trustpilot</div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-10 border-t border-gray-200 text-center text-sm text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; 2026 CrediMatch Leads. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
