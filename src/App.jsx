import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(900px_500px_at_10%_10%,rgba(236,72,153,0.25),transparent)] bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        Built with love by Blog Press • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
