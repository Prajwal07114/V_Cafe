import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      
      <div className="bg-black/60 min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">☕ Virtual Study Café</h1>
          <nav>
            <Link
              to="/login"
              className="px-4 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-3 px-4 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            >
              Register
            </Link>
          </nav>
        </header>

      
        <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl font-extrabold mb-4">
            Study Together, Stay Motivated 🎓
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mb-6">
            Welcome to the Virtual Study Café — join study rooms, chat with
            peers, and stay focused on your goals. Your perfect online study
            companion!
          </p>
          <div>
            <Link
              to="/register"
              className="px-6 py-3 bg-pink-600 rounded-xl text-lg hover:bg-pink-700 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="ml-4 px-6 py-3 bg-gray-700 rounded-xl text-lg hover:bg-gray-800 transition"
            >
              Already a member?
            </Link>
          </div>
        </main>

        
        <footer className="py-4 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Virtual Study Café. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
