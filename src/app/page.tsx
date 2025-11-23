import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">HF<span className="text-green-500">.</span></div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <Link href="#work" className="hover:text-white transition">Work</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </div>
          <a 
            href="https://wa.link/YOUR_LINK" 
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-green-500 transition duration-300"
          >
            Book Demo
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-block border border-white/10 bg-white/5 px-4 py-1 rounded-full text-xs font-mono text-green-400 mb-6">
          SYSTEM OPERATIONAL • v2.0
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
          Your Agents Sleep.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Our Code Doesn't.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          We build autonomous AI systems for Real Estate Agencies in the UK, UAE, and Nigeria. 
          Automate lead qualification, follow-ups, and booking 24/7.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="https://wa.link/YOUR_LINK" className="bg-green-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition">
            Start Automating
          </a>
          <a href="#demo" className="border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
            Watch Demo
          </a>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50 grayscale">
          {/* Replace with SVGs or Text */}
          <span className="text-2xl font-bold">DACHA</span>
          <span className="text-2xl font-bold">ALLSOPP</span>
          <span className="text-2xl font-bold">MCR MOVE</span>
          <span className="text-2xl font-bold">HAUS</span>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Instant Capture", desc: "0.8s response time to Rightmove & Property Finder leads." },
            { title: "AI Qualification", desc: "Filters out window shoppers vs. cash buyers automatically." },
            { title: "Auto-Booking", desc: "Schedules viewings directly into your Google Calendar." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-green-500/50 transition duration-500">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; 2025 HF Automations. All systems online.</p>
      </footer>
    </main>
  );
}
```

### **Step 3: Run it**
1.  In your terminal, run:
    ```bash
    npm run dev