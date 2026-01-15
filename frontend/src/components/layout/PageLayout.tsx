import { ReactNode } from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import ClickSpark from '@/components/effects/ClickSpark';

interface PageLayoutProps {
  children: ReactNode;
}

// Reusable page wrapper component for consistent layout across all pages
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <ClickSpark
      sparkColor="#6366f1"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={6}
      duration={500}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </ClickSpark>
  );
};
