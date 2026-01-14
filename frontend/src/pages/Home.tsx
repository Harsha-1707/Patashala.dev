import { Header } from '@/components/ui/Header';
import { ComicClickEffect } from '@/components/effects/ComicClickEffect';
import { Hero } from '@/sections/Hero';
import { WhatIsPatashala } from '@/sections/WhatIsPatashala';
import { WhatYouBuild } from '@/sections/WhatYouBuild';
import { HowItWorks } from '@/sections/HowItWorks';
import { Community } from '@/sections/Community';
import { FinalCTA } from '@/sections/FinalCTA';

export const Home = () => {
  return (
    <>
      <ComicClickEffect />
      <Header />
      <main>
        <Hero />
        <WhatIsPatashala />
        <WhatYouBuild />
        <HowItWorks />
        <Community />
        <FinalCTA />
      </main>
    </>
  );
};
