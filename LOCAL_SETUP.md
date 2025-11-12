# Running the Website Locally

## Quick Start

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to: http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server (with hot reload)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## What You'll See

The website includes:

- **Homepage** (`/`) - Hero section, services, about, dawah, orphanage, and school sections
- **About Page** (`/about`) - About the foundation
- **Contact Page** (`/contact`) - Contact form
- **Dawah Page** (`/dawah`) - Dawah program information
- **Orphanage Page** (`/orphanage`) - Orphanage services
- **School Page** (`/rihad-saliheen-school`) - School information
- **Get Involved Page** (`/get-involved`) - Ways to support

## Content Management

Content is stored in `data/content.json`. This file is created automatically with default content when the server starts.

To update content:
1. Edit `data/content.json` directly, OR
2. Use the admin API (when set up) to update content via API

## Troubleshooting

### Port 3000 already in use?
Change the port by editing `package.json`:
```json
"dev": "next dev -p 3001"
```

### Node version warning?
The project requires Node.js 18.17.0 or higher. Your current version (18.10.0) should work, but consider updating:
- Download from: https://nodejs.org/

### Build errors?
1. Delete `node_modules` and `.next` folder
2. Run `npm install` again
3. Run `npm run dev`

## Development Tips

- The site uses **Hot Module Replacement (HMR)** - changes appear instantly
- Check the browser console for any errors
- Use browser DevTools to inspect components
- All pages are server-rendered for better SEO

## Next Steps

Once the site is running:
1. Customize content in `data/content.json`
2. Modify components in the `components/` folder
3. Update styles in `tailwind.config.ts`
4. Set up the admin API to manage content dynamically

