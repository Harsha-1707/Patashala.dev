const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface Stats {
  projects: number;
  learners: number;
  completionRate: number;
  activeCourses: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  requirement: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Fetch platform statistics
export async function getStats(): Promise<Stats> {
  const response = await fetch(`${API_BASE_URL}/api/v1/stats`);
  if (!response.ok) {
    throw new Error('Failed to fetch stats');
  }
  return response.json();
}

// Submit contact form
export async function submitContact(data: ContactFormData): Promise<ApiResponse<null>> {
  const response = await fetch(`${API_BASE_URL}/api/v1/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  
  if (!response.ok) {
    return {
      success: false,
      error: result.error || 'Failed to submit form',
    };
  }

  return result;
}
