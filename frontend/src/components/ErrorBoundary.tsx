import { Component, ErrorInfo, ReactNode } from 'react';
import { analytics } from '@/utils/analytics';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Track error to analytics
    analytics.trackError(error, 'React Error Boundary');
    
    // Log full error in development
    if (!import.meta.env.PROD) {
      console.error('Error Boundary Caught:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-brand-neutral-light">
            <div className="text-center p-8">
              <h1 className="text-4xl font-bold text-brand-purple mb-4">
                Something went wrong
              </h1>
              <p className="text-brand-neutral-mid mb-6">
                We've been notified and are looking into it.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-brand-purple text-white rounded-lg hover:bg-brand-purple-dark transition"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
