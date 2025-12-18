# Aly Hamad - Legal Practice CRM Landing Page

A modern, conversion-focused landing page for a legal practice CRM service built with React, TypeScript, and Framer Motion.

Created by **Aly Hamad**

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## Features

- Responsive design (mobile, tablet, desktop)
- Dark theme with green accent colors
- Smooth scroll navigation
- Animated sections with Framer Motion
- Custom SVG logo
- Accessible accordion FAQ
- Interactive pricing cards

## Page Sections

1. **Hero** - Value proposition with dashboard preview
2. **Product Showcase** - CRM screen mockups gallery
3. **Process** - 3-step workflow with video placeholder
4. **How It Works** - Step-by-step guide for leads
5. **6 Reasons** - Benefits grid with stats
6. **Pricing** - 3-tier pricing cards (Essential/Pro/Premium)
7. **FAQ** - Expandable accordion with 8 questions
8. **Footer** - Links, newsletter signup, social icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate to project directory
cd Lawyer-Landing-Page

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── Pricing.tsx
│   ├── Process.tsx
│   ├── ProductShowcase.tsx
│   └── Reasons.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
