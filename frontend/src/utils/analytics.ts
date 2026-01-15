// Simple event tracking utility
// Supports multiple analytics providers (GA4, Plausible, etc.)

interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

class Analytics {
  private enabled: boolean;

  constructor() {
    // Disable analytics in dev mode
    this.enabled = import.meta.env.PROD;
  }

  // Page view tracking
  pageView(path: string, title?: string) {
    if (!this.enabled) return;

    // Google Analytics 4
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title || document.title,
      });
    }

    // Plausible Analytics
    if (typeof window.plausible !== 'undefined') {
      window.plausible('pageview');
    }
  }

  // Generic event tracking
  track(eventName: string, properties?: Record<string, any>) {
    if (!this.enabled) return;

    // Google Analytics 4
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, properties);
    }

    // Plausible Analytics
    if (typeof window.plausible !== 'undefined') {
      window.plausible(eventName, { props: properties });
    }

    // Console log in development
    if (!import.meta.env.PROD) {
      console.log('[Analytics]', eventName, properties);
    }
  }

  // CTA click tracking
  trackCTA(ctaName: string, destination: string) {
    this.track('cta_click', {
      cta_name: ctaName,
      destination,
    });
  }

  // Entry gate tracking
  trackEntryGate(action: 'entered' | 'skipped') {
    this.track('entry_gate', {
      action,
    });
  }

  // Contact form tracking
  trackContactForm(status: 'submitted' | 'success' | 'failure', errorMessage?: string) {
    this.track('contact_form', {
      status,
      error_message: errorMessage,
    });
  }

  // Error tracking
  trackError(error: Error, context?: string) {
    this.track('error', {
      error_message: error.message,
      error_stack: error.stack,
      context,
    });

    // Also log to console in production for debugging
    console.error('[Error Tracked]', context, error);
  }
}

// Singleton instance
export const analytics = new Analytics();

// TypeScript declarations for analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}
