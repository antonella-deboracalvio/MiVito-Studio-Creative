import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import ExamplesSection from './components/home/ExamplesSection';
import Pricing from './components/home/Pricing';
import HowItWorksFaq from './components/home/HowItWorksFaq';
import CTA from './components/home/CTA';
import InviteBuilder from './components/builder/InviteBuilder';
import HeroMissionDemo from './components/invitation/heroMission/HeroMissionDemo';
import InvitationRenderer from './components/invitation/InvitationRenderer';
import { createBuilderSelectionFromTemplate } from './data/builderOptions';
import { getInvitationTemplateById } from './data/invitationRegistry';
import { resetWindowScroll } from './utils/scroll';

const HERO_MISSION_HASH = '#/demo/hero-mission';

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash || '#');

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return hash;
}

function App() {
  const hash = useHashRoute();
  const [activeDemo, setActiveDemo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [demoReturnCategory, setDemoReturnCategory] = useState('Tutti');
  const [builderSelection, setBuilderSelection] = useState({
    category: null,
    cover: null,
    template: null,
  });
  const [builderStep, setBuilderStep] = useState(1);
  const isHeroMissionDemo = hash.startsWith(HERO_MISSION_HASH);
  const selectedCategory = activeCategory === 'Tutti' ? null : activeCategory;
  const activeInvitationTemplate = getInvitationTemplateById(activeDemo);

  useEffect(() => {
    resetWindowScroll();
  }, [hash, activeDemo, activeCategory]);

  const handleOpenDemo = (demoId) => {
    resetWindowScroll();
    setDemoReturnCategory(activeCategory);
    setActiveDemo(demoId);
  };

  const handleBackFromDemo = () => {
    setActiveCategory(demoReturnCategory);
    setActiveDemo(null);
    window.setTimeout(() => {
      resetWindowScroll();
    }, 0);
  };

  const handleUseStyle = (template) => {
    setBuilderSelection(createBuilderSelectionFromTemplate(template));
    setBuilderStep(4);
    window.setTimeout(() => {
      document.getElementById('builder')?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 0);
  };

  if (isHeroMissionDemo) {
    return <HeroMissionDemo />;
  }

  if (activeInvitationTemplate) {
    return <InvitationRenderer template={activeInvitationTemplate} onBack={handleBackFromDemo} />;
  }

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-text">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-paper" />
      <Header />
      <main>
        {/* Sito agenzia: hero e catalogo esempi pubblici. */}
        <div id="home">
          {!selectedCategory ? <Hero /> : null}
        </div>
        <ExamplesSection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onOpenDemo={handleOpenDemo}
          onUseStyle={handleUseStyle}
        />
        {/* Builder: configuratore guidato e anteprima generata. */}
        <InviteBuilder
          builderSelection={builderSelection}
          builderStep={builderStep}
          onBuilderStepChange={setBuilderStep}
        />
        {/* Sito agenzia: prezzo, FAQ e contatto finale. */}
        <Pricing />
        <HowItWorksFaq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
