import { ReactNode } from 'react';
import { Header } from '@/components/ui/Header';
import { ComicClickEffect } from '@/components/effects/ComicClickEffect';

interface PageLayoutProps {
  children: ReactNode;
}

// Reusable page wrapper component for consistent layout across all pages
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <ComicClickEffect />
      <Header />
      <main>{children}</main>
    </>
  );
};
