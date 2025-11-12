# Al-Hidaayah Islamic Foundation Website

A modern, fast, and easily deployable website for Al-Hidaayah Islamic Foundation, rebuilt using Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- **Fast Performance**: Optimized for speed with server-side rendering and static generation
- **Responsive Design**: Fully responsive and mobile-friendly
- **SEO Optimized**: Built-in SEO features with Next.js
- **Easy Deployment**: One-click deployment to Vercel

## 📋 Pages

- **Home**: Hero section, services overview, and main content sections
- **About**: Information about the foundation
- **Dawah**: Details about Dawah programs
- **Orphanage**: Information about orphanage services
- **Rihad Saliheen School**: School information
- **Get Involved**: Ways to support the foundation
- **Donate**: Secure donation page with Paystack integration
- **Contact**: Contact form and information
- **Charity Works**: Gallery of charity works and programs

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter, Plus Jakarta Sans, Work Sans)
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy" and your site will be live in minutes

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **AWS Amplify**: For AWS infrastructure
- **Self-hosted**: Build the static export and serve with any web server

## 🎨 Design System

### Colors
- Primary Green: `#026f38`
- Accent Red: `#e64a4a`
- Background: `#f6fff8`
- Text: `#181b17`

### Typography
- Body: Inter
- Headings: Plus Jakarta Sans
- Buttons: Work Sans

## 📝 Content Management

Content is managed through a REST API. The admin panel is a separate application that communicates with this API.

### API Endpoints

- `GET /api/content` - Get all content
- `PUT /api/content` - Update all content (requires API key)
- `GET /api/content/{section}` - Get specific section
- `PUT /api/content/{section}` - Update specific section (requires API key)

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API documentation.

### Admin Panel

The admin panel is a separate application. See [admin-app/README.md](./admin-app/README.md) for setup instructions.

### Environment Variables

Create a `.env.local` file:

```env
ADMIN_API_KEY=your-secure-api-key-here
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your-paystack-public-key-here
```

Generate a secure API key:
```bash
openssl rand -base64 32
```

#### Paystack Setup

1. Sign up for a Paystack account at [https://paystack.com](https://paystack.com)
2. Get your Public Key from the Paystack Dashboard
3. Add it to your `.env.local` file as `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
4. For production, use your Live Public Key
5. For testing, use your Test Public Key (starts with `pk_test_`)

**Note**: The donate page uses Paystack's inline payment method. Make sure your Paystack account is activated and configured properly.

## 🔧 Customization

- Update colors in `tailwind.config.ts`
- Modify content in component files in `/components` and `/app`
- Add new pages by creating files in `/app/[page-name]/page.tsx`

## 📄 License

This project is created for Al-Hidaayah Islamic Foundation.

## 🤝 Support

For questions or support, please contact the development team.

---

Built with ❤️ for Al-Hidaayah Islamic Foundation

