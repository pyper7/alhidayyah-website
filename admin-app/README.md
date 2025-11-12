# Admin Panel Application

This is a separate Next.js application for managing the Al-Hidaayah Islamic Foundation website content.

## Setup

1. Create a new Next.js project:
```bash
npx create-next-app@latest admin-panel --typescript --tailwind --app
cd admin-panel
```

2. Install dependencies:
```bash
npm install axios react-hook-form
```

3. Create environment file `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://yourdomain.com
ADMIN_API_KEY=your-api-key-here
```

## Project Structure

```
admin-panel/
├── app/
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── dashboard/
│   │   └── page.tsx          # Main dashboard
│   ├── content/
│   │   └── page.tsx          # Content management
│   └── layout.tsx            # Admin layout
├── lib/
│   └── api.ts                # API client
└── components/
    └── ContentForm.tsx       # Content editing forms
```

## API Client Example

Create `lib/api.ts`:

```typescript
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const API_KEY = process.env.ADMIN_API_KEY || '';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add API key to all requests
api.interceptors.request.use((config) => {
  if (API_KEY) {
    config.headers['x-api-key'] = API_KEY;
  }
  return config;
});

export const contentApi = {
  // Get all content
  getAll: async () => {
    const response = await api.get('/api/content');
    return response.data;
  },

  // Get specific section
  getSection: async (section: string) => {
    const response = await api.get(`/api/content/${section}`);
    return response.data;
  },

  // Update all content
  updateAll: async (content: any) => {
    const response = await api.put('/api/content', content);
    return response.data;
  },

  // Update specific section
  updateSection: async (section: string, data: any) => {
    const response = await api.put(`/api/content/${section}`, data);
    return response.data;
  },
};
```

## Authentication

You can implement authentication in the admin panel using:
- NextAuth.js
- Custom JWT tokens
- API key stored securely (client-side only for development)

For production, implement proper authentication with:
- User login system
- Session management
- Role-based access control

## Example Content Management Page

```typescript
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { contentApi } from '@/lib/api';

export default function ContentPage() {
  const [content, setContent] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const data = await contentApi.getAll();
    setContent(data);
    reset(data);
  };

  const onSubmit = async (data: any) => {
    try {
      await contentApi.updateAll(data);
      alert('Content saved successfully!');
    } catch (error) {
      alert('Error saving content');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
      <button type="submit">Save</button>
    </form>
  );
}
```

## Deployment

Deploy the admin panel separately from the main website:

1. **Vercel**: Create a new project and deploy
2. **Netlify**: Deploy as a separate site
3. **Custom Server**: Deploy to your own server

## Security Considerations

1. **API Key Storage**: Never commit API keys to version control
2. **HTTPS**: Always use HTTPS in production
3. **Authentication**: Implement proper user authentication
4. **Rate Limiting**: Consider implementing rate limiting
5. **CORS**: Configure CORS properly if needed

## Features to Implement

- [ ] User authentication (login/logout)
- [ ] Content editing forms
- [ ] Image upload functionality
- [ ] Content preview
- [ ] Change history/versioning
- [ ] User management
- [ ] Activity logs

