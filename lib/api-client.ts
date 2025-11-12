// Client-side API helper for fetching content
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetchContent() {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/content` : '/api/content';
    const response = await fetch(url, {
      cache: 'no-store', // Always fetch fresh content
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch content');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error;
  }
}

export async function fetchContentSection(section: string) {
  try {
    const url = API_BASE_URL 
      ? `${API_BASE_URL}/api/content/${section}` 
      : `/api/content/${section}`;
    const response = await fetch(url, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch content section');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching content section:', error);
    throw error;
  }
}

