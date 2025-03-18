# CC BHUTAN Corporate Website

A modern, responsive corporate website for CC BHUTAN, showcasing the company's 25-year history, diverse brand portfolio, and business operations across Bhutan.

## Overview

This corporate website is built for CC BHUTAN, a leading retail and distribution company in Bhutan. The site features:
- Company overview and history
- Showcase of 4 major brands (Miniso, Focallure, Supermarkets, and Creamnest)
- Interactive image galleries of stores and products
- Company timeline and achievements
- Career opportunities

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Image Optimization**: Next.js Image component with Sharp

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Server Components**: Utilizing Next.js 14 Server Components for improved performance
- **Dynamic Animations**: Smooth animations and transitions using Framer Motion
- **Optimized Images**: Automatic image optimization for faster loading
- **SEO Friendly**: SEO optimized with proper metadata
- **Modern UI**: Clean, professional design with intuitive navigation

## Project Structure

```
cc-bhutan/
├── public/             # Public assets (images, etc.)
├── src/
│   ├── app/            # Next.js 14 App Router
│   │   ├── about/      # About Us page
│   │   ├── brands/     # Brand pages
│   │   │   ├── miniso/
│   │   │   ├── focallure/
│   │   │   ├── supermarket/
│   │   │   └── creamnest/
│   │   ├── join-us/    # Careers page
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── brands/     # Brand-specific components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   └── ui/         # UI components
│   └── lib/            # Utility functions
├── .gitignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cc-bhutan.git
   cd cc-bhutan
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Deployment

The project can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or AWS Amplify.

### Deploy to Vercel

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

## Content Customization

### Images

Replace placeholder images in the `public/images/` directory with actual company images:
- Replace hero images for each page
- Add actual store and product images
- Update team and company photos

### Content

Update content in the page files to reflect accurate company information:
- Company history and achievements
- Store locations and details
- Product information
- Career opportunities

## License

This project is proprietary and belongs to CC BHUTAN.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/) 