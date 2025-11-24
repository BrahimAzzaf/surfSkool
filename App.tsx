import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { TopTips } from './components/TopTips';
import { TargetAudience } from './components/TargetAudience';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-teal-200 selection:text-teal-900">
      <Header />
      <main>
        <Hero />
        <Approach />
        <TopTips />
        <TargetAudience />
        <Gallery />
        <FAQ />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;