/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Apple, 
  Smartphone, 
  Star, 
  Calendar, 
  Users, 
  Image as ImageIcon, 
  Heart, 
  Play,
  ArrowRight
} from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-stone-200/50">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
      <div className="text-2xl font-black text-[#1b1c1a] font-headline tracking-tight">Dates</div>
      <div className="hidden md:flex gap-10 items-center">
        <a className="text-[#1b1c1a]/60 hover:text-primary transition-colors font-bold font-headline" href="#features">Features</a>
        <a className="text-[#1b1c1a]/60 hover:text-primary transition-colors font-bold font-headline" href="#how-it-works">How It Works</a>
        <a className="text-[#1b1c1a]/60 hover:text-primary transition-colors font-bold font-headline" href="#memories">Memories</a>
        <a className="text-[#1b1c1a]/60 hover:text-primary transition-colors font-bold font-headline" href="#download">Download</a>
      </div>
      <a href="#download" className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-bold font-headline scale-95 active:scale-90 transition-transform duration-200">
        Get Started
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative pt-32 pb-32 px-8 overflow-hidden bg-gradient-to-b from-surface via-surface to-secondary/5">
    {/* Dynamic Glowing Shapes */}
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full animate-float" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-primary-container/30 blur-[120px] rounded-full animate-float"></div>
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-secondary-container/20 blur-[80px] rounded-full animate-float" style={{ animationDelay: "-5s" }}></div>
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-left"
      >
        <h1 className="font-headline font-black text-7xl md:text-8xl leading-[1.1] tracking-tighter text-on-surface mb-6">
          Plan dates.<br/>
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-fixed-dim">Make memories.</span>
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-lg mb-10 leading-relaxed">
          The premium date planning app for couples and groups. Elevate your quality time with seamless coordination.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold font-headline flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            <Apple size={24} />
            Download on iOS
          </button>
          <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold font-headline flex items-center gap-3 hover:bg-surface-container-highest transition-colors">
            <Smartphone size={24} />
            Download on Android
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative h-[600px] flex items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
          <img 
            className="absolute w-64 md:w-80 rounded-[3rem] shadow-2xl z-20 -rotate-12 translate-x-[-15%] border-8 border-on-surface" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1OgUX6xCaFIrfNvsD5WczdB7bkEMIH3xgCR6y0_73qLbTHpo3Y0O8rtcI2aWeujRJDuSYU_WpoBrUbBD52rU7OlrQ4jlnmozlGOf2NanwmkqqO4datv-IHnh1rx4OVB71tPLbyAficbcpECvDA0mEFb5VSaLtT_FTs0kc-BaJJYDIWpyn8UlAY1N1NkilOay6GckNMkYg4eDGJxTFmrcwuaQLpWwDtXLWtbG5YB-lE-JT-LPIgxn8n1qiBiRHgQHaWBHoSK2mkWrD" 
            alt="Dates app interface"
            referrerPolicy="no-referrer"
          />
          <img 
            className="absolute w-64 md:w-80 rounded-[3rem] shadow-2xl z-10 rotate-6 translate-x-[20%] translate-y-[10%] border-8 border-on-surface/80" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo7Z99PnX4v81--fBmu31_jAazVL5VraBLuWEcyIkSe_lmVvvgzc2vPmrtsOl6ie91RSZTqFIWhb8olrC9QR_H7D9wvoW0_la1yDjhUCu7it_Lgk1K4Iqyhqq9ym6tZLJ4JVbahqOrMmrVGswIKSt8vOCXVrAi22yErzAP25O771w3pv-Y3Rwc_iWlflA8r-Ld1xrw1GKZChEA8zVj_Wrmz0HXXF_ZvYgWyok5q5qFUAWNh_MEAlZ6yHgMKH6Cp7BMjbpA_DBkt9cK" 
            alt="Memories gallery"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 blob-shape -z-0"></div>
  </header>
);

const SocialProof = () => (
  <section className="bg-secondary text-on-secondary py-12 px-8 relative">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      <div className="flex items-center gap-4">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <img 
              key={i}
              className="w-12 h-12 rounded-full border-2 border-secondary bg-surface-container-low" 
              src={`https://picsum.photos/seed/user${i}/100/100`} 
              alt={`User ${i}`}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        <div>
          <div className="flex text-primary-fixed">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="font-bold text-lg">4.9★ Rating</p>
        </div>
      </div>
      <div className="text-2xl font-headline font-bold text-secondary-fixed italic">
        "Best date app ever!"
      </div>
      <div className="px-8 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
        <span className="font-bold">10k+</span> Happy Couples
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-32 px-8 bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-headline font-black text-5xl text-on-surface mb-4">Design for connection.</h2>
        <div className="w-24 h-1.5 bg-primary-fixed mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Calendar size={32} />,
            title: "Plan Together",
            desc: "Collaboratively propose and accept dates. No more back-and-forth texting about where to eat."
          },
          {
            icon: <Users size={32} />,
            title: "Group Dates & Bill Split",
            desc: "Invite friends with one tap. Automatic bill splitting makes group outings completely stress-free."
          },
          {
            icon: <ImageIcon size={32} />,
            title: "Memories",
            desc: "Capture and store photos directly within the date card. Build a digital scrapbooks of your life together."
          }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-surface-container-low p-12 rounded-xl group hover:bg-surface-container transition-colors"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="font-headline font-bold text-2xl mb-4">{feature.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="bg-primary py-32 px-8 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10 text-on-primary">
      <h2 className="font-headline font-black text-5xl text-center mb-24">Simple to start.</h2>
      <div className="grid md:grid-cols-3 gap-16 relative">
        <div className="hidden md:block absolute top-12 left-1/4 right-1/4 border-t-4 border-dotted border-on-primary/30 -z-10"></div>
        {[
          { step: 1, title: "Sign in with Google", desc: "One-tap onboarding to get you straight into planning." },
          { step: 2, title: "Propose or Accept", desc: "Find a spot, pick a time, and send the invitation." },
          { step: 3, title: "Syncs to Calendar", desc: "Automatically pushes to your Apple or Google calendar." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-black text-4xl mb-8 border-8 border-primary">
              {item.step}
            </div>
            <h3 className="font-headline font-bold text-2xl mb-4">{item.title}</h3>
            <p className="text-primary-container font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IdeasBoard = () => (
  <section className="py-32 px-8">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div className="order-2 md:order-1">
        <div className="relative bg-surface-container rounded-xl p-8 overflow-hidden">
          <img 
            className="w-full h-auto rounded-xl shadow-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9f74XvQ17n-8TeT5kZbqjWR1KiLO5X4fj7LQFDFKMwUBdSPvE03j_o39CSzAWDFJIgulcjMFSZKAEDu7rLaufstggU333Le0EXE-_q1JdUBCOgG6hOkL22OztLLQYdIotGssZWXSicSWIaKs6o_9lKDQYb86xY987xvxjq3LJumsCNYGEQIfrwScVeCVOcFVvErhjc5a6tWShfR9jpxwhV5YVAxmBPi_ZLjqZGgaeGQEH5u2bAC6hfFJp9lHF19XGSRlbOA-ei6vW" 
            alt="Date ideas feed"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="order-1 md:order-2">
        <span className="inline-block px-4 py-1 bg-primary-container text-on-primary-container rounded-full text-sm font-bold mb-6">NEW FEATURE</span>
        <h2 className="font-headline font-black text-5xl mb-6">Import inspiration.</h2>
        <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
          See a cute date idea on TikTok or Instagram? Just share the link to Dates, and we'll automatically extract the location and details for your next outing.
        </p>
        <button className="bg-primary-fixed text-on-primary-fixed px-10 py-4 rounded-full font-bold font-headline hover:bg-primary-container transition-colors shadow-lg shadow-primary-container/20 flex items-center gap-2">
          Explore Ideas <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

const Memories = () => (
  <section id="memories" className="py-32 bg-surface-container-low px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-headline font-black text-5xl mb-4">Every date. Remembered forever.</h2>
        <p className="text-on-surface-variant">Your private timeline of connection.</p>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <img 
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZhCfyvP2hEF78XXQ_PmsTe4P2DnUwSAVu81q_HaFvWqAawupw-pomz55d-z9r2szAnFcttklVt9sMd3GOAOnSJ6yqyFnW5IVTGUwtFWvHgeSRaqNt2UedxWJmmnIyHeTdQGVawGFDymIVIFdRN3GbAsXxTRhc1kRbU9tjj_pmrVI1amC6atprcAFoe8nMhulTZPo0xkiDH3bRYx9b8QVjX_iE-kvt677nHQ6Fn36OJmcHoW0CAXtWwvQaRZPdMnTnGEt7GFEtYaTt" 
            alt="Anniversary Dinner"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex items-end">
            <p className="text-white font-bold font-headline">Anniversary Dinner, Oct 24</p>
          </div>
        </div>
        
        <div className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <div className="bg-primary-container p-8 rounded-xl h-64 flex items-center justify-center text-center">
            <p className="font-headline font-black text-3xl text-on-primary-container italic">"The most beautiful sunset hike."</p>
          </div>
        </div>

        <div className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <img 
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcLhzGt6av-aQ6n50LGGOlXo00-Lym5Eq3Y6cVOyM-ozgIxqOCtPVyy0CuwLOfh1Ub9PGJcBXaTBTguqLS7RzwtzOGYc6FXp4xtcREstKwyjuSrvfYu9tViVETb7dugNseBWJZJASe9idSmkU9_P1wY9KxAXFCLCVLM2Ifw-WLQ0Pj1W624RcLvMHdjtsuMysFpqpXPt1kEQszAp7ErFMIt6mB7T280APQZecaspBuaNb4On6xxo9ZoX-Y7rpmTOn9R2TWQMGuZzlG" 
            alt="Sunset walk"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <img 
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMDcgZKVxePivK4x8DJW1ywKHwa1QU5cQkOaDJkzWkPldUUkVY7W036TDqjDaVCDnrHjlxY7vdjWsMcNRKytIyqbVcQU1MgSwRTYNd_Ad_PxnCAd7Vjwwebx9linhPDLS3HK6ghtZY8HhZTkdlMxKnafe-xDlLUfR0jSbukDy_zGzR9lzq8TK1UkB6jjVzP356yme4OWwCqFE5XA0FcPh9w7RlO3LvonYCgOgZv2AGXZyPvYC-lN2NcOX1OaWEXBLsFnVQkan0PM0-" 
            alt="Picnic setup"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <div className="bg-secondary-fixed p-8 rounded-xl h-48 flex flex-col justify-center">
            <Heart className="text-primary mb-4" size={32} fill="currentColor" />
            <p className="font-bold text-on-secondary-fixed">84 Memories captured this year</p>
          </div>
        </div>

        <div className="break-inside-avoid relative group rounded-xl overflow-hidden">
          <img 
            className="w-full rounded-xl transition-transform duration-500 group-hover:scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_Ks94Hc53qXKI4xZkMsXqxUlJPkRedSs_DpSI3JifUePV2jeSjwEBbmc95rBVh3r0idfn5WBr1w6Ij93AHHLp9qqPwTDYcsVX4J-zXGY-Qr7Li_MhFvj73inKXyT3tKSeFWB_3Qghu3HrOYuYe0rS4GtEaNmJFS-MknXOAAhzIphiASlNDGdXYixT6m7glxGUBonBKpVkn--wogBCwv-ldguRnbr1CiIxX5a0E-HQx9r2nRkx_kIl9qQsUAgDoVqKKou2cVZh6MW" 
            alt="Holding hands"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const DownloadCTA = () => (
  <section id="download" className="py-20 px-8">
    <div className="max-w-5xl mx-auto bg-primary rounded-xl p-16 md:p-24 text-center relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-on-primary/5 rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-on-primary/5 rounded-full"></div>
      <div className="relative z-10">
        <h2 className="font-headline font-black text-5xl md:text-6xl text-on-primary mb-12">Your next date starts here.</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-primary-fixed text-on-primary-fixed px-12 py-5 rounded-full font-black font-headline text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform">
            <Apple size={32} />
            App Store
          </button>
          <button className="bg-surface-container-lowest text-on-surface px-12 py-5 rounded-full font-black font-headline text-lg flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform">
            <Play size={32} fill="currentColor" />
            Google Play
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full rounded-t-xl mt-20 bg-surface-container-low text-secondary font-light text-sm">
    <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="text-xl font-bold text-[#1b1c1a] font-headline">Dates</div>
        <p className="text-on-surface-variant/60 max-w-xs text-center md:text-left">
          The premium space for intentional quality time and shared joy.
        </p>
      </div>
      <div className="flex gap-8">
        <a className="text-[#1b1c1a]/40 hover:text-[#1b1c1a] transition-opacity" href="#">Privacy Policy</a>
        <a className="text-[#1b1c1a]/40 hover:text-[#1b1c1a] transition-opacity" href="#">Terms of Service</a>
        <a className="text-[#1b1c1a]/40 hover:text-[#1b1c1a] transition-opacity" href="#">Contact Us</a>
        <a className="text-[#1b1c1a]/40 hover:text-[#1b1c1a] transition-opacity" href="#">Press Kit</a>
      </div>
      <div className="text-[#1b1c1a]/40">
        © 2024 Dates App. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <IdeasBoard />
      <Memories />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
