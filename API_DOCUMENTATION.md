# API Documentation

This document describes the API endpoints available for managing website content. The admin panel (separate application) should use these endpoints to manage content.

## Base URL

- Development: `http://localhost:3000`
- Production: `https://yourdomain.com`

## Authentication

All write operations (PUT, POST, DELETE) require an API key in the request header:

```
x-api-key: your-api-key-here
```

Set the API key in your environment variables:
```bash
ADMIN_API_KEY=your-secure-api-key-here
```

Generate a secure API key:
```bash
openssl rand -base64 32
```

## Endpoints

### Get All Content

**GET** `/api/content`

Returns all website content.

**Response:**
```json
{
  "hero": {
    "title": "Join Us As We Shape The World Into A Better Place",
    "subtitle": "AL-Hidayyah Islamic Foundation",
    "description": "..."
  },
  "services": {
    "dawah": { ... },
    "orphanage": { ... },
    "school": { ... }
  },
  "about": { ... },
  "dawah": { ... },
  "orphanage": { ... },
  "school": { ... }
}
```

**Status Codes:**
- `200` - Success
- `500` - Server error

---

### Update All Content

**PUT** `/api/content`

Updates all website content at once.

**Headers:**
```
Content-Type: application/json
x-api-key: your-api-key
```

**Request Body:**
```json
{
  "hero": { ... },
  "services": { ... },
  "about": { ... },
  ...
}
```

**Response:**
```json
{
  "success": true,
  "message": "Content updated successfully"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized (invalid or missing API key)
- `500` - Server error

---

### Get Specific Section

**GET** `/api/content/{section}`

Returns content for a specific section.

**Path Parameters:**
- `section` - One of: `hero`, `services`, `about`, `dawah`, `orphanage`, `school`

**Example:**
```
GET /api/content/hero
```

**Response:**
```json
{
  "title": "Join Us As We Shape The World Into A Better Place",
  "subtitle": "AL-Hidayyah Islamic Foundation",
  "description": "..."
}
```

**Status Codes:**
- `200` - Success
- `404` - Section not found
- `500` - Server error

---

### Update Specific Section

**PUT** `/api/content/{section}`

Updates content for a specific section.

**Headers:**
```
Content-Type: application/json
x-api-key: your-api-key
```

**Path Parameters:**
- `section` - One of: `hero`, `services`, `about`, `dawah`, `orphanage`, `school`

**Request Body:**
```json
{
  "title": "Updated Title",
  "subtitle": "Updated Subtitle",
  "description": "Updated description"
}
```

**Example:**
```
PUT /api/content/hero
```

**Response:**
```json
{
  "success": true,
  "message": "Section updated successfully"
}
```

**Status Codes:**
- `200` - Success
- `401` - Unauthorized (invalid or missing API key)
- `404` - Section not found
- `500` - Server error

---

## Content Structure

### Hero Section
```typescript
{
  title: string;
  subtitle: string;
  description: string;
}
```

### Services Section
```typescript
{
  dawah: {
    title: string;
    description: string;
  };
  orphanage: {
    title: string;
    description: string;
  };
  school: {
    title: string;
    description: string;
  };
}
```

### About Section
```typescript
{
  title: string;
  subtitle: string;
  vision: string;
  mission: string[]; // Array of mission statements
}
```

### Dawah Section
```typescript
{
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
}
```

### Orphanage Section
```typescript
{
  title: string;
  description: string;
  whatWeProvide: string[];
  howYouCanHelp: string[];
}
```

### School Section
```typescript
{
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
}
```

## Error Responses

All error responses follow this format:

```json
{
  "error": "Error message description"
}
```

## Example Usage

### JavaScript/TypeScript

```typescript
// Fetch all content
const response = await fetch('https://yourdomain.com/api/content');
const content = await response.json();

// Update hero section
const updateHero = async (heroData: any) => {
  const response = await fetch('https://yourdomain.com/api/content/hero', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ADMIN_API_KEY,
    },
    body: JSON.stringify(heroData),
  });
  
  return await response.json();
};
```

### cURL

```bash
# Get all content
curl https://yourdomain.com/api/content

# Update hero section
curl -X PUT https://yourdomain.com/api/content/hero \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-api-key" \
  -d '{
    "title": "New Title",
    "subtitle": "New Subtitle",
    "description": "New description"
  }'
```

## Rate Limiting

Currently, there is no rate limiting implemented. Consider implementing rate limiting in production for security.

## CORS

If your admin panel is hosted on a different domain, you may need to configure CORS in `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://admin.yourdomain.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,PUT,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type,x-api-key' },
        ],
      },
    ];
  },
};
```

