import React from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Uncomment to use your logo image

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <div className="flex items-center gap-2">
            {/* --- LOGO PLACEHOLDER ---
               1. Put your logo.png in the /public folder
               2. Uncomment the Image tag below
               3. Remove the text div if you prefer image only 
            */}
            {/* <div className="relative w-10 h-10">
               <Image src="/hf.jpeg" alt="HF Automations" fill className="object-contain" />
            </div> 
            */}
            
            <div className="text-2xl font-bold tracking-tighter cursor-pointer">
              HF<span className="text-green-500">.</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
            <Link href="#work" className="hover:text-white transition">Work</Link>
            <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </div>
          
          <a 
            href="https://wa.link/0a3cc4" 
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-green-500 hover:scale-105 transition duration-300"
          >
            Book Demo
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        {/* Status Badge with Pulse Animation */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1 rounded-full text-xs font-mono text-green-400 mb-6 hover:bg-white/10 transition cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
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
          <a href="https://wa.link/0a3cc4" className="bg-green-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            Start Automating
          </a>
          <a href="#demo" className="border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition">
            Watch Demo
          </a>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-white/5 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500">
          {/* Replace with SVGs later */}
          <span className="text-2xl font-bold tracking-widest">DACHA</span>
          <span className="text-2xl font-bold tracking-widest">ALLSOPP</span>
          <span className="text-2xl font-bold tracking-widest">MCR MOVE</span>
          <span className="text-2xl font-bold tracking-widest">HAUS</span>
        </div>
      </section>

      {/* PROCESS / CHAT SIMULATION */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Zero Latency.<br />Maximum Conversion.</h2>
            <p className="text-gray-400 text-lg mb-8">
              While your competitors take hours to reply, our HF Engine engages leads in under 0.8 seconds. We filter out window shoppers so your agents only talk to qualified deals.
            </p>
            <ul className="space-y-4">
              {['Responds 24/7/365', 'Handles objections naturally', 'Books directly to Google Calendar'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Chat UI Simulation */}
          <div className="relative mt-10 md:mt-0">
            {/* Green glow effect behind chat */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-900 rounded-2xl blur opacity-20"></div>
            
            <div className="relative bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-2xl max-w-sm mx-auto font-sans text-sm">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <span className="text-xs font-mono text-green-500">LIVE LEAD CAPTURE</span>
                <span className="text-xs text-gray-500">Now</span>
              </div>

              {/* Lead Message */}
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">LS</div>
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-gray-200">Hi, is the 2-bed apartment in Lekki still available?</p>
                </div>
              </div>

              {/* Bot Message */}
              <div className="flex gap-3 flex-row-reverse mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black font-bold text-xs">HF</div>
                <div className="bg-green-500/10 border border-green-500/20 p-3 rounded-2xl rounded-tr-none max-w-[85%]">
                  <p className="text-green-100">Yes, it is! We just listed it. Are you looking to move in this month?</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] text-green-400/60 font-mono">REPLIED IN 0.8s</span>
                  </div>
                </div>
              </div>

              {/* Lead Message */}
              <div className="flex gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white">LS</div>
                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                  <p className="text-gray-200">Yes, I have the funds ready.</p>
                </div>
              </div>
              
              {/* Typing Indicator */}
              <div className="flex gap-2 ml-11">
                 <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-75"></span>
                 <span className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce delay-150"></span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EXPANDED FEATURES GRID */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-white/5 rounded-[3rem] my-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Agency Automation</h2>
          <p className="text-gray-400">Everything you need to scale without hiring more staff.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Instant Capture", desc: "Connects to Rightmove, Zoopla & FB Ads instantly." },
            { title: "AI Qualification", desc: "Natural language processing to filter unqualified leads." },
            { title: "Auto-Booking", desc: "Schedules viewings directly into your Google Calendar." },
            { title: "CRM Sync", desc: "Push clean data to HubSpot, Salesforce, or Reapit automatically." },
            { title: "Multi-Channel", desc: "Engage leads via WhatsApp, SMS, Email, and Instagram DM." },
            { title: "Database Reactivation", desc: "Wake up dead leads in your existing database with AI blasts." }
          ].map((feature, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-white/10 bg-black/40 hover:border-green-500/50 hover:bg-green-900/10 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-white/5 rounded-lg mb-4 flex items-center justify-center text-green-500 group-hover:scale-110 transition">
                {/* Icon Placeholder */}
                <div className="w-4 h-4 border-2 border-current rounded-sm" /> 
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="mb-4 font-bold text-white text-2xl">HF<span className="text-green-500">.</span></div>
        <p>&copy; 2025 HF Automations. All systems online.</p>
      </footer>
    </main>
  );
}