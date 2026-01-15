import { PageLayout } from '@/components/layout/PageLayout';
import { Hero } from '@/sections/Hero';
import { WhatIsPatashala } from '@/sections/WhatIsPatashala';
import { WhatYouBuild } from '@/sections/WhatYouBuild';
import { HowItWorks } from '@/sections/HowItWorks';
import { Community } from '@/sections/Community';
import { FinalCTA } from '@/sections/FinalCTA';

export const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <WhatIsPatashala />
      <WhatYouBuild />
      <HowItWorks />
      <Community />
      <FinalCTA />
    </PageLayout>
  );
};
